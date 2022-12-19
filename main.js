function changeOpacity(e){
    btn = document.querySelector('button')
    overlay = document.querySelector('.overlay')

    if(btn.getAttribute('class')=='dark'){
        btn.setAttribute('class','light');
        btn.textContent='lighten';
        overlay.style.backgroundColor='rgba(0,0,0,0.5)'
    }
    else{
        btn.setAttribute('class','dark');
        btn.textContent='darken';
        overlay.style.backgroundColor='rgba(0,0,0,0)'
    }


}


function imgSelect(e){
    topImg = document.querySelector('.top-img');
    topImg.src = e.target.src

}


document.querySelector('button').addEventListener('click',changeOpacity)

images = document.querySelector('.bottom').children

for(const image of images){
    image.addEventListener('click',imgSelect)
}

