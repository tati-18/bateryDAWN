function recuperarValue(venta, productos) {
    let html = ``
    for (let p of productos) {
        if (p.id == venta.id) {
            for (i = 1; i <= p.cantidad; i++) {
                if (venta.cantidad == i) {
                    html += `<option value="${i}" selected= "true" >${i}</option>`
                } else {
                    html += `<option value="${i}">${i}</option>`
                }
            }
        }
    }
    return html;
}

function recuperarValueO(venta, producto) {
    let pr
    for (let p of producto) {
        if (p.id == venta.id) {
            pr = p
        }
    }
    return pr;

}

function cambiohtml(ventas, producto) {
    let product = recuperarValueO(ventas, producto)
    let html =
        `<tr>
    <td><h3>${product.nombre}</h3></td>
    <td class="text-center mob-hide "><a href="" class="trsn" title=""><img src="${product.src}" alt="" title=""></a></td>
    <td class="mob-hide"> <span class="order-product-price">${product.precio}</span></td>
    <td><select class="select select-qty form-control"  id="${product.id}" title="Qty">
    ${recuperarValue(ventas,producto)}
    </td>
    <td><span id="S${product.id}"class="order-product-subtotal">$${ventas.cantidad * (parseInt(product.precio.replace("$", " ")))}</span></td>
    <td clas="text-right"> <a href="" class="cart-product-remove" title="Remove Product"><i class="fas fa-times-circle"></i></a></td>
    </tr>`
    return html;
}

function ObtenerSubtotal(precio, id) {
    let selValue = document.querySelector(`#${id}`).value;
    let product = recuperarValueO(ventas, producto)
    let sub = (selValue) * (parseInt(precio.replace("$", " ")))
    return sub;
}

function click(data, producto) {
    for (let p of data) {
        let pro = recuperarValueO(p, producto)
        let selValue = document.getElementById(`${p.id}`);
        selValue.addEventListener("change", () => {
            let cantidad = parseInt(selValue.value)
            let precio = parseInt((pro.precio.replace("$", "")))
            let total = cantidad * precio
            let span = document.getElementById(`S${p.id}`)
            span.innerHTML = "$" + total
        })
    }
}


let peticion = async() => {
    let htmlC = ``;
    try {
        let response = await fetch('bateria.json');
        const data = await response.json();
        data.Ventas.forEach(ventas => {
            let html = cambiohtml(ventas, data.Productos)
            htmlC += html;

        });
        document.getElementsByTagName("tbody")[0].innerHTML = htmlC
        click(data.Ventas, data.Productos)
        actualizartotal();
        document.getElementsByClassName("actualizar-compra")[0].addEventListener("click", () => {
            actualizartotal();
        })
    } catch (error) {
        console.log(error);
    }

}
document.addEventListener("DOMContentLoaded", function(event) {
    peticion();
})




function actualizartotal() {
    let total = document.getElementsByClassName("order-product-subtotal")
    let subtotal = 0
    for (let t of total) {
        subtotal += (parseInt(t.innerHTML.replace("$", " ")))
    }
    document.getElementsByTagName("strong")[1].innerHTML = "$" + subtotal
}