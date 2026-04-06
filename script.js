// Smooth Scroll
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            document.querySelector(this.hash)?.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Form Validation
document.getElementById("contactForm")?.addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(name === "" || email === "" || message === ""){
        document.getElementById("formMsg").innerText = "Please fill all fields!";
    } else {
        document.getElementById("formMsg").innerText = "Message sent successfully!";
    }
    // Open Image Modal
function openModal(img) {
    document.getElementById("imgModal").style.display = "block";
    document.getElementById("modalImg").src = img.src;
}

// Close Modal
function closeModal() {
    document.getElementById("imgModal").style.display = "none";
}
});
