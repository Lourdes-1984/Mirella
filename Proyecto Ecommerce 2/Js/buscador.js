const busqueda = document.getElementById("input-buscar")
const misProductos = document.querySelector('#misProductos');
//console.log('busqueda',busqueda)
//console.log('misProductos',misProductos)

busqueda.addEventListener('keyup', (ev) => {
    misProductos.innerHTML=''
    misProductos.innerHTML = Inventario.filter(x => x.Nombre.toLowerCase()
    .includes(ev.currentTarget.value.toLowerCase())).map((proc) => {
        //console.log(proc)
        return  `                                                            
                <div class="producto-item">
                <img src="${proc.Imagen}" alt=""class="imagen-producto">
                <div class="info-producto">
                    <button type="button" class="btn-ver-detalle"  >
                        <h4 class="txt-nombre-producto">${proc.Nombre}</h4>
                        <p class="precio"> $ ${proc.Precio}</p>
                        <a href="./Detail.html?IdProducto=${proc.Id}">Ver más</a>
                         
                     </button>
                </div>
            </div>`
    }).join('');
   
  
    return;
})