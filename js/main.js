function toggleSocial(){
    var element = document.getElementById("social");
    if (element.classList.contains("disabled")){
        element.classList.remove("disabled");
        element.classList.add("enabled");
    } else {
        element.classList.remove("enabled");
        element.classList.add("disabled");
    }
}
