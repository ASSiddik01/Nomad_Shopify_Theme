const txts = document.querySelector(".animate-text").children,
  txtsLen = txts.length;
let index = 0;
const textInTimer = 3000,
  textOutTimer = 2800;

function animateText() {
  for (let i = 0; i < txtsLen; i++) {
    txts[i].classList.remove("text-in", "text-out");
  }
  txts[index].classList.add("text-in");

  setTimeout(function () {
    txts[index].classList.add("text-out");
  }, textOutTimer);

  setTimeout(function () {
    if (index == txtsLen - 1) {
      index = 0;
    } else {
      index++;
    }
    animateText();
  }, textInTimer);
}

window.onload = animateText;

// sticky navbar
window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
const mobileMenu = document.getElementById("mobile_menu");
const notificationArea = document.getElementById("notifications_area");
const cartArea = document.getElementById("cart_area");
const desktopMenuLi = document.getElementsByClassName("mega-menu");
const megaMenu = document.getElementsByClassName("mega-menu-wrapper");
const serachBar = document.getElementById("serach_bar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky_nvabar");
    if (navbar.classList.contains("sticky_nvabar")) {
      mobileMenu.classList.add("sticky", "top-[54px]");
      notificationArea.classList.add("sticky_top");
      cartArea.classList.add("sticky_top");
      serachBar.classList.add("top_0");
      for (let i = 0; i < megaMenu.length; i++) {
        desktopMenuLi[i].onmouseenter = function () {
          megaMenu[i].classList.add("sticky_top");
        };
      }
    } else {
      mobileMenu.classList.remove("sticky");
    }
  } else {
    navbar.classList.remove("sticky_nvabar");
    notificationArea.classList.remove("sticky_top");
    cartArea.classList.remove("sticky_top");
    serachBar.classList.remove("top_0");

    for (let i = 0; i < megaMenu.length; i++) {
      desktopMenuLi[i].onmouseenter = function () {
        megaMenu[i].classList.remove("sticky_top");
      };
    }
  }
}

// Toggle Navbar
const openNavbar = () => {
  const navbarOpen = document.getElementById("navbar_open");
  const navbarClose = document.getElementById("navbar_close");
  const mobileMenu = document.getElementById("mobile_menu");
  const navBar = document.getElementById("navbar");
  navbarOpen.classList.remove("block");
  navbarOpen.classList.add("hidden");
  navbarClose.classList.remove("hidden");
  navbarClose.classList.add("block");
  mobileMenu.classList.remove("hidden");
  mobileMenu.classList.add("block");
  navBar.classList.remove("bg-[#fff]");
  navBar.classList.add("bg-[#EFEFEF]");
};
const closeNavbar = () => {
  const navbarOpen = document.getElementById("navbar_open");
  const navbarClose = document.getElementById("navbar_close");
  const mobileMenu = document.getElementById("mobile_menu");
  const navBar = document.getElementById("navbar");
  navbarOpen.classList.remove("hidden");
  navbarClose.classList.remove("block");
  navbarClose.classList.add("hidden");
  mobileMenu.classList.remove("block");
  mobileMenu.classList.add("hidden");
  navBar.classList.remove("bg-[#EFEFEF]");
  navBar.classList.add("bg-[#fff]");
};

// mobile menu
const accordionHeader = document.querySelectorAll(".accordion-header");
accordionHeader.forEach((header) => {
  header.addEventListener("click", function () {
    const accordionContent =
      header.parentElement.querySelector(".accordion-content");
    let accordionMaxHeight = accordionContent.style.maxHeight;

    // Condition handling
    if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
      accordionContent.style.maxHeight = `${
        accordionContent.scrollHeight + 32
      }px`;
      header.querySelector(".fas").classList.remove("fa-angle-down");
      header.querySelector(".fas").classList.add("fa-minus");
    } else {
      accordionContent.style.maxHeight = `0px`;
      header.querySelector(".fas").classList.add("fa-angle-down");
      header.querySelector(".fas").classList.remove("fa-minus");
    }
  });
});

const expandMobileMenu = () => {
  const singleMenu = document.getElementById("single_menu");
  if (singleMenu.classList.contains("h-screen")) {
    singleMenu.classList.remove("h-screen");
  } else {
    singleMenu.classList.add("h-screen");
  }
};

// footer
const menuTitle = document.querySelectorAll(".footer_menu_title");
menuTitle.forEach((header) => {
  header.addEventListener("click", function () {
    const menuItems = header.parentElement.querySelector(".menu_items");
    if (menuItems.classList.contains("hidden")) {
      menuItems.classList.remove("hidden");
      menuItems.classList.add("block");
    } else {
      menuItems.classList.add("hidden");
    }
  });
});

// notificaiton
$(".notification_open").click(function () {
  $(".notifications_area").addClass("active");
});
$(".notification_close").click(function () {
  $(".notifications_area").removeClass("active");
});
// search
$(".serach_open").click(function () {
  $(".serach_bar").addClass("active");
});
$(".serach_close").click(function () {
  $(".serach_bar").removeClass("active");
});
// cart
$(".cart_open").click(function () {
  $(".cart_area").addClass("active");
});
$(".cart_close").click(function () {
  $(".cart_area").removeClass("active");
});

var incrementButton = document.getElementsByClassName("inc");
var decrementButton = document.getElementsByClassName("dec");
// increment
for (var i = 0; i < incrementButton.length; i++) {
  var button = incrementButton[i];
  button.addEventListener("click", function (event) {
    var buttonClicked = event.target;
    var input = buttonClicked.parentElement.children[1];
    var inputValue = input.value;
    var newValue = parseInt(inputValue) + 1;
    input.value = newValue;
  });
}

// decrement
for (var i = 0; i < decrementButton.length; i++) {
  var button = decrementButton[i];
  button.addEventListener("click", function (event) {
    var buttonClicked = event.target;
    var input = buttonClicked.parentElement.children[1];
    var inputValue = input.value;
    if (inputValue < 1) {
      input.value = inputValue;
    } else {
      var newValue = parseInt(inputValue) - 1;
      input.value = newValue;
    }
  });
}
