
document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const navButtons = document.querySelectorAll('.nav-button');

    function showSlide(index) {
        slides.forEach((slide) => slide.classList.remove('active'));
        navButtons.forEach((button) => button.classList.remove('active'));
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        navButtons[currentSlide].classList.add('active');
    }

    navButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Initial slide setup
    showSlide(currentSlide);
});

function opentab(tabName) {
    // Hide all tab contents
    var i, tabcontents, tablinks;
    tabcontents = document.getElementsByClassName("tab-contents");
    for (i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = "none";
    }

    // Remove the active class from all tab links
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-link", "");
    }

    // Show the current tab content and add an "active" class to the clicked tab link
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active-link";
}

// By default, display the first tab content (Skills)
document.getElementById("skills").style.display = "block";


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new THREE.GLTFLoader();
loader.load('path/to/your/model.glb', function(gltf) {
    scene.add(gltf.scene);
    renderer.render(scene, camera);
});

camera.position.z = 5;
const animate = function() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};
animate();
