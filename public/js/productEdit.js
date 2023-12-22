const K = id => document.getElementById(id);

window.onload = function(){
    console.log('vinculacion exitosa!!')

    K('name').addEventListener('focus', function() {
        K('msgError-name').innerHTML = null;
        this.classList.remove('is-invalid')
    })

    K('name').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                K('msgError-name').innerHTML = "El titulo es obligatorio";
                this.classList.add("is-invalid");
                break;
            case !/^[A-Za-z]+$/.test(this.value) :
                K('msgError-name').innerHTML = "Solo caracteres alfabéticos";
                this.classList.add("is-invalid");
                break
            case this.value.trim().length < 3 :
                K('msgError-name').innerHTML = "Mínimo tres caracteres";
                this.classList.add("is-invalid");
                break
            default:
                K('msgError-name').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

    K('categoryId').addEventListener('focus', function() {
        K('msgError-category').innerHTML = null;
        this.classList.remove('is-invalid')
    })
    K('categoryId').addEventListener('blur', function(){
        if(!this.value.trim()){
            $('msgError-category').innerHTML = "El titulo es obligatorio";
            this.classList.add("is-invalid");
        } else{
            $('msgError-category').innerHTML = null;
            this.classList.remove("is-invalid");
            this.classList.add("is-valid");
        }
    })
    K('sectionId').addEventListener('focus', function() {
        K('msgError-section').innerHTML = null;
        this.classList.remove('is-invalid')
    })
    K('sectionId').addEventListener('blur', function(){
        if(!this.value.trim()){
            K('msgError-section').innerHTML = "El titulo es obligatorio";
            this.classList.add("is-invalid");
        } else{
            K('msgError-section').innerHTML = null;
            this.classList.remove("is-invalid");
            this.classList.add("is-valid");
        }
    })

    K('typeId').addEventListener('focus', function() {
        K('msgError-type').innerHTML = null;
        this.classList.remove('is-invalid')
    })
    K('typeId').addEventListener('blur', function(){
        if(!this.value.trim()){
            K('msgError-type').innerHTML = "El titulo es obligatorio";
            this.classList.add("is-invalid");
        } else{
            K('msgError-type').innerHTML = null;
            this.classList.remove("is-invalid");
            this.classList.add("is-valid");
        }
    })

    K('precio').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                K('msgError-precio').innerHTML = "El precio es obligatorio";
                this.classList.add("is-invalid");
                break;
            case this.value < 1 :
                K('msgError-precio').innerHTML = "el precio tiene que ser positivo y mayor que 0";
                this.classList.add("is-invalid");
                break
            default:
                K('msgError-precio').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

    K('promo').addEventListener('blur', function(e) {
        if (this.value < 0 || this.value > 100) {
            K('msgError-promo').innerHTML = "El descuento debe estar en el rango de 0 a 100";
            this.classList.add("is-invalid");
        } else {
            K('msgError-promo').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
        }
    });
    
    K('description').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                K('msgError-description').innerHTML = "La descripción es obligatorio";
                this.classList.add("is-invalid");
                break;
            case this.value.trim().length < 10 || this.value.trim().length > 500 :
                K('msgError-description').innerHTML = "La descripción debe tener entre 10 y 500 caracteres";
                this.classList.add("is-invalid");
                break
            default:
                K('msgError-description').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

    K('image').addEventListener("change",function(e) {
        switch (true) {
            case !(/.(gif|jpeg|jpg|png)$/i.test(this.value)):
                K('msgError-image').innerHTML = "Error, los formatos de imagenes aceptados son (gif | jpeg | jpg | png)";
                    this.classList.add("is-invalid");
                break;
            
        default:
                K('msgError-image').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
                
        }
        
    })



    K('formEdit').addEventListener('submit', function(e){
        console.log('hola mundo')
        e.preventDefault();

        const elementsForm = $('formEdit').elements;
        // console.log(elementsForm)
        let error = false

        for (let i = 0; i < elementsForm.length - 2; i++) {
            
            if(!elementsForm[i].value.trim() || elementsForm[i].classList.contains('is-invalid')){
                elementsForm[i].classList.add('is-invalid')
                console.log(elementsForm[i]);
                $('msgError-empty').innerHTML = "Hay errores al actualizar los datos"
                error = true
            }
        }
        console.log(error)
        !error && this.submit()
    

    })



}