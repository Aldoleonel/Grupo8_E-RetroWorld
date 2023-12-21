const F = id => document.getElementById(id);

window.onload = function () {
    console.log('productAdd.js success!!');
   

    F('name').addEventListener('focus', function() {
        F('msgError-name').innerHTML = null;
        this.classList.remove("is-invalid");
    });

    F('name').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                F('msgError-name').innerHTML = "El nombre del producto es obligatorio";
                this.classList.add("is-invalid");
                break
            case this.value.trim().length < 3 :
                F('msgError-name').innerHTML = "El nombre debe tener como mínimo 2 caracteres";
                this.classList.add("is-invalid");
                break
            default:
                F('msgError-name').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });
    F('categoryId').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value:
                F('msgError-categoryId').innerHTML = "La categoria es obligatoria";
                this.classList.add("is-invalid");
                break
            default:
                F('msgError-categoryId').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });
    F('sectionId').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value:
                F('msgError-sectionId').innerHTML = "El estado del producto es obligatorio";
                this.classList.add("is-invalid");
                break
            default:
                    F('msgError-sectionId').innerHTML = null;
                    this.classList.remove("is-invalid");
                    this.classList.add("is-valid");
                    break;
        }
    });
    F('typeId').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                F('msgError-typeId').innerHTML = "El tipo de producto es obligatorio";
                this.classList.add("is-invalid");
                break
                default:
                    F('msgError-typeId').innerHTML = null;
                    this.classList.remove("is-invalid");
                    this.classList.add("is-valid");
                    break;
        }
    });
    F('price').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                F('msgError-price').innerHTML = "El precio del producto es obligatorio";
                this.classList.add("is-invalid");
                break
            case !/^[1-9]\d*(\.\d+)?F/.test(this.value):
            F('msgError-price').innerHTML = "Solo números positivos";
            this.classList.add("is-invalid");
                break
            default:
                F('msgError-price').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });
    F('description').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                F('msgError-description').innerHTML = "La descripción del producto es obligatoria";
                this.classList.add("is-invalid");
                break
            case this.value.trim().length < 10 :
            F('msgError-description').innerHTML = "La descripción debe contener como mínimo 10 caracteres";
            this.classList.add("is-invalid");
                break
            default:
                F('msgError-description').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });
    F('image').addEventListener("change",function(e) {
        switch (true) {
            case !(/.(gif|jpeg|jpg|png)F/i.test(this.value)):
                F('msgError-image').innerHTML = "Error, los formatos de imagenes aceptados son (gif | jpeg | jpg | png)";
                    this.classList.add("is-invalid");
                break;
            
        default:
                F('msgError-image').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
                
        }
        
    })
    
        
    
    F('formAdd').addEventListener('submit', function(e){
           e.preventDefault();
           const formAdd = document.querySelector('.form')
           const elementsForm = formAdd.elements; 

        let error = false

        

const msgErrors = []

        for (let i = 0; i < elementsForm.length - 2; i++) {
           
            const elementInput = elementsForm[i];
            if (
                elementInput.id === 'discount'
            ) {
                continue;
            }
            if(!elementsForm[i].value || elementsForm[i].classList.contains('is-invalid')){
                elementsForm[i].classList.add('is-invalid')
                F('msgError-empty').innerHTML = "<h5>Hay errores en la carga de datos del producto</h5>"
                error = true
                msgErrors.push(`El campo F{elementsForm[i].name} no puede quedar vacio`)
            }
          
         }
         console.log(msgErrors)
         !error && this.submit()
    

    })
}