const $ = id => document.getElementById(id);

window.onload = function(){
    console.log('vinculacion exitosa!!')

    $('name').addEventListener('focus', function() {
        $('msgError-name').innerHTML = null;
        this.classList.remove('is-invalid')
    })

    $('name').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-name').innerHTML = "El titulo es obligatorio";
                this.classList.add("is-invalid");
                break;
            case !/^[A-Za-z]+$/.test(this.value) :
                $('msgError-name').innerHTML = "Solo caracteres alfabéticos";
                this.classList.add("is-invalid");
                break
            case this.value.trim().length < 3 :
                $('msgError-name').innerHTML = "Mínimo tres caracteres";
                this.classList.add("is-invalid");
                break
            default:
                $('msgError-name').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

    $('categoryId').addEventListener('focus', function() {
        $('msgError-category').innerHTML = null;
        this.classList.remove('is-invalid')
    })
    $('categoryId').addEventListener('blur', function(){
        if(!this.value.trim()){
            $('msgError-category').innerHTML = "El titulo es obligatorio";
            this.classList.add("is-invalid");
        } else{
            $('msgError-category').innerHTML = null;
            this.classList.remove("is-invalid");
            this.classList.add("is-valid");
        }
    })
    $('sectionId').addEventListener('focus', function() {
        $('msgError-section').innerHTML = null;
        this.classList.remove('is-invalid')
    })
    $('sectionId').addEventListener('blur', function(){
        if(!this.value.trim()){
            $('msgError-section').innerHTML = "El titulo es obligatorio";
            this.classList.add("is-invalid");
        } else{
            $('msgError-section').innerHTML = null;
            this.classList.remove("is-invalid");
            this.classList.add("is-valid");
        }
    })

    $('typeId').addEventListener('focus', function() {
        $('msgError-type').innerHTML = null;
        this.classList.remove('is-invalid')
    })
    $('typeId').addEventListener('blur', function(){
        if(!this.value.trim()){
            $('msgError-type').innerHTML = "El titulo es obligatorio";
            this.classList.add("is-invalid");
        } else{
            $('msgError-type').innerHTML = null;
            this.classList.remove("is-invalid");
            this.classList.add("is-valid");
        }
    })

    $('precio').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-precio').innerHTML = "El precio es obligatorio";
                this.classList.add("is-invalid");
                break;
            case this.value < 1 :
                $('msgError-precio').innerHTML = "el precio tiene que ser positivo y mayor que 0";
                this.classList.add("is-invalid");
                break
            default:
                $('msgError-precio').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

    $('promo').addEventListener('blur', function(e) {
        if (this.value < 0 || this.value > 100) {
            $('msgError-promo').innerHTML = "El descuento debe estar en el rango de 0 a 100";
            this.classList.add("is-invalid");
        } else {
            $('msgError-promo').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
        }
    });
    
    $('description').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-description').innerHTML = "La descripción es obligatorio";
                this.classList.add("is-invalid");
                break;
            case this.value.trim().length < 10 || this.value.trim().length > 500 :
                $('msgError-description').innerHTML = "La descripción debe tener entre 10 y 500 caracteres";
                this.classList.add("is-invalid");
                break
            default:
                $('msgError-description').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

    $('formEdit').addEventListener('submit', function(e){
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