document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-image');
    
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });
});
