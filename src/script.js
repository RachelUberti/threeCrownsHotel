// /* Open when someone clicks on the span element */
// function openNav() {
//   document.getElementById("myNav").style.width = "100%";
// }

// /* Close when someone clicks on the "x" symbol inside the overlay */
// function closeNav() {
//   document.getElementById("myNav").style.width = "0%";
// }

$(function(){
	var is_open = 0;
  $(".burgerburger").click(function(){
    if (is_open == 0) {    	
      openNav();     
    } else {    
      closeNav();     
    }
  });
  $(".closebtn").click(function(){
  	closeNav();  
  });
  
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
    $(".burgerburger").html('&#9776');
     is_open = 1;
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    	$(".burgerburger").html('&#9776');
       is_open = 0;
}

});

