
function recuperarValue(venta, productos) {
    let html =``
    for(let p of productos){
        if(p.id==venta.id){
            for(i=1; i<=p.cantidad; i++){
                if(venta.cantidad==i){
                 html += `<option value="${i}" selected>${i}</option>`
                }
                else{
                    html += `<option value="${i}">${i}</option>`
                }
            }
            }
    }
    return html;
  }

function recuperarValueO(venta,producto) {
    let pr
    for(let p of producto){
        if(p.id==venta.id){
                pr=p
            }
    }
    return pr;
  
  }
function cambiohtml(ventas,producto) {
    let product= recuperarValueO(ventas,producto)
    let html=
    `<tr>
    <td><h3>${product.nombre}</h3></td>
    <td class="text-center mob-hide "><a href="" class="trsn" title=""><img src="${product.src}" alt="" title=""></a></td>
    <td class="mob-hide"> <span class="order-product-price">${product.precio}</span></td>
    <td><select class="select select-qty form-control" name="89459851" title="Qty">
    ${recuperarValue(ventas,producto)}
    </td>
    <td><span class="order-product-subtotal">$${(ventas.cantidad)*(parseInt(product.precio.replace("$"," ")))}</span></td>
    <td clas="text-right"> <a href="" class="cart-product-remove" title="Remove Product"><i class="fas fa-times-circle"></i></a></td>
    </tr>`
    return html;
}



let peticion = async() => {
    let htmlC = ``;
    try {
        let response = await fetch('bateria.json');
        const data = await response.json();
        data.Ventas.forEach(ventas => {
            let html = cambiohtml(ventas,data.Productos)
            htmlC += html;

        })
        ;

    } catch (error) {
        console.log(error);
    }
    document.getElementsByTagName("tbody")[0].innerHTML = htmlC
    

}
document.addEventListener("DOMContentLoaded", function(event) {
    peticion();
})




  








