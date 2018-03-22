

// function displayStuff(el,){
//     if(el.style.display='none'){
//     el.style.display='block';
//     } else{
//         el.style.display='none';
//         }
// }


// meer en terugknop voor verschillende teksten op aboutsection
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




//klik op #project-1, #project-2 of #project-3 
//verandert achtergrondkleur
// project-uitleg verschijnt + passende project uitleg

//

//1 

var feelGood = "De app waarmee ik voor het eerst geleerde javascript theorie omzette in de praktijk.";
   var weather = "weater dummy tekst weater dummy tekst weater dummy tekst weater dummy tekst ";
   var temperatuur = "temperatuur dummetekst temperatuur dummetekst temperatuur dummetekst ";

var project1 = document.getElementById("project-1");
   var project2 = document.getElementById("project-2");
   var project3 = document.getElementById("project-3");
   var uitleg = document.getElementById("project-uitleg");
   var uitlegTekst = document.getElementById("uitleg-tekst");

  var projecten= document.querySelector(".project");
project1.addEventListener('click',project1Uitleg);
project2.addEventListener('click',project2Uitleg);
project3.addEventListener('click',project3Uitleg);

function projectUitleg(tekst){


   
        uitleg.style.display = "block";
   
    



}

function project1Uitleg(){
    projectUitleg();
uitlegTekst.innerHTML=feelGood;

}

function project2Uitleg(){
    projectUitleg();
uitlegTekst.innerHTML=weather;

}
function project3Uitleg(){
    projectUitleg();
uitlegTekst.innerHTML=temperatuur;

}

