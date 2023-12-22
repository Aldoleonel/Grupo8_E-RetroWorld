document.addEventListener('DOMContentLoaded', () => {
    const provinceSelect = document.getElementById('province');
    const citySelect = document.getElementById('city');

    // Cargar las provincias al cargar la página
    fetch('https://apis.datos.gob.ar/georef/api/provincias?campos=nombre')
        .then(response => response.json())
        .then(data => {
            data.provincias.forEach(provincia => {
                const option = document.createElement('option');
                option.value = provincia.nombre;
                option.text = provincia.nombre;
                provinceSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Hubo un problema al obtener las provincias:', error));

    // Manejar el cambio de provincia para cargar las ciudades correspondientes
    provinceSelect.addEventListener('change', () => {
        const selectedProvinceId = provinceSelect.value;

        fetch(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${selectedProvinceId}&campos=nombre&max=100`)
            .then(response => response.json())
            .then(data => {
                citySelect.innerHTML = '';

                data.municipios.forEach(ciudad => {
                    const option = document.createElement('option');
                    option.value = ciudad.nombre;
                    option.text = ciudad.nombre;
                    citySelect.appendChild(option);
                });
            })
            .catch(error => console.error('Hubo un problema al obtener las ciudades:', error));
    });
});