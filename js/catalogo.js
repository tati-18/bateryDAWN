function cambiohtml(producto) {
    
    let html =
        `<div class="col-md-4 col-sm-6 bateria">
    <div class="baterie-item wow fadeIn animated" data-wow-duration="0.75s" style="visibility: visible;-webkit-animation-duration: 0.75s; -moz-animation-duration: 0.75s; animation-duration: 0.75s;">
        <div class="thumb-content">
            <div class="thumb-inner">
                <img src="${producto.src}" alt="">
            </div>
            <div class="baterie-banner">
                <a>${producto.tipo}</a>
            </div>
        </div>
        <div class="down-content">
            <h4>${producto.nombre}</h4>
            <span>${producto.precio}</span>
            <div class="descripcion row">
                <p class="col-12">Caracteristicas:</p>
                <p class="col-12">${producto.caracteristicas[0]}</p>
                <p class="col-12">${producto.caracteristicas[1]}</p>
                <p class="col-12">${producto.caracteristicas[2]}</p>
            </div>

            <ul class="baterie-info">
                <li>
                    <div class="button item"><i class="bi bi-cart3"></i>
                        <p>Añadir al carrito</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>`
    return html;
}
let peticion = async() => {
    let htmlC = ``;
    try {
        let response = await fetch('bateria.json');
        const data = await response.json();
        data.Productos.forEach(producto => {
            let html = cambiohtml(producto)
            htmlC += html;
        });

    } catch (error) {
        console.log(error);
    }
    document.getElementsByClassName("catalogo_bateria")[0].innerHTML = htmlC

}
document.addEventListener("DOMContentLoaded", function(event) {
    peticion();
})

function filtrado() {
    const boton = document.getElementsByClassName("form-control rounded");
    let texto_boton = boton[0].value;
    let tipo = document.getElementById("navproductos").getElementsByClassName("tm-paging-link active")[0].innerHTML
    fetch("bateria.json")
        .then(response => response.json())
        .then(data => {
            let htmlC = ``;
            data.Productos.forEach(producto => {
                let descripcion = producto.caracteristicas[0] + producto.caracteristicas[1] + producto.caracteristicas[2] + " " + producto.precio + " " + producto.nombre
                if (tipo == producto.tipo) {
                    if (descripcion.toLowerCase().includes(texto_boton.toLowerCase())) {
                        let html = cambiohtml(producto)
                        htmlC += html;
                    }
                } else {
                    if (descripcion.toLowerCase().includes(texto_boton.toLowerCase()) && tipo == "Todos los Productos") {
                        let html =
                            cambiohtml(producto)
                        htmlC += html;
                    }
                }
            });
            document.getElementsByClassName("catalogo_bateria")[0].innerHTML = htmlC
        })
        .catch(console.error);
}

const buscar = () => {
    const boton = document.getElementsByClassName("form-control rounded");
    boton[0].addEventListener("keyup", filtrado, false);

}
buscar()

let cambioproductos = async(a) => {
    document.getElementsByClassName("catalogo_bateria")[0].innerHTML = ``
    let htmlC = ``;
    try {
        let response = await fetch('bateria.json');
        const data = await response.json();
        data.Productos.forEach(producto => {
            if (a.innerHTML == producto.tipo) {
                let html =
                    cambiohtml(producto)
                htmlC += html;
            }
        });

    } catch (error) {
        console.log(error);
    }
    if (a.innerHTML != "Todos los Productos") {
        document.getElementsByClassName("catalogo_bateria")[0].innerHTML = htmlC
    } else {
        peticion()
    }

}
let cambiocatalogo = () => {
    let butonesa = document.getElementById("navproductos").getElementsByTagName("a")
    for (let a of butonesa) {
        a.addEventListener("click", () => {
            a.classList.add("active")
            let marcas = document.getElementById("navproductos").getElementsByTagName("a")
            for (let marca of marcas) {
                if (a.innerHTML != marca.innerHTML) {
                    marca.classList.remove("active")
                }
            }
            cambioproductos(a);
        })
    }

}
cambiocatalogo()