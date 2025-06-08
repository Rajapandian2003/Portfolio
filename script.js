function netflix(){
    window.location.href="https://github.com/Rajapandian2003/Netflix_Clone";
}

function diabetes(){
    window.location.href="https://github.com/Rajapandian2003/Diabetes_Assistance";
}

function insta(){
    window.location.href="https://github.com/Rajapandian2003/Insta_Clone"
}

const menuBar = document.querySelector(".sidebar")
const menu = document.querySelector(".menu_icon")

menu.addEventListener("click",function(){
    menuBar.classList.remove("close-sidebar")
    menuBar.classList.add("open-sidebar")
})

const close = document.querySelector(".close_icon")

close.addEventListener("click",function(){
    menuBar.classList.remove("open-sidebar")
    menuBar.classList.add("close-sidebar")
})