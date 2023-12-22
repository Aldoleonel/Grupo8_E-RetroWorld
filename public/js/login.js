const F = id => document.getElementById(id);

window.onload = function () {
    console.log('login.js success!!');
    
      
    F('email').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                F('msgError-email-text').innerHTML = "El email es obligatorio";
                this.classList.add("is-invalid");
                break;
             case !/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(this.value):
                F('msgError-email-text').innerHTML = 'El email es invalido'
                this.classList.add('is-invalid')
                break;      
            default:
                F('msgError-email-text').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

    F('password').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                F('msgError-password').innerHTML = "La contraseña es obligatoria";
                this.classList.add("is-invalid");
                break;
            default:
                F('msgError-password').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

    F('password').addEventListener('focus', function() {
        F('msgError-password').innerHTML = null;
        this.classList.remove("is-invalid");
    });
    
    F('login').addEventListener('submit', function(e){
        e.preventDefault();
        const login = document.querySelector('.form')
        const elementsForm = login.elements; 

     let error = false

     

const msgErrors = []

     for (let i = 0; i < elementsForm.length - 2; i++) {
        
         
         
        
         
         if(!elementsForm[i].value || elementsForm[i].classList.contains('is-invalid')){
             elementsForm[i].classList.add('is-invalid')
             F('msgError-empty').innerHTML = "<h6>Los campos no pueden estar vacios!!</h6>"
             error = true
             msgErrors.push(`El campo ${elementsForm[i].name} no puede quedar vacio`)
         }
       
      }
      console.log(msgErrors)
      !error && this.submit()
 

 })

    

        
    

    

}