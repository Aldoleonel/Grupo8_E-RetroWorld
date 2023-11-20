const imgMain = document.getElementById('imgMain');

const inputImage = document.getElementById('image');

inputImage.addEventListener('change', (event) => {

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => imgMain.src = reader.result
})
