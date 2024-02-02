let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let soulDom = document.querySelector('.soul');
let listItemDom = document.querySelector('.soul .list');
let thumbnailDom = document.querySelector('.soul .thumbnail');

nextDom.onclick = function(){
    showSlider('next');
}

prevDom.onclick = function(){
    showSlider('prev');
}


let timeRunning = 3000;
let runTimeOut;


function showSlider(type){
    let itemSlider = document.querySelectorAll('.soul .list .item');
    let itemThumbnail = document.querySelectorAll('.soul .thumbnail .item');

    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        soulDom.classList.add('next');
    } else {
        let positionLastItem = itemSlider.length -1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        soulDom.classList.add('prev');

    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        soulDom.classList.remove('next');
        soulDom.classList.remove('prev');
    }, timeRunning)
}

/*** test*/
document.getElementById('contactBtn').addEventListener('click', function() {
    var popup = document.getElementById('socialMediaPopup');
    popup.classList.toggle('show');
});

