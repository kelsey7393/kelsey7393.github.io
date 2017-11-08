//Side menu accordion script
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	var panel = acc[i].nextElementSibling;
	if(acc[i].classList.contains("active"))
    		panel.style.display = "block"
    	else
    		panel.style.display = "none";
    acc[i].onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
};

//change page and activeness when menu item is clicked
document.getElementById('idAccodionButton').onclick = function(event){
    var windowPath = window.location.pathname;
    if(!windowPath.includes("interior_design.html"))
    {
        window.location.href="interior_design.html";
    }
}

document.getElementById('tpAccodionButton').onclick = function(event){
    var windowPath = window.location.pathname;
    if(!windowPath.includes("trip_organization.html"))
    {
        window.location.href="../coming_soon.html";
    }
}

document.getElementById('recipesAccodionButton').onclick = function(event){
    var windowPath = window.location.pathname;
    if(!windowPath.includes("recipes.html"))
    {
        window.location.href="../coming_soon.html";
    }
}

document.getElementById('diyAccodionButton').onclick = function(event){
    var windowPath = window.location.pathname;
    if(!windowPath.includes("diy.html"))
    {
        window.location.href="../coming_soon.html";
    }
}

//dropdown in normal nav
// (function($){
//     $(document).ready(function(){
//         $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
//             event.preventDefault(); 
//             event.stopPropagation(); 
//             $(this).parent().siblings().removeClass('open');
//             $(this).parent().toggleClass('open');
//         });
//     });
// })(jQuery);




//submenu item nav
// $(document).ready(function() {
//   $('#nav-menu').on('show.bs.collapse', function() {
//     $('.nav-pills').addClass('nav-stacked');
//   });

//   $('#nav-menu').on('hide.bs.collapse', function() {
//     $('.nav-pills').removeClass('nav-stacked');
//   });
// });