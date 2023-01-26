let body = document.getElementById("BODY");

function Menu() {
    let menu = document.getElementById("MENU");
    if(menu.style.display == "block") {
        menu.style.width = "0%";
        menu.style.display = "none";
        body.style.overflowY = "auto";        
    } else {
        menu.style.display = "block";
        menu.style.width = "100%";
        body.style.overflowY = "hidden";
    }
}

window.addEventListener("click", (event) => {
    let menu = document.getElementById("MENU");
    if(event.target == menu) {
        menu.style.width = "0%";
        menu.style.display = "none";
        body.style.overflowY = "auto";
    }
});
window.onload = Page00();
function Page00() {
    let links = document.getElementsByTagName("a");
    for(let i = 0; i < links.length; i++) {
        if(links[i].getAttribute("href") == "#" || links[i].getAttribute("href") == "") {
            links[i].href = "/00.html";
        }
    }
}
