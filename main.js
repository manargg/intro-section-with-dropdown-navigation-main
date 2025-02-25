const list_item_1 = document.querySelector(".list_item_1");
const sub_Menu = document.querySelector(".sub-menu");
const arrowIcon = document.querySelector(".list_item_1 img")

const list_item_2 =document.querySelector(".list_item_2");
const sub_Menu_2 = document.querySelector(".sub-menu-two");
const arrowIcon_2 = document.querySelector(".list_item_2 img")

/*SHOWING THE SUB_MENU FOE THE FIRST ITEM LIST */
list_item_1.addEventListener("click", () =>{
    sub_Menu_2.classList.remove("show");
    arrowIcon_2.src = "./images/icon-arrow-down.svg";

    sub_Menu.classList.toggle("show");
    arrowIcon.src = sub_Menu.classList.contains("show")
    ?"./images/icon-arrow-up.svg"
    :"./images/icon-arrow-down.svg"
})

/*SHOWING THE SUB_MENU FOE THE SECOND ITEM LIST */
list_item_2.addEventListener("click",() =>{
    sub_Menu.classList.remove("show");
    arrowIcon.src="./images/icon-arrow-down.svg"

    sub_Menu_2.classList.toggle("show")
    arrowIcon_2.src =sub_Menu_2.classList.contains("show")
    ?"./images/icon-arrow-up.svg"
    :"./images/icon-arrow-down.svg"
})



const menu_toggle = document.getElementById("icon-menu");
const iconCloseMenu = document.getElementById("icon-close-menu");
const mobileMenu = document.querySelector(".mobile-menu");

const mobileItem = document.querySelector(".mobile_item_1");
const arrowIconOne = document.querySelector(".mobile_item_1 img");
const mobileItemTwo = document.querySelector(".mobile_item_2");
const arrowIconTwo = document.querySelector(".mobile_item_2 img");

const mobileSubMenu = document.querySelector(".mobile-sub-menu");
const mobileSubMenuTwo = document.querySelector(".mobile-sub-menu-two");
const overlay = document.querySelector(".overlay");


menu_toggle.addEventListener("click", () =>{
    mobileMenu.classList.add("display");
    overlay.style.display = "block"; // Show overlay

})

iconCloseMenu.addEventListener("click", () =>{
    mobileMenu.classList.remove("display")
    overlay.style.display = "none"; // Hide overlay

})

mobileItem.addEventListener("click", () =>{
    mobileSubMenu.classList.toggle("show");
    arrowIconOne.src = mobileSubMenu.classList.contains("show")
    ?"./images/icon-arrow-up.svg"
    :"./images/icon-arrow-down.svg"
   
})
mobileItemTwo.addEventListener("click", () =>{
    mobileSubMenuTwo.classList.toggle("show")
    arrowIconTwo.src = mobileSubMenuTwo.classList.contains("show")
    ?"./images/icon-arrow-up.svg"
    :"./images/icon-arrow-down.svg"
})

