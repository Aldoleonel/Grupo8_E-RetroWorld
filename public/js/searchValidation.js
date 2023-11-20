const formSearch = document.getElementById('formSearch');
const inputSearch = document.getElementById('inputSearch');

formSearch.addEventListener('submit',(e) => {
    e.preventDefault()

    if(inputSearch.value.trim() !== ''){
            formSearch.submit()
    }
})
