window.addEventListener('scroll', scrollSpy)
const nav = document.querySelector('nav')
const header = document.querySelector('header')
const neverStuck = true
const mainSection = document.querySelector('main')
const y = nav.offsetTop


function scrollSpy(e) {
  let x = window.pageYOffset;
  if(x<=y) {
    unstick()
  }else{
    stick()
  }
}

const stick = ()=>{
  document.body.classList.add('stuck')
  document.body.style.paddingTop = getNavHeight() + 'px'

  // mainSection.classList.add('for-stuck')
  // mainSection.style.marginTop = 
} 

const unstick = ()=>{
  document.body.classList.remove('stuck')
  document.body.style.paddingTop= 0 + 'px'
  // mainSection.style.marginTop = 0 + 'px'
}

const getNavHeight = ()=> nav.offsetHeight