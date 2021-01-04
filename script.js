const home = document.querySelector('.home');
const work = document.querySelector('.work');
const blog = document.querySelector('.blog');
const about = document.querySelector('.about');
const ekran= document.querySelector('.ekran');

  home.addEventListener('click' ,()=>{
      ekran.style.backgroundImage=`url(haus.jpg)`
  })
  work.addEventListener('click' ,()=>{
    ekran.style.backgroundImage=`url(work.jpg)`
})
blog.addEventListener('click' ,()=>{
    ekran.style.backgroundImage=`url(blog.jpg)`
})
about.addEventListener('click' ,()=>{
    ekran.style.backgroundImage=`url(about.jpg)`
})