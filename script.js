function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.transition = "all 1s ease"
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'
}



const fadeInElement = document.querySelectorAll('.fade-in');

window.addEventListener('scroll',() => {
    fadeInElement.forEach((el) =>{
        const rect  = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.classList.add('active')
        }
    })
})
// slide in //
// const slideInElements = document.querySelectorAll('.slide-in')
// window.addEventListener('scroll',()=>{
//     slideInElements.forEach((el)=>{
//         const rect = el.getBoundingClientRect();
//         if(rect.top > window.innerHeight - 50){
//             el.classList.add('active')
//         }
//     })
// })