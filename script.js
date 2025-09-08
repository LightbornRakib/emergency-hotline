function countLove(id)
{
document.getElementById(id).addEventListener("click", function(e) {
    e.preventDefault();
const lovecount= document.getElementById("love-count");
let count = parseInt(lovecount.innerText);
count++;
lovecount.innerText = count;

});
};
countLove("love1");
countLove("love2");
countLove("love3");
countLove("love4");     
countLove("love5");
countLove("love6");
countLove("love7");
countLove("love8");
countLove("love9");


function disableAllcallButtons() {
    const buttons = document.querySelectorAll(".call-btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}



function pointCount(l)
{

const point= document.getElementById("point-count");

const pointCount1= parseInt(point.innerText);






if(pointCount1<20)
{
    alert("You don't have enough points");
    l.target.disabled = true;
  
    disableAllcallButtons();
      return false;
}
point.innerText= pointCount1-20;

    

    return true



}

const buttons1= document.querySelectorAll(".copy-btn");


function number(){
const numCount= document.getElementById("count-num");
const numCount1 = parseInt(numCount.innerText)+1;
numCount.innerText= numCount1;

}



function call(n)
{

    if(!pointCount())
    {
        return;
    }
    
var btn= n.currentTarget;
var card= btn.closest(".card-body");
var number= card.querySelector(".number").innerText;


var text= card.querySelector(".title").innerText;

var html= `
        <i class="fas fa-phone"></i>

    `;

alert("Calling "+ text+ " "+ number);
  history1(n);

}





function copyN(e)
{

 
   
 
const btn= e.currentTarget;
const card= btn.closest(".card-body");
const number= card.querySelector(".number").innerText;


navigator.clipboard.writeText(number)



.then(function(k){alert("Copied:"+ number);})



}

const buttons= document.querySelectorAll(".copy-btn");
for(let i=0; i<buttons.length; i++)
{
    buttons[i].addEventListener("click", copyN);
    buttons[i].addEventListener("click", number);


    
}   

const btns= document.querySelectorAll(".call-btn");
for(let i=0; i<btns.length; i++)
{
   
  

 
    btns[i].addEventListener("click", call);
    
}   



function history1(ml) {
    var container = document.getElementById("history");
    var div = document.createElement("div");


    div.innerHTML = `
        <div class="flex justify-between items-center bg-gray-50 p-2 max-h-[12vh] rounded-2xl">
            <p class="name text-lg font-bold">
                <span class="text"></span> <br>
                <span class="no text-gray-500 text-sm"></span>
            </p>
            <p class="time text-sm text-gray-500"></p>
        </div>
    `;


    var currentTime = new Date();
    var timeString = currentTime.toLocaleTimeString();
    div.querySelector(".time").textContent = timeString;

    var button = ml.currentTarget;
    var card = button.closest(".card-body");

    var name = card.querySelector(".title").innerText;
    var no = card.querySelector(".phone").innerText;


    div.querySelector(".name .text").textContent = name;
    div.querySelector(".name .no").textContent = no;


    container.appendChild(div);

    document.getElementById("clear").addEventListener("click", function() {
        container.innerHTML = ""; 
    });

}


if(pointCount1<20)
{
    disableAllcallButtons();
    
}



