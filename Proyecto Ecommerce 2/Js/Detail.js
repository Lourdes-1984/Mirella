/**
 * 
 * Funcion para mostrar detalles del producto
 */
function MostrarProductos(ev){
        
    let elemento = $('#lienzo');
     let h1 = document.getElementById('nombreProducto');
     let precio = document.getElementById('precio');
     let descripcion = document.getElementById('descripcion');
     let categoria = document.getElementById('categoria');
     let _producto = document.getElementById('producto');
     let marca = document.getElementById('marca');
     
    
    let idProducto = window.location.search.split('=')[1];
    let producto = Inventario.find(x => x.Id == idProducto);
       
    elemento.append(`
        <img src="${producto.Imagen}" class="card-img-top"  style="max-height: 400px; margin-bottom: 20px;"  alt="...">
       
      `);
  h1.innerHTML = producto.Nombre;
  precio.innerHTML = `$ ${producto.Precio} ,00`
  descripcion.innerHTML = producto.Descripcion
  categoria.innerHTML = `Categoria: ${producto.Categoria}`
  _producto.innerHTML = `Producto: ${producto.Producto}`
  marca.innerHTML = `Marca: ${producto.Marca}`
}

MostrarProductos('Index')

//----para agregar al carrito----

/** Esto para añadir al carrito : P*/
let btndetail = document.querySelectorAll('#btn-agregar-alcarro-detail')
console.log(btndetail)

var compras = []

btndetail.forEach(btn =>{ 
    btn.addEventListener('click',mostrardetail)
})


/**
 * Funcion que busca el detalle del producto de mi const Inventario
 * 
 */
function mostrardetail(ev){
  let add = ev.target
 
  if(add){ 
  let item = add.closest('.contenedor-info-producto')
  let name = item.querySelector('.txt-nombre-producto').innerText
 
  let find = Inventario.find((x)=>{ 
   return  x.Nombre == String(name)
    })
  console.log('find',find)
  agregaralCarroDetail(find)
  return alert(`Producto: ${name} agregado al carrito`)
  }
}

/**
 * Funcion que agrega el producto buscado en mostrardetail a nuestra variable compras
 * en el que se agregan los productos seleccionados. Me suma la cantidad de productos si hay mas de uno.
 */
 function agregaralCarroDetail(find){
  for(let i= 0; i < compras.length; i++){
     if(compras[i].Nombre.trim() === find.Nombre.trim()){
         compras[i].Cantidad++ ;
         return null
      }
  }

  compras.push(find)
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
  if (!window.localStorage.key('compras')) {
      window.localStorage.setItem('compras', JSON.stringify(compras));
  }
  else {
      window.localStorage.setItem('compras', JSON.stringify(compras));
  }
}

/**
* Funcion que guarda y despues muestra en el browser o navegador la lista de comentarios que guardamos en nuestro fom.
*/
function obtenerEnPC() {
  if (window.localStorage.key('compras')) {
      compras = JSON.parse(window.localStorage.getItem('compras'));
  }
}

obtenerEnPC()