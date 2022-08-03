import { scripts } from "./script.js";


window.onload = function() {
    let c = document.querySelector("canvas");
    let ctx = c.getContext("2d");
    let scene = new Image();
    scene.src = './assets/img/fundo-prof-carvalho.png';
    //ctx.drawImage(scene,0,0,scene.width,scene.height,0,0,scene.width,scene.height);
    scene.onload = () => ctx.drawImage(scene, 0, 0, scene.width, scene.height);

};

// const fala = document.querySelector('.balao-fala > p');
// let name = false;
// let pronums = false;
// let counter = 0;

// document.addEventListener('keyup', (e) => {
//     if(e.key === 'Enter'){
//         if(pronums === false && counter === 6){
//             fala.innerHTML = 'vai';
//             pronums = true;
//         }

//         counter++;
//         if(counter === 3){
//             const pokebola = document.createElement('div');
//             const profCarvalho = document.querySelector('#prof-carvalho');
//             pokebola.classList = 'pokebola';
//             profCarvalho.appendChild(pokebola);
//         }
//         if(counter === 4){
//             const pokebola = document.querySelector('.pokebola');
//             // pokebola.style.backgroundImage = `url('./assets/img/pokebola-meio-aberta.png')`;
//             pokebola.classList.add('animation');
//         }
//         scripts.forEach(item => {
//             if(counter === item.id){
//                 fala.innerHTML = `${item.text}`;
//             }
//         })
//     }
// })

// function chooseName(){
//     const menuName = document.createElement('div');

// }