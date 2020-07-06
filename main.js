// Vivald JS Example

// When a Season Button is Clicked
document.getElementById('summerBtn').addEventListener('click', setSummer);
document.getElementById('autumnBtn').addEventListener('click', setAutumn);
document.getElementById('winterBtn').addEventListener('click', setWinter);
document.getElementById('springBtn').addEventListener('click', setSpring);


// Event Functions
function setSummer() {
    property('summer', 'images/summer.jpg', '#1BA848', 'songs/vivaldi-summer.mp3', 'summerBtn');
}

function setAutumn() {
    property('autumn', 'images/autumn.jpg', '#FE6732', 'songs/vivaldi-autumn.mp3', 'autumnBtn');
}

function setWinter() {
    property('winter', 'images/winter.jpg', '#1C64B9', 'songs/vivaldi-winter.mp3', 'winterBtn');
}

function setSpring() {
    property('spring', 'images/spring.jpg', '#0E94D1', 'songs/vivaldi-spring.mp3', 'springBtn');
}

function property(img_alt, img_src, backgroundColor, source_src, button_id)
{
    document.getElementById('season-text').innerHTML = img_alt;
    document.getElementById('main-img').src = img_src;
    document.body.style.backgroundColor = backgroundColor;
    document.getElementById('song').src = source_src;
    document.getElementById('springBtn').classList.remove('activeBtn');
    document.getElementById('summerBtn').classList.remove('activeBtn');
    document.getElementById('autumnBtn').classList.remove('activeBtn');
    document.getElementById('winterBtn').classList.remove('activeBtn');
    document.getElementById(button_id).classList.add('activeBtn');
}