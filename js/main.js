const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

//click on the btn
for (let btn of infoBtns) {
    btn.addEventListener('click', showHint);
}

function showHint(e) {
    e.stopPropagation();
    this.parentNode.querySelector('.info-hint').classList.toggle('none');

}

//shut hellpers when click to the document

document.addEventListener('click', closeHints);

function closeHints() {
for (let hint of infoHints) {
    hint.classList.add('none');
}
}

//Запрет 

for (let hint of infoHints) {
    hint.addEventListener('click', (e) => e.stopPropagation() );
}


