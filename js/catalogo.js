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
            let cat_marcas = document.getElementsByClassName("tm-gallery-page")
            for (let marca of cat_marcas) {
                console.log(marca.getAttribute("id"))
                if (marca.getAttribute("id").includes(a.innerHTML)) {
                    marca.classList.remove("hidden")
                } else {
                    marca.classList.add("hidden")
                }
            }
        })
    }

}
cambiocatalogo()