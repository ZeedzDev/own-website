const about = document.getElementById('about')
const services = document.getElementById('services')
const xp = document.getElementById('xp')

about.addEventListener('mouseover', () =>{
    about.style.color = "orange"
    services.style.fontWeight = "light"
    console.log('Event triggered')
})
services.addEventListener('mouseover', () =>{
    services.style.color = "orange"
    services.style.fontWeight = "light"
    console.log('Event triggered')
})
xp.addEventListener('mouseover', () =>{
    xp.style.color = "orange"
    services.style.fontWeight = "light"
    console.log('Event triggered')
})


about.addEventListener('mouseleave', () =>{
    about.style.color = "white"
    services.style.fontWeight = "bold"
    console.log('Event triggered')
})
services.addEventListener('mouseleave', () =>{
    services.style.color = "white"
    services.style.fontWeight = "bold"
    console.log('Event triggered')
})
xp.addEventListener('mouseleave', () =>{
    xp.style.color = "white"
    console.log('Event triggered')
})



const everythingImage = document.getElementById('everything-background')
let screenWidth1 = screen.width
    let halfofScreenWidth1 = screenWidth1/2
    let halfofScreenWidthMinus5 = halfofScreenWidth - 40
    
    everythingImage.style.width = `${halfofScreenWidthMinus5}px`

setInterval(() => {
    changeText('dev-statement')
}, 1250)
function changeText(idElement) {
    var element = document.getElementById(idElement);

    if(idElement === 1) {
        
        
        setTimeout(() => {
            if(element.innerHTML === 'a Developer') element.innerHTML = 'Zeedz';
            else{
                element.innerHTML = 'a Developer'
            }   
            idElement.style.transition = "width 2.5s ease"
        idElement.style.width = "18ch"
        }, 5000);
        
    }
}
   