/** Add any JavaScript you need to this file. */



var header=document.getElementById("header");
var left=document.getElementsByClassName("left")[0];
var default_view=document.getElementsByClassName("default-view")[0];
var footer=document.getElementsByClassName("footer")[0];
var right=document.getElementsByClassName("right")[0];

// get elements style
var header_style=window.getComputedStyle(header);
var left_style=window.getComputedStyle(left);
var default_view_style=window.getComputedStyle(default_view);
var footer_style=window.getComputedStyle(footer);

function show_category(category_id){
    let categories=document.getElementsByClassName("categories")[0];
    let category=document.getElementsByClassName(category_id)[0];
    categories.style.display="block";
    category.style.display="block";
    header.style.display="none";
    left.style.display="none";
    default_view.style.display="none";
    footer.style.display="none";
    right.style.width="100%";
    right.style.height="100vh";
}

function hide_category(child_element){
    let categories=child_element.parentNode.parentNode.parentNode;
    let category=child_element.parentNode.parentNode;
    categories.style.display="none";
    category.style.display="none";
    header.style=header_style;
    left.style=left_style;
    default_view.style=default_view_style;
    footer.style=footer_style;
    if(matchMedia("only screen and (max-width:900px)").matches){
       right.style.width="100%";
    }
    else{
        right.style.width="85%";
    }
    
    right.style.height="90vh";
}

function activate_burger(){
    const burger=document.querySelector(".burger");
    burger.addEventListener("click",()=>{
        left.classList.toggle("burger-active-left");
    })
}
activate_burger();




