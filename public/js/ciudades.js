document.addEventListener('DOMContentLoaded', () => {
    const provinceSelect = document.getElementById('province');
    const citySelect = document.getElementById('city');

    // Obtener lista de provincias desde la API al cargar la página
    fetch('https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre')
        .then(response => response.json())
        .then(data => {
            // Iterar sobre las provincias y agregarlas al selector
            data.provincias.forEach(provincia => {
                const option = document.createElement('option');
                option.value = provincia.id;
                option.text = provincia.nombre;
                provinceSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Hubo un problema al obtener las provincias:', error));

    // Evento al seleccionar una provincia para cargar las ciudades correspondientes
    provinceSelect.addEventListener('change', () => {
        const selectedProvinceId = provinceSelect.value;

        // Obtener lista de municipios de la provincia seleccionada desde la API
        fetch(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${selectedProvinceId}&campos=id,nombre&max=100`)
            .then(response => response.json())
            .then(data => {
                // Limpiar select de ciudades
                citySelect.innerHTML = '';

                // Iterar sobre los municipios y agregarlos al selector
                data.municipios.forEach(ciudad => {
                    const option = document.createElement('option');
                    option.value = ciudad.id;
                    option.text = ciudad.nombre;
                    citySelect.appendChild(option);
                });
            })
            .catch(error => console.error('Hubo un problema al obtener las ciudades:', error));
    });
});
