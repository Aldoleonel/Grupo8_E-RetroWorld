const $ = id => document.getElementById(id);

window.onload = function () {
    console.log('login.js success!!');
    
      
    $('email').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-email-text').innerHTML = "El email es obligatorio";
                this.classList.add("is-invalid");
                break;
            case !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.value) :
                $('msgError-email-text').innerHTML = "El email es inválido";
                this.classList.add("is-invalid");
                break            
            default:
                $('msgError-email-text').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

    $('password').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-password').innerHTML = "La contraseña es obligatoria";
                this.classList.add("is-invalid");
                break;
            default:
                $('msgError-password').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

    $('password').addEventListener('focus', function() {
        $('msgError-password').innerHTML = null;
        this.classList.remove("is-invalid");
    });
    
    $('login').addEventListener('submit', function(e){
        e.preventDefault();
        const login = document.querySelector('.form')
        const elementsForm = login.elements; 

     let error = false

     

const msgErrors = []

     for (let i = 0; i < elementsForm.length - 2; i++) {
        
         
         
        
         
         if(!elementsForm[i].value || elementsForm[i].classList.contains('is-invalid')){
             elementsForm[i].classList.add('is-invalid')
             $('msgError-empty').innerHTML = "<h6>Los campos no pueden estar vacios!!</h6>"
             error = true
             msgErrors.push(`El campo ${elementsForm[i].name} no puede quedar vacio`)
         }
       
      }
      console.log(msgErrors)
      !error && this.submit()
 

 })

    

        
    

    

}