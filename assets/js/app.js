const sideBar = document.querySelector('.mb-menu-wrapper');
const closeBtn = document.querySelector('.mb-close-icon ');
const openBtn = document.querySelector('.hmbrg-icon');
const body = document.getElementById('webBody');
const controlSideBar = () => {

    if (sideBar.style.left === "0px") {
        sideBar.style.left = "-100%"
        sideBar.style.visibility = "hidden";
        webBody.classList.remove("hideWebScrollbar")
    } else {
        sideBar.style.left = "0"
        sideBar.style.visibility = "visible";
        webBody.classList.add("hideWebScrollbar")
    }

}

const bodyload = async() => {
    document.getElementById("pre-loader").style.display = "none";
}



closeBtn.addEventListener('click', controlSideBar);
openBtn.addEventListener('click', controlSideBar);