menu = document.getElementById('burger-img')
nav = document.getElementById('navigation')

function dropMenu(){
    if (menu.src.includes("burger-menu.png")){
        menu.src = "/src/x-menu.png";
        nav.style.display = "block";
    } else {
        menu.src = "/src/burger-menu.png";
        nav.style.display = "none";
    }
}

window.addEventListener("resize", function (){
    if (window.innerWidth > 600){
        nav.style.removeProperty("display");
        menu.src = "/src/burger-menu.png";
    }
}, true)