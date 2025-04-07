//JS just Frontend
document.addEventListener("DOMContentLoaded", function() {
    let allSingleTabs = document.querySelectorAll('.tab-content .single-tab-container');
    let listTabsContainer = document.querySelector('.list-tabs-titles');

    // Inicializar tabs
    allSingleTabs.forEach((tab, index) => {
        index == 0 ? tab.classList.add(`active`) : '';
        tab.classList.add(`tab-${index}`);

        let singleTabTitleElement = document.createElement('button');
        singleTabTitleElement.classList.add(`single-tab-title`);
        singleTabTitleElement.classList.add(`tab-${index}`);
        singleTabTitleElement.setAttribute('tabindex', '0');  // Agregar tabindex="0"
        listTabsContainer.appendChild(singleTabTitleElement);
        singleTabTitleElement.innerHTML = tab.dataset.tabTitle;
    });

    let allSingleTabTitle = listTabsContainer.querySelectorAll('.single-tab-title');

    // Manejar la activación de las pestañas
    allSingleTabTitle.forEach((singleTabTitle, index) => {
        index == 0 ? singleTabTitle.classList.add(`active`) : '';

        singleTabTitle.addEventListener('click', () => {
            allSingleTabTitle.forEach(t => t.classList.remove("active"));
            singleTabTitle.classList.add("active");

            let currentlyActive = [...singleTabTitle.classList].find(cls => cls.startsWith('tab-')); 
            
            // Primero, ocultar todas las pestañas y luego mostrar la activa
            allSingleTabs.forEach(tab => {
                tab.classList.remove("active");
                tab.scrollTop = 0;  // Resetea el scroll de todas las pestañas cuando se desactiva
            });

            allSingleTabs.forEach(tab => {
                if (tab.classList.contains(currentlyActive)) {
                    tab.classList.add('active');
                    tab.scrollTop = 0;  // Aseguramos que la pestaña activa comience desde el top
                }
            });
        });
    });
});
