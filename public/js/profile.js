const $ = (id) => document.getElementById(id);
console.log()

window.onload = async function (e) {
    console.log('profile.js success!!');
  $("firstName").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgError-name").innerHTML = "El nombre es obligatorio";
        this.classList.add("is-invalid");
        break;
      case !/^[A-Za-z]+$/.test(this.value):
        $("msgError-name").innerHTML = "Solo caracteres alfabéticos";
        this.classList.add("is-invalid");
        break;
      case this.value.trim().length < 2:
        $("msgError-name").innerHTML = "Mínimo dos caracteres";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgError-name").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
    }
  });

  $("lastName").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgError-surname").innerHTML = "El apellido es obligatorio";
        this.classList.add("is-invalid");
        break;
      case !/^[A-Za-z]+$/.test(this.value):
        $("msgError-surname").innerHTML = "Solo caracteres alfabéticos";
        this.classList.add("is-invalid");
        break;
      case this.value.trim().length < 2:
        $("msgError-surname").innerHTML = "Mínimo dos caracteres";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgError-surname").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
    }
  });

  $("birthdate").addEventListener("blur", function (e) {
    console.log("Evento blur activado en el input de fecha de nacimiento");
    const birthDate = moment(this.value);
    const currentDate = moment();
    const minDate = moment().subtract(120, "years");

    switch (true) {
      case !this.value.trim():
        $("msgError-birthday").innerHTML = "La fecha es obligatoria";
        this.classList.add("is-invalid");
        break;
      case birthDate.isAfter(currentDate):
        $("msgError-birthday").innerHTML = "Que sos, termitator??";
        this.classList.add("is-invalid");
        break;
      case birthDate.isBefore(minDate):
        $("msgError-birthday").innerHTML = "Tan viejo/a sos??";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgError-birthday").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
    }
  });

  $("phone").addEventListener("blur", function (e) {
    const phoneNumber = this.value.trim();

    switch (true) {
        case !phoneNumber:
            $("msgError-phone").innerHTML = "El número de teléfono es obligatorio";
            this.classList.add("is-invalid");
            break;
        case !/^\d+$/.test(phoneNumber):
            $("msgError-phone").innerHTML = "Ingrese solo números";
            this.classList.add("is-invalid");
            break;
        case phoneNumber.length < 7: // Cambia el número según tus criterios
            $("msgError-phone").innerHTML = "Número de teléfono demasiado corto";
            this.classList.add("is-invalid");
            break;
        default:
            $("msgError-phone").innerHTML = null;
            this.classList.remove("is-invalid");
            this.classList.add("is-valid");
            break;
    }
});
$('image').addEventListener("change",function(e) {
  switch (true) {
      case !(/.(gif|jpeg|jpg|png)$/i.test(this.value)):
          $('msgError-image').innerHTML = "Error, los formatos de imagenes aceptados son (gif | jpeg | jpg | png)";
              this.classList.add("is-invalid")
        break;
  default:
          $('msgError-image').innerHTML = null;
          this.classList.remove("is-invalid");
          this.classList.add("is-valid");
          break;
          
  }
  
})

$('formProfile').addEventListener('submit', function(e){
  console.log('exito!!!!')
  e.preventDefault();

  const elementsForm = $('formProfile').elements;
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
