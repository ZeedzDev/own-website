const about = document.getElementById('about')
const services = document.getElementById('services')
const xp = document.getElementById('xp')

about.addEventListener('mouseover', () =>{
    about.style.color = "orange"
    console.log('Event triggered')
})
services.addEventListener('mouseover', () =>{
    services.style.color = "orange"
    console.log('Event triggered')
})
xp.addEventListener('mouseover', () =>{
    xp.style.color = "orange"
    console.log('Event triggered')
})


about.addEventListener('mouseleave', () =>{
    about.style.color = "white"
    console.log('Event triggered')
})
services.addEventListener('mouseleave', () =>{
    services.style.color = "white"
    console.log('Event triggered')
})
xp.addEventListener('mouseleave', () =>{
    xp.style.color = "white"
    console.log('Event triggered')
})





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
   