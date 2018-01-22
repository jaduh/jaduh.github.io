
//oplossing teveel tekst op pagina. 

var meerknop = document.querySelector('#meerknop');
var terugknop = document.querySelector('#terugknop')

var p1 = document.querySelector('#p1');
var p2 = document.querySelector('#p2');

meerknop.addEventListener('click', meerTekst);
terugknop.addEventListener('click', terugTekst);


function meerTekst(){
    
    if(p2.style.display='none'){
        p1.style.display='none';
        p2.style.display='block';
        terugknop.style.display='block';
        meerknop.style.display='none';
    }
   
}


function terugTekst(){
    if(p1.style.display='none'){
        p2.style.display='none';
        p1.style.display='block';
        meerknop.style.display='block';
        terugknop.style.display='none';
    }
}


















////--------------------Smooth scrolling
//
//
//function anchorLinkHandler(e) {
//    var distanceToTop = function (el){
//      return Math.floor(el.getBoundingClientRect().top);
//
//    };
//    e.preventDefault();
//    const targetID = this.getAttribute("href");
//    const targetAnchor = document.querySelector(targetID);
//    if (!targetAnchor) return;
//    const originalTop = distanceToTop(targetAnchor);
//
//    window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });
//
//    const checkIfDone = setInterval(function() {
//        const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
//        if (distanceToTop(targetAnchor) === 0 || atBottom) {
//            targetAnchor.tabIndex = "-1";
//            targetAnchor.focus();
//            window.history.pushState("", "", targetID);
//            clearInterval(checkIfDone);
//        }
//    }, 100);
//}
//
//const linksToAnchors = document.querySelectorAll('a[href^="#"]');
//
//linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler));