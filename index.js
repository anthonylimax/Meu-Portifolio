const target = document.querySelectorAll('[data-anime]')
const letters = document.querySelectorAll('[data-letter]')
const profile = document.querySelector('.profile')
let i = 0;
let size = letters.length; 
const animationLetter = () => {
    if(i < size){
        letters[i].classList.add('active')
        i++;
    }
    else{
        clearInterval(animationLetter)
    }
}
setInterval(animationLetter, 100)
const animation = () =>{
    const windowTop = window.pageYOffset;
    target.forEach(element => {
        if(windowTop + (window.innerHeight * 3/5)> element.offsetTop){
            element.classList.add('animate')
        }
        else{
            element.classList.remove('animate')
        }
    });
}
animation();
letters.forEach(element =>{
    
element.addEventListener('mouseleave', ()=>{
    element.classList.add('animation')
    setTimeout(()=>{
        element.classList.remove('animation')
    }, 400)
})
})

window.addEventListener('scroll', ()=>{
    animation();
})