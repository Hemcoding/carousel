const images = [
    'https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
    'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1572&q=80',
    'https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1570&q=80',
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    'https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
];

const n = images.length;
const flexcontainer = document.getElementById('flex-container');
const rightbtn = document.getElementById('right');
const leftbtn = document.getElementById('left');
const carouseldots = document.getElementById('dots');

 let containerwidth = 89.999;

for(let i=0 ; i<n ; i++){
    const newImg = document.createElement('img');
    newImg.src = images[i];
    flexcontainer.appendChild(newImg);

    const divdots = document.createElement('div');
    divdots.classList.add('dot');
    carouseldots.appendChild(divdots);
    divdots.addEventListener( 'click',(event) => {
        const index = [...carouseldots.children].indexOf(event.target); 
        // currentposition = index;
        showImg(index);
    })
}

let currentposition = 0;
showImg(0);
leftbtn.addEventListener('click' , () => {
    if(currentposition > 0){
        showImg(currentposition - 1);
    }
}) 

rightbtn.addEventListener('click' , () => {
    if(currentposition < n-1){
        showImg(currentposition + 1);
    }
}) 

function showImg(position) {
    const predot = dots.children[currentposition];
    predot.classList.remove('active');
    currentposition = position;

    const curdot = dots.children[currentposition];
    curdot.classList.add('active');


    const translateDis = -currentposition * containerwidth;
    flexcontainer.style.transform = `translateX(${translateDis}vw)`
    flexcontainer.classList.add('transition'); 
}