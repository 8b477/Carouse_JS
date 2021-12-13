let wrap = document.getElementById('wrap');
let arrowLeft = document.getElementById('arrowLeft');
let arrowRight = document.getElementById('arrowRight');

let table = [
    './pictures/carou2.jpg',
    './pictures/carou3.jpg',
];


//prev
arrowLeft.addEventListener('click', function (e){
    // let newImg = wrap.classList.toggle('imgOne');
    setTimeout(slide, 1000)


})
//next
arrowRight.addEventListener('click', function (e){
   // let newImg = wrap.classList.toggle('imgTwo');
   setTimeout(slide,1000);
})

function slide(){
    for (let i =0; i < table.length; i++){
       let image = document.createElement('img');
       image.src = table[i]
       wrap.appendChild(image);
    }
}

