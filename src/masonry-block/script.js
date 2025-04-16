// //JAVASCRIPT FRONTEND AND EDITOR
let allMasonryItems = document.querySelectorAll('.masonry-item');
let columns = document.querySelector('.wp-block-create-block-masonry-block .columns');

// Dynamically generate columns based on the number of columns
function createColumns(numColumns) {
    // Hide all columns first
    let allColumnElements = document.querySelectorAll('.wp-block-create-block-masonry-block .column');
    allColumnElements.forEach(column => column.style.display = 'none');

    // Show the appropriate number of columns
    for (let i = 1; i <= numColumns; i++) {
        let column = document.querySelector(`.wp-block-create-block-masonry-block .column-${i}`);
        if (column) column.style.display = 'block';
    }
    
    // Set grid template columns based on the number of columns
    columns.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;
}

function buildMasonryLayout(numColumns) {
    // Ensure proper columns are created before appending items
    createColumns(numColumns);

    allMasonryItems.forEach((item, index) => {
        let columnIndex = index % numColumns + 1; // Calculate the column number (1-indexed)
        let column = document.querySelector(`.wp-block-create-block-masonry-block .column-${columnIndex}`);
        
        if (column) {
            column.append(item);
        }
    });
}

export function buildMasonry(numColumns) {
    // Build the masonry layout for the specified number of columns
    buildMasonryLayout(numColumns);
}



