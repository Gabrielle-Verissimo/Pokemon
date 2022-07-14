const fala = document.querySelector('.balao-fala > p');

document.addEventListener('keyup', (e) => {
    if(e.key === 'Enter'){
        fala.innerHTML = '';
    }
})