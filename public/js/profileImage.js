const imgMain = document.getElementById('imgAvatar');

const inputImage = document.getElementById('image');

inputImage.addEventListener('change', (event) => {

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => imgAvatar.src = reader.result
})

