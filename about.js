let slideIndex = 1;  // Start from the first image
const slides = document.querySelectorAll('.carousel-container img');
const carouselContainer = document.querySelector('.carousel-container');
const totalSlides = slides.length;
const transitionDuration = 500;  // transition time in milliseconds

// Clone the first and last images for infinite looping
function setupInfiniteLoop() {
    const firstSlide = slides[0];
    const lastSlide = slides[slides.length - 1];
    const firstClone = firstSlide.cloneNode(true);
    const lastClone = lastSlide.cloneNode(true);

    // Append cloned images to the end and prepend to the beginning
    carouselContainer.appendChild(firstClone);
    carouselContainer.insertBefore(lastClone, slides[0]);

    // Update the total slides after cloning
    return document.querySelectorAll('.carousel-container img');
}

setupInfiniteLoop(); // Setup infinite loop by cloning images

function moveSlide(n) {
    const slides = document.querySelectorAll('.carousel-container img');
    const totalSlides = slides.length;

    // Update slideIndex based on user interaction
    slideIndex += n;

    // When the slideIndex reaches the cloned last image, reset to the actual first image
    if (slideIndex >= totalSlides - 1) {
        slideIndex = 1;  // Skip the cloned last image and go back to the first image
        // Reset the transform immediately after the transition to avoid the flicker
        setTimeout(() => {
            carouselContainer.style.transition = "none"; // Disable transition for immediate reset
            const newTransform = -slideIndex * 100 + '%';
            carouselContainer.style.transform = `translateX(${newTransform})`;
        }, transitionDuration);
    }
    // When the slideIndex reaches the cloned first image, reset to the actual last image
    else if (slideIndex <= 0) {
        slideIndex = totalSlides - 2;  // Skip the cloned first image and go to the last image
        // Reset the transform immediately after the transition to avoid the flicker
        setTimeout(() => {
            carouselContainer.style.transition = "none"; // Disable transition for immediate reset
            const newTransform = -slideIndex * 100 + '%';
            carouselContainer.style.transform = `translateX(${newTransform})`;
        }, transitionDuration);
    }

    // Apply the transform to move the carousel
    carouselContainer.style.transition = `transform ${transitionDuration}ms ease`;
    const newTransform = -slideIndex * 100 + '%';
    carouselContainer.style.transform = `translateX(${newTransform})`;
}





