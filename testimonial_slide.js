let flag=0;
function control(x) {
    flag = flag+x;
    showSlides(flag);
}
function showSlides(num) {
    let slides=document.getElementsByClassName("slider");

    if(num==slides.length){
        flag=0;
        num=0;
    }
    if(num < 0){
        flag=slides.length-1;
        num=slides.length-1;
    }
    for(let i of slides){
        i.style.display="none"
    }

    slides[num].style.display="block";
}
showSlides(flag);