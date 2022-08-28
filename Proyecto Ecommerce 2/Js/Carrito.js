//Trea la ubicacion de nuestra variable compras
var carritoDeCompras = JSON.parse(window.localStorage.compras)
//console.log('carrito',carritoDeCompras)
let carrito = $('#pcarritos');

/**
 * 
 * Mapea nuestra variable carrito y lo muestra en la pantalla
 */
function mostrarCarrito(ev) {
    
    carrito.innerHTML = '';

    carritoDeCompras.map((valor)=>{
        carrito.append(`
        <div class="carrito2" id=${valor.Id}>
        <div class="carr1">
            <img src="${valor.Imagen}" alt="${valor.Nombre}" height="250px" width="250px">
            <h3 class="nombreProd">${valor.Nombre}</h3>
            <h3>$ <span data-valor="${valor.Precio}" id="valueprod">${valor.Precio}</span></h3>
            <br>
        </div>
        <div class="carr2">
            <h4>Cantidad</h4>
            <div class="btncarr2"> 
            <button type="button" class="btn btn-primary"  id="btnresta"  >-</button>
            <input type="text" class="form-control" value="${valor.Cantidad}" data-id="${valor.Id}" id="number1"  style="width:60px" placeholder="1" min="1" max="20" />
            <button type="button" class="btn btn-primary"  id="btnsuma" >+</button>
            </div>
        </div>
        <div class="carr3">
            <h3>Precio</h3>
            <h3>$<span data-cant="${valor.Precio}" id="cantprod">${valor.Precio}</span></h3>
        </div>
        <div class="carr4">
            <button type="button" class="btn btn-secondary" data-close="" id="close">X</button>
        </div>
        </div>`)
       
       let btnclose = document.querySelectorAll('#close')
       btnclose.forEach(btn=>{
        btn.addEventListener('click',borrar)
       })
       subTotal()
       
       let btnsuma = document.querySelectorAll('#btnsuma')
       btnsuma.forEach(btn=>{
        btn.addEventListener('click',suma)
       })

       let btnresta = document.querySelectorAll('#btnresta')
       btnresta.forEach(btn=>{
        btn.addEventListener('click',reduce)
       })
    }) 
}

//funciona, pero me borra de abajo para arriba
/**
 * 
 * Función que borra productos del carrito
 */
function borrar(ev){
    ev.preventDefault();
    let add = ev.target
    let prod = add.closest('.carrito2')

    carritoDeCompras.filter((el)=>{ 
       if(Number(el.Id) === Number(prod.id)) {
        let index = carritoDeCompras.indexOf(Number(el.Id) === Number(prod.id))
        carritoDeCompras.splice((index), 1)
       }
    })
    guardarEnPC()
    window.location.reload() //asi recarca la pagina
}    

/**
 * 
 * Función que reduce la cantidad de un producto
 */
function reduce(ev) {
    ev.preventDefault();
    let add = ev.target
    let prod = add.closest('.carrito2')

   carritoDeCompras.filter((el)=>{ 
       if(Number(el.Id) === Number(prod.id)) {
        el.Cantidad--;
       }
    })
 
    guardarEnPC()
    window.location.reload() //asi recarca la pagina
}

/**
 * 
 * Función que incrementa la cantidad de un producto
 */
function suma(ev) {
    ev.preventDefault();
    let add = ev.target
    let prod = add.closest('.carrito2')

   carritoDeCompras.filter((el)=>{ 
       if(Number(el.Id) === Number(prod.id)) {
        el.Cantidad++;
       }
    })

    guardarEnPC()
    window.location.reload() //asi recarca la pagina
}

/**
 * Funcion que suma el precio de subtotal de los productos
 * 
 */
function subTotal() {
    let total = 0
    let subTotal = document.getElementById("subtotal");

    carritoDeCompras.find((item) => {
        const precio = Number(item.Precio)
        total = total + precio * item.Cantidad
    })

    subTotal.innerText = '';
    subTotal.innerText = total;

    TotalCompra()
}

/**
 * Funcion que suma el precio de todos los productos
 * 
 */
function TotalCompra() {
    let subTotal = document.getElementById("subtotal").innerText;
    let total = document.getElementById("total")

    total.innerText = '';
    let string = String(subTotal);

    total.innerText = string;
}

/**
 * funcion que guarda en el localstorage la lista de comentarios que guardamos en nuestro fom.
*/
function guardarEnPC() {
    if (!localStorage.key('compras')) {
        localStorage.setItem('compras', JSON.stringify(carritoDeCompras));
    }
    else {
        localStorage.setItem('compras', JSON.stringify(carritoDeCompras));
    }
}

/**
* Funcion que guarda y despues muestra en el browser o navegador la lista de comentarios que guardamos en nuestro fom.
*/
function obtenerEnPC() {
    if (localStorage.key('compras')) {
        carritoDeCompras = JSON.parse(localStorage.getItem('compras'));
    }
}

function finalizarCompra(ev){
    let mensajeCompra = `COMPRA FINALIZADA
Gracias por su compra! :)`
    localStorage.removeItem('compras')
    alert(mensajeCompra)
    window.location.reload()
}




mostrarCarrito('detail')
obtenerEnPC()