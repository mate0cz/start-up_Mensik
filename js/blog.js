let fullImgBox = document.getElementById("fullImgBox")
let fullImg = document.getElementById("fullImg")

function openFullImg(pic){
    fullImgBox.style.display = "flex"
    fullImg.src = pic
}

function popupToggle(){
    let popup = document.getElementById("popup")
    popup.classList.toggle("activate")
}

function closeFullImg(){
    fullImgBox.style.display = "none"
}

document.addEventListener('keydown', function (key){
    if (key.key === 'Escape'){
        closeFullImg()
    }
})

document.addEventListener('click', function(element) {
    if (element.target === fullImgBox){
        closeFullImg()
    }
})