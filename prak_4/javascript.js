/* NIGHT MODE */
var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("lightmode");
    if(document.body.classList.contains("lightmode")){
        icon.src = "images/daymode.png";
    } else {
        icon.src = "images/nightmode.png";
    }
}