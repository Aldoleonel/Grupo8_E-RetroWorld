const $ = id => document.getElementById(id);

window.onload = function () {
    console.log('productAdd.js success!!');
   

    $('name').addEventListener('focus', function() {
        $('msgError-name').innerHTML = null;
        this.classList.remove("is-invalid");
    });

    $('name').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-name').innerHTML = "El nombre del producto es obligatorio";
                this.classList.add("is-invalid");
                break
            case this.value.trim().length < 3 :
                $('msgError-name').innerHTML = "El nombre debe tener como mínimo 2 caracteres";
                this.classList.add("is-invalid");
                break
            default:
                $('msgError-name').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });
    $('categoryId').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value:
                $('msgError-categoryId').innerHTML = "La categoria es obligatoria";
                this.classList.add("is-invalid");
                break
            default:
                $('msgError-categoryId').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });
    $('sectionId').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value:
                $('msgError-sectionId').innerHTML = "El estado del producto es obligatorio";
                this.classList.add("is-invalid");
                break
            default:
                    $('msgError-sectionId').innerHTML = null;
                    this.classList.remove("is-invalid");
                    this.classList.add("is-valid");
                    break;
        }
    });
    $('typeId').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-typeId').innerHTML = "El tipo de producto es obligatorio";
                this.classList.add("is-invalid");
                break
                default:
                    $('msgError-typeId').innerHTML = null;
                    this.classList.remove("is-invalid");
                    this.classList.add("is-valid");
                    break;
        }
    });
    $('price').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-price').innerHTML = "El precio del producto es obligatorio";
                this.classList.add("is-invalid");
                break
            case !/^[1-9]\d*(\.\d+)?$/.test(this.value):
            $('msgError-price').innerHTML = "Solo números positivos";
            this.classList.add("is-invalid");
                break
            default:
                $('msgError-price').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });
    $('description').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-description').innerHTML = "La descripción del producto es obligatoria";
                this.classList.add("is-invalid");
                break
            case this.value.trim().length < 10 :
            $('msgError-description').innerHTML = "La descripción debe contener como mínimo 10 caracteres";
            this.classList.add("is-invalid");
                break
            default:
                $('msgError-description').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });
    
    $('formAdd').addEventListener('submit', function(e){
           e.preventDefault();
           const formAdd = document.querySelector('.form')
           const elementsForm = formAdd.elements; 

        let error = false

        

const msgErrors = []

        for (let i = 0; i < elementsForm.length - 2; i++) {
           
            const elementInput = elementsForm[i];
            if (
                elementInput.id === 'discount' ||
                elementInput.type === 'file'
            ) {
                continue;
            }
            if(!elementsForm[i].value || elementsForm[i].classList.contains('is-invalid')){
                elementsForm[i].classList.add('is-invalid')
                $('msgError-empty').innerHTML = "<h5>Hay errores en la carga de datos del producto</h5>"
                error = true
                msgErrors.push(`El campo ${elementsForm[i].name} no puede quedar vacio`)
            }
          
         }
         console.log(msgErrors)
         !error && this.submit()
    

    })
}