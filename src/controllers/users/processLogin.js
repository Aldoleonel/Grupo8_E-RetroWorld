const { validationResult } = require("express-validator")
const db = require('../../database/models')


module.exports = (req,res) => {

    const errors = validationResult(req);
    console.log(req.session.userLogin);
    if(errors.isEmpty()){

        db.User.findOne({
            where:{
                email: req.body.email
            }
        })
        .then(user => {
            // return res.send(user);
            const {id,firstName,roleId} = user;
            
            req.session.userLogin = {
                id,
                firstName,
                roleId
            }

            req.body.remember !== undefined && res.cookie('secretaso',req.session.userLogin,{
                maxAge : 1000 * 60 * 5
            });
            db.Order.findOne({
                where : {
                    userId : user.id,
                    statusId : 1
                },
                include : [{
                    association : 'items',
                    include : [{
                        association : 'product',
                        
                    }]
                    
                }]
                
            }).then(order => {
                if(order){
                    req.session.cart = {
                        orderId : order.id,
                        total : order.total,
                        products : order.items.map(({quantity,product : {name, price, discount, image, id}}) => {
                            return {
                                name,
                                price,
                                discount,
                                image,    //puede haber un error aqui!
                                quantity,
                                id
                            }
                        }),
                    };
                    //console.log(req.session.cart, '<<<<<<<<<<<<<<')
                    return res.redirect('/')
                }else{
                    db.Order.create({
                        total : 0,
                        userId : user.id,
                        status : 1
                    }).then(order => {
                        req.session.cart = {
                            orderId : order.id,
                            total : order.total,
                            products : [],
                        };
                        //console.log(req.session.cart, '<<<<<<<<<<<<')
                        return res.redirect('/')
                    })
                }               
            });
            console.log(req.session.cart)                       
        }).catch((error) => console.log(error));
        
    }else {
        return res.render('login',{
            errors : errors.mapped(),
            
        })
    }

  
}