const sidenav = document.querySelector(".sidenav-container");
const newsletter = document.querySelector(".popup");
const background = document.querySelector(".popup-bg");
const popupHeader = document.querySelector(".popup-header");
const popupBody = document.querySelector(".popup-body");
const popupIcons = document.querySelector(".popup-icons");
const navMenuIcon = document.querySelector("#menu-icon");
const numbers = document.querySelector(".news-container")
const emailInput = document.querySelector("#email");


function openSideNav() {
    sidenav.style.display = "inline-block";
}

function closeSideNav() {
    sidenav.style.display = "none";
}

function openNewsletter(success) {
    newsletter.style.display = "inline-block";
    background.style.display = "inline-block";

    if (success) {
        popupHeader.textContent = "Thank you for subscribe!";
        popupBody.textContent = "Follow us on social media";
        emailInput.value = "";
    } else {
        popupHeader.textContent = "Something went wrong!";
        popupBody.textContent = "Please try again";
        popupIcons.style.display = "none";
    }
}

function closeNewsletter() {
    newsletter.style.display = "none";
    background.style.display = "none";
}

const clients = new CountUp('client-count', 0, 3000);
const employee = new CountUp('employee-count', 0, 180);  
const users = new CountUp('users-count', 0, 10000);    

const triggerElement = numbers.getBoundingClientRect();
const triggerPoint = triggerElement.top - window.innerHeight;

window.onscroll = function() {
    if (window.pageYOffset >= triggerPoint) {
        clients.start();
        employee.start();
        users.start();
    }
}