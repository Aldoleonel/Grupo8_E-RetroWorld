const $ = (id) => document.getElementById(id)
const showPassword = ()=>{

}
window.onload = function () {
    console.log('hola');

    $('firstName').addEventListener('focus', function(){
        $('msgError-name').innerHTML=null
        this.classList.remove('is-invalid')
    })

    $('firstName').addEventListener('blur', function (e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-name').innerHTML = 'El nombre es obligatorio'
                this.classList.add('is-invalid')
                break;
            case !/^[A-Za-z]+$/.test(this.value):
                $('msgError-name').innerHTML = 'No se permiten numeros'
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length < 2:
                $('msgError-name').innerHTML = 'Minimo dos caracteres'
                this.classList.add('is-invalid')
                break;
            default:
                $('msgError-name').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                break;
        }
    })
   


    $('lastName').addEventListener('focus', function(){
        $('msgError-lastName').innerHTML=null
        this.classList.remove('is-invalid')
    })
    $('lastName').addEventListener('blur', function (e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-lastName').innerHTML = 'El apellido es obligatorio'
                this.classList.add('is-invalid')
                break;
            case !/^[A-Za-z]+$/.test(this.value).trim():
                $('msgError-lastName').innerHTML = 'No se permiten numeros'
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length < 2:
                $('msgError-lastName').innerHTML = 'Minimo dos caracteres'
                this.classList.add('is-invalid')
                break;
            default:
                $('msgError-lastName').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                break;
        }
    })

    $('phone').addEventListener('focus', function(){
        $('msgError-phone').innerHTML=null
        this.classList.remove('is-invalid')
    })

    $('phone').addEventListener('blur', function (e) {
        switch (true) {
            
            case /^[A-Za-z]+$/.test(this.value):
                $('msgError-phone').innerHTML = 'No se permiten letras'
                this.classList.add('is-invalid')
                break;
          
            default:
                $('msgError-phone').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                break;
        }
    })
    $('email').addEventListener('focus', function(){
        $('msgError-email').innerHTML=null
        this.classList.remove('is-invalid')
    })

    $('email').addEventListener('blur', function (e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-email').innerHTML = 'El email es obligatorio'
                this.classList.add('is-invalid')
                break;
            case !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.value):
                $('msgError-email').innerHTML = 'El email es invalido'
                this.classList.add('is-invalid')
                break;

            default:
                $('msgError-email').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                break;
        }
    })

    $('email').addEventListener('change', async function (e) {
        try {

            const response = await fetch(`/api/check-email?email=${this.value}`)
            const result = await response.json()
            console.log(result);
            if (result.data) {
                $('msgError-email').innerHTML = 'El email ya esta registrado'
                this.classList.add('is-invalid')
            }

        } catch (error) {
            console.error();
        }


    })

    
    $('password').addEventListener('focus', function(){
        $('msgError-password').innerHTML=null
        this.classList.remove('is-invalid')
    })
    $('password').addEventListener('blur', function (e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-password').innerHTML = 'La contraseña  es obligatoria'
                this.classList.add('is-invalid')
                break;
            case !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,12}$/.test(this.value):
                $('msgError-password').innerHTML = 'El password debe tener entre 6 y 12 caracteres,una mayuscula y un caracter especial'
                this.classList.add('is-invalid')
                break;

            default:
                $('msgError-password').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                break;
        }
    })

    $('password2').addEventListener('focus', function(){
        $('msgError-password2').innerHTML=null
        this.classList.remove('is-invalid')
    })

    
    $('password2').addEventListener('blur', function (e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-password2').innerHTML = 'Debes confirmar tu contraseña'
                this.classList.add('is-invalid')
                break;
            case this.value.trim() !== $('password').value.trim():
                $('msgError-password2').innerHTML = 'Las contraseñas no coinciden '
                this.classList.add('is-invalid')
                break;

            default:
                $('msgError-password2').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                break;
        }
    })
    

   

    $('form-register').addEventListener('submit', function(e){
        e.preventDefault();
        const formregister = document.querySelector('.form')
        const elementsForm = formregister.elements; 

     let error = false

     

const msgErrors = []

     for (let i = 0; i < elementsForm.length - 2; i++) {
        
         
         
         if(!elementsForm[i].value || elementsForm[i].classList.contains('is-invalid')){
             elementsForm[i].classList.add('is-invalid')
             $('msgError-empty').innerHTML = "<h6>los campos no pueden estar vacios</h6>"
             error = true
             msgErrors.push(`El campo ${elementsForm[i].name} no puede quedar vacio`)
         }
       
      }
      console.log(msgErrors)
      !error && this.submit()
 

 })
}