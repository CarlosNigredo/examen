let currentSlide = 0;

function showSlide(slideNumber) {
    const slides = document.querySelectorAll('.slide');
    
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === slideNumber) {
            slide.classList.add('active');
        }
    });

    updateNav(slideNumber);
}

function updateNav(slideNumber) {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach((item, index) => {
        item.classList.remove('active');
        if (index === slideNumber) {
            item.classList.add('active');
        }
    });
}

function goToSlide(slideNumber) {
    currentSlide = slideNumber;
    showSlide(currentSlide);
}

// Initialize the presentation by showing the first slide
showSlide(currentSlide);



var idoneidad = document.getElementById("idoneo");

idoneidad.addEventListener("click", function(e){
    var atributos = document.querySelectorAll(".hidden");
    // document.querySelector("h1.first").style.color = "#5f6571";
    // document.querySelector("#idoneo").style.color = "var(--orange)";
    document.querySelector("#idoneo").style.cssText = "color: var(--azul_chido); font-family: 'Alegreya-Bold-Italic'";
    atributos.forEach((e) => e.style.display = "block");
});


// Fuente vaariable
const container = document.querySelector(".demo-text p");
const sliders = document.querySelectorAll(".slider");
const sliderValues = document.querySelectorAll(".output");
// const buttons = document.querySelectorAll(".button");

// Display property values
for (let i = 0; i < sliders.length; i++) {
sliderValues[i].innerHTML = sliders[i].value;
}

// Update text property and displayed property value for each slider
sliders.forEach(slider => {
    const sliderIndex = slider.getAttribute("data-index");
    const output = document.querySelector(`.output[data-index="${sliderIndex}"]`);
    slider.oninput = function() {
    container.style.setProperty(`--${this.id}`, this.value);
    output.innerHTML = this.value;
    };
});




document.getElementById('toggleGroup1').addEventListener('click', function() {
    const group1 = document.getElementById('Pros');
    group1.style.display = group1.style.display === 'none' ? 'block' : 'none';
});
