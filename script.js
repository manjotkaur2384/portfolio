function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}




var typingEffect = new Typed(".typedText", {
    strings: ["Artist","Designer","Coder","Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
})
const sr = ScrollReveal({
    origin: "top",
    distance: "800px",
    duration: 2000,
    reset: true,
});
sr.reveal(".featured-name",{ delay: 100 });
sr.reveal(".text-info",{ delay: 200 });
sr.reveal(".text-btn",{ delay: 200 });
sr.reveal(".socical_icons",{ delay: 200 });
sr.reveal(".featured-image",{ delay: 320 });
sr.reveal(".project-box",{ interval: 200 });
sr.reveal(".top-header",{});
const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})
srLeft.reveal(".about-info",{ delay: 100 });
srLeft.reveal(".contact-info",{ delay: 100 });
const srRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})
srRight.reveal(".skill",{delay: 100});
srRight.reveal(".skill-box",{delay: 100});

const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);

function sendMessage() {
    // Get values from the form fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Check if any of the fields are empty
    if (!name || !email || !subject || !message) {
        alert("Please fill in all fields");
        return;
    }

    // Call the server-side script to send the email
    fetch('send_email.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'name=' + encodeURIComponent(name) +
            '&email=' + encodeURIComponent(email) +
            '&subject=' + encodeURIComponent(subject) +
            '&message=' + encodeURIComponent(message),
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response, you can show a success message or handle errors
        console.log(data);
        if (data.success) {
            alert("Email sent successfully");
        } else {
            alert("Failed to send email. " + data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("Failed to send email. Please try again later.");
    });
}
const starsContainer = document.querySelector('.stars');

function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 3 + 1; // Adjust the size range
    const duration = Math.random() * (1.5 - 1) + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${duration}s`;
    starsContainer.appendChild(star);
    setTimeout(() => {
        star.remove();
    }, duration * 1000);
}

function createStars() {
    setInterval(createStar, 50); // Adjust the interval (lower value for more stars)
}

createStars();
// Add this script in your existing JavaScript file or in a new one

function submitSuggestion() {
    var name = document.getElementById("suggestionName").value;
    var email = document.getElementById("suggestionEmail").value;
    var suggestion = document.getElementById("suggestionMessage").value;

    // Validate inputs
    if (name === "" || email === "" || suggestion === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Create a new suggestion element
    var suggestionElement = document.createElement("div");
    suggestionElement.classList.add("suggestion-item");
    suggestionElement.innerHTML = `<p><strong>${name}</strong> (${email}):</p><p>${suggestion}</p>`;

    // Append the suggestion to the suggestion list
    var suggestionList = document.getElementById("suggestionList");
    suggestionList.appendChild(suggestionElement);

    // Clear input fields after submission
    document.getElementById("suggestionName").value = "";
    document.getElementById("suggestionEmail").value = "";
    document.getElementById("suggestionMessage").value = "";
}


