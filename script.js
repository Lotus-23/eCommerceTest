// Abrir y cerrar menu para moviles

const MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menuToggle(){
    if(MenuItems.style.maxHeight == "0px"){
        MenuItems.style.maxHeight = "200px"
    }else{
        MenuItems.style.maxHeight = "0px"
    }
}

// Selector imagenes pagina de productos

const ProductImg = document.getElementById("product-img");
const SmallImg = document.getElementsByClassName("small-img");

SmallImg[0].onclick = function() {
    ProductImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function() {
    ProductImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function() {
    ProductImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function() {
    ProductImg.src = SmallImg[3].src;
}

