<<<<<<< HEAD
// Funkce pro otevření vyskakovacího okna s vybraným obrázkem
function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  
  if (lightbox && lightboxImg) {
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
  }
}

// Funkce pro zavření vyskakovacího okna
function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.style.display = 'none';
  }
=======
// Funkce pro otevření vyskakovacího okna s vybraným obrázkem
function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  
  if (lightbox && lightboxImg) {
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
  }
}

// Funkce pro zavření vyskakovacího okna
function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.style.display = 'none';
  }
>>>>>>> 6c519aef996cd3483f1e03b751f3309004d8d79a
}