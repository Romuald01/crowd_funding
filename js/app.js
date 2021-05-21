var bookMarkedIcon = document.getElementById("icon-bookmarked");
var changeText = document.getElementById("icon-bookmarked-text");
var bookMarkedLogo;

bookMarkedIcon.addEventListener("click",function(){ 
changeText.style.color = "hsl(176, 72%, 28%)";
changeText.innerHTML = "<b>bookmarked</b>";
var bookMarkedLogo = bookMarkedIcon.setAttribute("src","images/icon-bookmarked.svg");
bookMarkedLogo.style.display = "block";
  });
  // document.querySelector('#show-modal').addEventListener('click',()=> {
  //   alert("hello world!");
  // })

  // CODE FOR THANKS SUPPORT START


function support(){
  var thanksBox = document.querySelector(".modal");
  thanksBox.style.display = "block";
 
}
function gotit(){
  var thanksBox = document.querySelector(".modal");
  thanksBox.style.display = "none";
 
}




  // CODE FOR THANKS SUPPORT END



// mobile nav overlay start
document.querySelector("#close-icon").style.display = "none";
var  $hamburgerIcon = document.getElementById("hamburger-icon");
var  $closeIcon = document.getElementById("close-icon");

$hamburgerIcon.addEventListener("click",()=>{
  document.getElementById("myNav").style.width = "100%";
  document.body.classList.add('no-scroll');
  
  $hamburgerIcon.style.display = 'none';
  $closeIcon.style.display = 'block';
 
})

$closeIcon.addEventListener('click',()=>{
 document.getElementById("myNav").style.width = "0%";
 document.body.classList.remove('no-scroll');
 $hamburgerIcon.style.display = 'block';
 $closeIcon.style.display = 'none';
})
// mobile nav overlay start


// crowdfunding pledges

function popovermodalbox(){
  document.querySelector("#popovermodal").style.display = 'block';
}
function pledgeclose(){
  // alert("dkdddlvlvl");
  document.querySelector("#popovermodal").style.display = "none";
}