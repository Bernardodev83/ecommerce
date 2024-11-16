let menu = document.getElementById('menu');
let menuBackground = document.getElementById('menuBackground');
let closeid = document.getElementById('close')

menu.addEventListener('click', () => {
   menuBackground.style.visibility = 'visible'
})

closeid.addEventListener('click', () => {
   menuBackground.style.visibility = 'hidden'
})


//seccion imagenes del producto en mobile

let btnPrevious = document.getElementById('previous');
let btnNext = document.getElementById('next');
let imageProducts = document.getElementById('imageProducts');

let index = 1

btnPrevious.addEventListener('click', () => {
   changePrevious(imageProducts)
})
btnNext.addEventListener('click', () => {
   changeNext(imageProducts)
})

//seccion imagenes del producto en destok
let thum1 = document.getElementById('1');
let thum2 = document.getElementById('2');
let thum3 = document.getElementById('3');
let thum4 = document.getElementById('4');

thum1.addEventListener('click', () => {
   imageProducts.style.backgroundImage= `url('./images/image-product-1.jpg')`;
})
thum2.addEventListener('click', () => {
   imageProducts.style.backgroundImage= `url('./images/image-product-2.jpg')`;
})
thum3.addEventListener('click', () => {
   imageProducts.style.backgroundImage= `url('./images/image-product-3.jpg')`;
})
thum4.addEventListener('click', () => {
   imageProducts.style.backgroundImage= `url('./images/image-product-4.jpg')`;
})

//logica del ingreso de datos del usuario


//restar y sumar al input del usuario
let btnMinus = document.getElementById('minus');
let btnPlus = document.getElementById('plus');
let btnInputValue = document.getElementById('inputValue');
let inputValueUser = 0;

btnMinus.addEventListener('click', () => {
   inputValueUser--
   if (inputValueUser <= 0) {
      inputValueUser = 0
   }
   btnInputValue.value = inputValueUser
})


btnPlus.addEventListener('click', () => {
   inputValueUser++
   btnInputValue.value = inputValueUser
})


//añadir al carrito
let btnAddCart = document.getElementById('addCartButton');
let cantNumber = document.getElementById('cantUserDiv');
let cantUserValue = document.getElementById('cantUserValue');


//seccion modal contenido
let containerModal = document.getElementById('modal__container');
let deleteModal = document.getElementById('iconDelete');
let cantidadProductoUser = document.getElementById('cantidadProducto')
let totalProductoModal = document.getElementById('totalProducto');

let btnShoppinCart = document.getElementById('button_checkout_shoppin');
let userShoppin = document.getElementById('modal__container_shoppin');
//

btnAddCart.addEventListener('click', () => {
   cantNumber.style.display = 'block';
   containerModal.style.visibility = 'visible'
   cantUserValue.innerText = inputValueUser

   let cantidadUserNum = parseInt(inputValueUser)
   cantidadProductoUser.innerText = cantidadUserNum

   let totalModal = cantidadUserNum * 125;

   totalProductoModal.innerText = totalModal


} )

//añadir carrito destok
let cantNumberDestok = document.getElementById('cantUserDivDestok');
let cantUserValueDestok = document.getElementById('cantUserValueDestok');

btnAddCart.addEventListener('click', () => {
   cantNumberDestok.style.display = 'block'
   cantUserValueDestok.innerText = inputValueUser
})

//delete modal

deleteModal.addEventListener('click', () => {
   containerModal.style.visibility = 'hidden'
   btnInputValue.value = 0
   cantUserValue.innerText = btnInputValue.value 
   cantUserValueDestok.innerText = 0
})


//seccion para cuando el usurio termine la compra
let iconDeleteFinal = document.getElementById('closeFinal')

btnShoppinCart.addEventListener('click', () => {
   containerModal.style.visibility = 'hidden'
   userShoppin.style.visibility = 'visible'
})

iconDeleteFinal.addEventListener('click', () => {
   userShoppin.style.visibility = 'hidden'
   btnInputValue.value = 0
    cantUserValue.innerText = btnInputValue.value 
   cantUserValueDestok.innerText = 0
})






//funcion para cambiar la imagen de los producctos en mobile

function changeNext(containerImage) {
      if (index == 4) {
      index == 1
      } else {
         index++
   }
   containerImage.style.backgroundImage= `url('./images/image-product-${index}.jpg')`;
}

function changePrevious(containerImage) {
      if (index == 1) {
      index == 4
      } else {
         index--
   }
   containerImage.style.backgroundImage= `url('./images/image-product-${index}.jpg')`;
}
//final funcion para cambiar la imagen de los producctos en mobile