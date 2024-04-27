
var rotate = document.getElementById("arrow_gia") 

function buttonFuntion_gia(){
    var height = document.getElementById("container__aside").clientHeight;       
     if(document.getElementById("block__gia").style.display=="block")
     {
        rotate.style.transform="rotate(0deg)"
        document.getElementById("block__gia").style.display = 'none';
        document.getElementById("container__aside").style.height = height - 50 +"px" ;
        
     }
    else{
        rotate.style.transform="rotate(90deg)"
        document.getElementById("block__gia").style.display = 'block';
        document.getElementById("container__aside").style.height = height + 50 +"px" ;
    }
}
function buttonFuntion_loai(){
    var height = document.getElementById("container__aside").clientHeight; 
    const rotate = document.getElementById("arrow_loai")      
     if(document.getElementById("block__loai").style.display=="flex")
     {
        rotate.style.transform="rotate(0deg)"
        document.getElementById("block__loai").style.display = 'none';
        document.getElementById("container__aside").style.height = height - 80 +"px" ;
     }
    else{
        rotate.style.transform="rotate(90deg)"
        document.getElementById("block__loai").style.display = 'flex';
        document.getElementById("container__aside").style.height = height + 80 +"px" ;
    }
}
function buttonFuntion_year(){   

    var height = document.getElementById("container__aside").clientHeight;    
    const rotate = document.getElementById("arrow_year");
     if(document.querySelector(".aside__year").style.display=="flex")

     {
        rotate.style.transform="rotate(0deg)"
        document.querySelector(".aside__year").style.display = 'none';
        document.getElementById("container__aside").style.height = height - 100 +"px" ;
     }

    else{
        rotate.style.transform="rotate(90deg)"
        document.querySelector(".aside__year").style.display = 'flex';
        document.getElementById("container__aside").style.height = height + 100 +"px" ;
    }
}
function buttonFuntion_material(){   

    var height = document.getElementById("container__aside").clientHeight;    
    const rotate = document.getElementById("arrow_material");
     if(document.querySelector(".aside__material").style.display=="block")

     {
        rotate.style.transform="rotate(0deg)"
        document.querySelector(".aside__material").style.display = 'none';
        document.getElementById("container__aside").style.height = height - 40 +"px" ;
     }

    else{
        rotate.style.transform="rotate(90deg)"
        document.querySelector(".aside__material").style.display = 'block';
        document.getElementById("container__aside").style.height = height + 40 +"px" ;
    }
}
function buttonFuntion_size(){   

    var height = document.getElementById("container__aside").clientHeight;    
    const rotate = document.getElementById("arrow_size");
     if(document.querySelector(".aside__size").style.display=="block")

     {
        rotate.style.transform="rotate(0deg)"
        document.querySelector(".aside__size").style.display = 'none';
        document.getElementById("container__aside").style.height = height - 40 +"px" ;
     }

    else{
        rotate.style.transform="rotate(90deg)"
        document.querySelector(".aside__size").style.display = 'block';
        document.getElementById("container__aside").style.height = height + 40 +"px" ;
    }
}

