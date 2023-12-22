const A = (id) => document.getElementById(id)
const showPassword = ()=>{

}
window.onload = function () {
    console.log('hola');

    A('firstName').addEventListener('focus', function(){
        A('msgError-name').innerHTML=null
        this.classList.remove('is-invalid')
    })

    A('firstName').addEventListener('blur', function (e) {
        switch (true) {
            case !this.value.trim():
                A('msgError-name').innerHTML = 'El nombre es obligatorio'
                this.classList.add('is-invalid')
                break;
            case !/^[A-Za-z]+$/.test(this.value):
                A('msgError-name').innerHTML = 'No se permiten numeros'
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length < 2:
                A('msgError-name').innerHTML = 'Minimo dos caracteres'
                this.classList.add('is-invalid')
                break;
            default:
                A('msgError-name').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                break;
        }
    })
   


    A('lastName').addEventListener('focus', function(){
        A('msgError-lastName').innerHTML=null
        this.classList.remove('is-invalid')
    })
    A('lastName').addEventListener('blur', function (e) {
        switch (true) {
            case !this.value.trim():
                A('msgError-lastName').innerHTML = 'El apellido es obligatorio'
                this.classList.add('is-invalid')
                break;
            case !/^[A-Za-z]+$/.test(this.value).trim():
                A('msgError-lastName').innerHTML = 'No se permiten numeros'
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length < 2:
                A('msgError-lastName').innerHTML = 'Minimo dos caracteres'
                this.classList.add('is-invalid')
                break;
            default:
                A('msgError-lastName').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                break;
        }
    })

    A('phone').addEventListener('focus', function(){
        A('msgError-phone').innerHTML=null
        this.classList.remove('is-invalid')
    })

    A('phone').addEventListener('blur', function (e) {
        switch (true) {
            
            case /^[A-Za-z]+$/.test(this.value):
                A('msgError-phone').innerHTML = 'No se permiten letras'
                this.classList.add('is-invalid')
                break;
          
            default:
                A('msgError-phone').innerHTML = null
                this.classList.remove('is-invalid')                
                break;
        }
    })
    A('email').addEventListener('focus', function(){
        A('msgError-email').innerHTML=null
        this.classList.remove('is-invalid')
    })

    A('email').addEventListener('blur', function (e) {
        switch (true) {
            case !this.value.trim():
                A('msgError-email').innerHTML = 'El email es obligatorio'
                this.classList.add('is-invalid')
                break;
            case !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.value):
                A('msgError-email').innerHTML = 'El email es invalido'
                this.classList.add('is-invalid')
                break;

            default:
                A('msgError-email').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                break;
        }
    })

    A('email').addEventListener('change', async function (e) {
        try {

            const response = await fetch(`/api/check-email?email=${this.value}`)
            const result = await response.json()
            console.log(result);
            if (result.data) {
                A('msgError-email').innerHTML = 'El email ya esta registrado'
                this.classList.add('is-invalid')
            }

        } catch (error) {
            console.error();
        }


    })

    
    A('password').addEventListener('focus', function(){
        A('msgError-password').innerHTML=null
        this.classList.remove('is-invalid')
    })
    A('password').addEventListener('blur', function (e) {
        switch (true) {
            case !this.value.trim():
                A('msgError-password').innerHTML = 'La contraseña  es obligatoria'
                this.classList.add('is-invalid')
                break;
            case !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,12}$/.test(this.value):
                A('msgError-password').innerHTML = 'El password debe tener entre 6 y 12 caracteres,una mayuscula y un caracter especial'
                this.classList.add('is-invalid')
                break;

            default:
                A('msgError-password').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                break;
        }
    })

    A('password2').addEventListener('focus', function(){
        A('msgError-password2').innerHTML=null
        this.classList.remove('is-invalid')
    })

    
    A('password2').addEventListener('blur', function (e) {
        switch (true) {
            case !this.value.trim():
                A('msgError-password2').innerHTML = 'Debes confirmar tu contraseña'
                this.classList.add('is-invalid')
                break;
            case this.value.trim() !== A('password').value.trim():
                A('msgError-password2').innerHTML = 'Las contraseñas no coinciden '
                this.classList.add('is-invalid')
                break;

            default:
                A('msgError-password2').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                break;
        }
    })
    

   

    A('form-register').addEventListener('submit', function(e){
        e.preventDefault();
        const formregister = document.querySelector('.form')
        const elementsForm = formregister.elements; 

     let error = false

     

const msgErrors = []

     for (let i = 0; i < elementsForm.length - 2; i++) {
        
         
         
         if(!elementsForm[i].value || elementsForm[i].classList.contains('is-invalid')){
             elementsForm[i].classList.add('is-invalid')
             A('msgError-empty').innerHTML = "<h6>los campos no pueden estar vacios</h6>"
             error = true
             msgErrors.push(`El campo ${elementsForm[i].name} no puede quedar vacio`)
         }
       
      }
      console.log(msgErrors)
      !error && this.submit()
 

 })
}