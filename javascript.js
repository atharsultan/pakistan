document.addEventListener("DOMContentLoaded", () => {
    const shopNowBtn = document.getElementById("btn1");
    const findMoreBtn = document.getElementById("btn2");
    const feedbackInput = document.querySelector("#input-sub input");
    const feedbackSubmit = document.getElementById("sub");

    shopNowBtn.addEventListener("click", () => {
        alert("Redirecting to the shop page...");
        window.location.href = "/everything.html";
    });

    findMoreBtn.addEventListener("click", () => {
       alert('Select from specific section for more shopping')
    });

    feedbackSubmit.addEventListener("click", () => {
        const feedback = feedbackInput.value.trim();
        if (feedback) {
            alert(`Thank you for your feedback: "${feedback}"`);
            feedbackInput.value = "";
        } else {
            alert("Please share your experiences before submitting.");
        }
    });

    const shopButtons = document.querySelectorAll(".btn3");
    shopButtons.forEach((btn) => {
        btn.addEventListener("mouseenter", () => {
            btn.style.backgroundColor = "#ff5733";
            btn.style.color = "#fff";
        });
        btn.addEventListener("mouseleave", () => {
            btn.style.backgroundColor = "";
            btn.style.color = "";
        });
        btn.addEventListener("click", () => {
            alert("Redirecting to the product page...");
        });
    });
});

document.querySelector('.form-control').addEventListener('input', function (e) {
    const searchText = e.target.value.toLowerCase();
    const products = document.querySelectorAll('#everything-gallery > div');

    products.forEach((product) => {
        const productName = product.querySelector('.items-info p:first-child').innerText.toLowerCase();
        if (productName.includes(searchText)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

const minRange = document.getElementById('min-range');
const priceOutput = document.getElementById('price-output');

minRange.addEventListener('input', function () {
    const minValue = minRange.value;
    priceOutput.textContent = `Price: $20 — $${minValue}`;

    const products = document.querySelectorAll('#everything-gallery > div');

    products.forEach((product) => {
        const priceText = product.querySelector('.items-info p:last-child').innerText;
        const price = parseFloat(priceText.replace(/[^0-9.]/g, ''));
        if (price <= parseFloat(minValue)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

document.getElementById('sub').addEventListener('click', function () {
    const feedbackInput = document.querySelector('#input-sub input');
    const feedback = feedbackInput.value.trim();

    if (feedback) {
        alert('Thank you for your feedback!');
        feedbackInput.value = '';
    } else {
        alert('Please enter your feedback before submitting.');
    }
});
/* Contact form */
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        
        if (!name || !email || !message) {
            alert("Please fill in all fields before submitting.");
            return;
        }
        
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you for reaching out to us. Your message has been sent!");
        form.reset();
    });
});
