const closeBtn=document.querySelector('.close-btn');
const menuBtn=document.querySelector('.nav_menu');
const loaderText=document.querySelector('#loader h1')
const loader=document.querySelector('#loader ')


const helloArray = [
    "Hello",        // English
    "Hola",         // Spanish
    "Bonjour",      // French
    "Ciao",         // Italian
    "Hallo",        // German
    "Olá",          // Portuguese
    "Konnichiwa",   // Japanese
    "Annyeonghaseyo", // Korean
    "Nǐ hǎo",      // Chinese (Mandarin)
    "Namaste",      // Hindi
    "Salaam",       // Arabic
    "Merhaba",      // Turkish
  ];

  let i=0;
  const load=setInterval(function(){
    if(i>=helloArray.length){
        clearInterval(load)
        gsap.to('#loader',{
            y:'-100%',
            duration:1,
            scale:1,
            // opacity:.5
        })
        setTimeout(function(){
            loader.style.display='none'
        },3000)
    }
    loaderText.textContent=helloArray[i]
    i++
},200)


menuBtn.addEventListener('click',()=>{
    gsap.to('.toggle_menu',{
        y:'100%',
        duration:1,
        opacity:1
    })
    gsap.from('.menu-socials',{
        y:100,
        opacity:0,
        duration:.5,
        delay:1
    })
    gsap.from('.toggle_menu ul li',{
        y:60,
        opacity:0,
        duration:.5,
        delay:.8,
        stagger:.2
    })
})
closeBtn.addEventListener('click',()=>{
    gsap.to('.toggle_menu',{
        y:'-100%',
        duration:2,
        opacity:0
    })

})


gsap.to('.hero_left h3 i',{
    rotate:360,
    duration:5,
    yoyo:true,
    repeat:-1
})
gsap.to('.header_scroll .scroll',{
    y:20,
    duration:2,
    yoyo:true,
    repeat:-1
})




gsap.from('nav .container',{
    y:'-100%',
    duration:.6,
    delay:3.5
})
gsap.from('.hero_left-heading',{
    y:100,
    duration:.6,
    rotate:40,
    delay:4.1,
    stagger:.1
})

gsap.from('.hero_left h3, .header_scroll',{
    opacity:0,
    duration:.7,
    delay:4.5
})
gsap.from('.hero_right img',{
    opacity:0,
    x:'100%',
    duration:.7,
    delay:4.5
})
gsap.from('.hero_left button',{
    opacity:0,
    duration:.7,
    delay:4.7
})

gsap.to('.banner_content',{
    x:'-50%',
    duration:20,
    repeat:-1
})

