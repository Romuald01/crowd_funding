var bookMarkedIcon = document.getElementById("icon-bookmarked");
var changeText = document.getElementById("icon-bookmarked-text");
var bookMarkedLogo;

bookMarkedIcon.addEventListener("click",function(){ 
  changeText.style.color = "hsl(176, 72%, 28%)";
changeText.innerHTML = "<b>bookmarked</b>";
var bookMarkedLogo = bookMarkedIcon.setAttribute("src","images/icon-bookmarked.svg");
bookMarkedLogo.style.display = "block";
  });
    
  // var bookMarkedLog =
  // bookMarkedLogo.addEventListener("click",function(){ 
  //   changeText.style.color = "red";
  // changeText.innerHTML = "<b>bookmark</b>";
  // bookMarkedIcon = bookMarkedIcon.setAttribute("src","images/icon-bookmark.svg");
  // bookMarkedIcon.style.display = "block";
  //   });


function support(){
  var thanksBox =  document.getElementById("thankSupportContent");
  thanksBox.style.display = "block";
}

// code of the navbar overlay start
document.querySelector("#close-icon").style.display = "none";

var $hamburgerIcon = document.querySelector("#hamburger-icon");
var $closeIcon = document.querySelector("#close-icon");

$hamburgerIcon.addEventListener("click",()=>{
document.querySelector("#myNav").style.width = "100%";

$hamburgerIcon.style.display = "none";
$closeIcon.style.display = "block";

});

$closeIcon.addEventListener("click",()=>{
document.querySelector("#myNav").style.width = "0%";
$hamburgerIcon.style.display = "block";
$closeIcon.style.display = "none";
})
// code of the navbar overlay end


 

                                                                                                                                                                                                                                                                                                                  