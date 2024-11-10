const container = document.getElementById('draggable-container');
const images = document.querySelectorAll('.collection-img');

let draggingImage = null;

images.forEach((img) => {
    img.addEventListener('dragstart', (e) => {
        draggingImage = img;
        img.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
    });

    img.addEventListener('dragend', () => {
        img.classList.remove('dragging');
        draggingImage = null;
    });

    img.addEventListener('dragover', (e) => {
        e.preventDefault(); // Prevent default to allow drop
        e.dataTransfer.dropEffect = 'move'; // Show move effect
    });

    img.addEventListener('drop', (e) => {
        e.preventDefault(); // Prevent default behavior

        // If a dragging image exists and it's not the same as the dropped one
        if (draggingImage && draggingImage !== img) {
            const draggingIndex = Array.from(images).indexOf(draggingImage);
            const targetIndex = Array.from(images).indexOf(img);

            // Add moving class to images involved in swap
            draggingImage.classList.add('moving');
            img.classList.add('moving');

            // Swap the images
            if (draggingIndex < targetIndex) {
                container.insertBefore(draggingImage, img.nextSibling);
            } else {
                container.insertBefore(draggingImage, img);
            }

            // Remove moving class after the animation
            setTimeout(() => {
                draggingImage.classList.remove('moving');
                img.classList.remove('moving');
            }, 300); // Match this time to CSS transition duration
        }
    });
});
