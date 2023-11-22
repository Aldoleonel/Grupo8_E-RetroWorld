const $ = id => document.getElementById(id);

window.onload = function () {
    console.log('login.js success!!');

    $('email').focus();    
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


    

        
    

    

}