export default function searchFunction() {
    let allSearchButtons = document.querySelectorAll('.search-button');
    let searchFunction = document.querySelector('.search-function');
    let closeButton = document.querySelector('.close-button');
    let searchInput = document.querySelector('.wp-block-search__input');

    //Open search function
    allSearchButtons.forEach(button => {
        button.addEventListener('click', () => {
        searchFunction.classList.toggle('active');
        searchInput.focus();
        });
    });

    allSearchButtons.forEach(button => {
        button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            searchFunction.classList.toggle('active');
            searchInput.focus();
        }
        });
    });

    //Close search function
    closeButton.addEventListener('click', () => {
        searchFunction.classList.add('closing');
        setTimeout(() => {
            searchFunction.classList.remove('active');
            searchFunction.classList.remove('closing');
        }, 200);
    });

    closeButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            searchFunction.classList.add('closing');
            setTimeout(() => {
                searchFunction.classList.remove('active');
                searchFunction.classList.remove('closing');
            }, 200);
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
        const searchFunction = document.querySelector('.search-function');
        if (searchFunction && searchFunction.classList.contains('active')) {
            searchFunction.classList.add('closing');
            setTimeout(() => {
                searchFunction.classList.remove('active');
                searchFunction.classList.remove('closing');
            }, 200);
        }
        }
    });
}