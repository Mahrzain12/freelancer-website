// ============================
// MOBILE MENU
// ============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// ============================
// SEARCH BUTTON
// ============================

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const searchMessage = document.getElementById("searchMessage");

searchBtn.addEventListener("click", function () {

    const searchText = searchInput.value.trim();

    if (searchText === "") {

        searchMessage.textContent =
            "Please enter a service or freelancer name.";

        searchInput.focus();

    } else {

        searchMessage.textContent =
            "Searching for: " + searchText;

    }

});


// ============================
// ENTER KEY SEARCH
// ============================

searchInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        searchBtn.click();

    }

});

// ============================
// FREELANCER PROFILE BUTTONS
// ============================

const viewButtons =
    document.querySelectorAll(".view-btn");

viewButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert("Freelancer profile coming soon!");

    });

});


