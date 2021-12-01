function cambiohtml(producto) {
    let html=
    `<tr>
    <td><h3>"Nombre"</h3></td>
    <td class="text-center mob-hide"><a href="" class="trsn" title=""><img src="" alt="" title=""></a></td>
    <td class=""> <span class="order-product-price"></span></td>
    <td><select class="select select-qty form-control" name="89459851" title="Qty" onchange="$('#cart-update-form').submit();return false;"></td>
    <td><span class="order-product-subtotal"></span></td>
    <td clas="text-right"> <a href="" class="cart-product-remove" title="Remove Product"><i class="fas fa-times-circle"></i></a></td>
    </tr>`
    return html;
}




