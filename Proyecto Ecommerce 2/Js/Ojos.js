/** Esto para añadir al carrito : P*/
let btnojos = document.querySelectorAll('#btn-ver-detalle-carrito')

var compras = []

btnojos.forEach(btn =>{ 
    btn.addEventListener('click',mostrardetail)
})

/**
 * Funcion que busca el detalle del producto de mi const Inventario
 * 
 */
function mostrardetail(ev){
  let add = ev.target
  if(add){ 
  let item = add.closest('.info-producto')

  let name = item.querySelector('.txt-nombre-producto').innerText

  let hallar = Inventario.find((x)=>{ 
  return x.Nombre == String(name)
  }) 

  agregaralCarro(hallar)
  return alert(`Producto: ${name} agregado al carrito`)
}
}

/**
 * Funcion que agrega el producto buscado en mostrardetail a nuestra variable compras
 * en el que se agregan los productos seleccionados. Me suma la cantidad de productos si hay mas de uno.
 */
function agregaralCarro(hallar){

     for(let i= 0; i < compras.length; i++){
        if(compras[i].Nombre.trim() === hallar.Nombre.trim()){
            compras[i].Cantidad++ ;
           return null
        }
        
    }

    compras.push(hallar)
    verCarro()
    guardarEnPC()
}

function verCarro(){
 console.log('Lo que hay en el carrito:',compras)
 
}

/**
 * funcion que guarda en el localstorage la lista de comentarios que guardamos en nuestro fom.
*/
function guardarEnPC() {
    if (!localStorage.key('compras')) {
        localStorage.setItem('compras', JSON.stringify(compras));
    }
    else {
        localStorage.setItem('compras', JSON.stringify(compras));
    }
}

/**
* Funcion que guarda y despues muestra en el browser o navegador la lista de comentarios que guardamos en nuestro fom.
*/
function obtenerEnPC() {
    if (localStorage.key('compras')) {
        compras = JSON.parse(localStorage.getItem('compras'));
    }
}

obtenerEnPC()