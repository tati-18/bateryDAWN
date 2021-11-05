/*import fromProducto from "from_producto_admi.html";

let option_admi = document.getElementsByClassName("btn-option-admi");
let content = document.getElementsByClassName("content")[0];

option_admi.array.forEach(element => {

    if(element.innerHTML === 'Producto'){
        content.innerHTML == '<h2>hola mundo</h2>'
    }
});*/
let content = document.getElementsByClassName("content")[0];

const handleClick = (event) => {
    let nameOption = event.target.name;
    
    if(nameOption === 'Producto'){
        content.innerHTML = `
            <h2>Nuevo Producto</h2>
            <form action="" method="post" class="producto">
                <div class="row  mb-3 align-items-center">
                    <div class="col-12 col-lg-3">
                    <label for="name" class="col-form-label">Nombre</label>
                    </div>
                    <div class="col-12 col-lg-9">
                    <input type="text" id="name" class="form-control" aria-describedby="passwordHelpInline">
                    </div>
            </div>
            <div class="row mb-3  align-items-center">
                    <div class="col-12 col-lg-3 ">
                        <label for="description" class="col-form-label">Descripción</label>
                    </div>
                    <div class="col-12 col-lg-9">
                        <textarea name="description" id="description" cols="30" rows="10" class="form-control" aria-describedby="passwordHelpInline"></textarea>
                    </div>
            </div>
            <div class="row mb-3  align-items-center">
                    <div class="col-12 col-lg-3">
                        <label for="precio" class="col-form-label">Precio</label>
                    </div>
                    <div class="col-12 col-lg-3">
                        <input type="number" name="precio" id="precio" class="form-control" aria-describedby="passwordHelpInline">
                    </div>
                    <div class="col-12 col-lg-3">
                        <label for="precio" class="col-form-label">Marca</label>
                    </div>
                    <div class="col-lg-3" >
                        <select class="form-select" aria-label="Default select example">
                            <option disabled selected>Seleccione una marca</option>
                            <option value="1">Marca 1</option>
                            <option value="2">Marca 2</option>
                            <option value="3">Marca 3</option>
                        </select>
                    </div>
                </div>
                <div class="row   align-items-center justify-content-center">
                    <label class="custom-file-upload col-12 col-lg-8">
                        <iput type="file" id="imagen"> Subir Imagen</input>
                    </label>
                </div>
                <div class="row  align-items-center justify-content-center">
                    <label class="custom-file-upload col-12 col-lg-8">
                        <input type="submit" name="guardar" value="Guardar">  Guardar  </input>
                    </label>
                </div>
            </form>
        `
    }
    if(nameOption === 'Marca'){
        content.innerHTML= `
        <h2>Nueva Marca</h2>
        <form action="" method="post" class="producto">
            <div class="row  mb-3 align-items-center">
                <div class="col-12 col-lg-3">
                  <label for="name" class="col-form-label">Nombre</label>
                </div>
                <div class="col-12 col-lg-9">
                  <input type="text" id="name" class="form-control" aria-describedby="passwordHelpInline">
                </div>
           </div>
           <div class="row mb-3  align-items-center">
                <div class="col-12 col-lg-3 ">
                    <label for="description" class="col-form-label">Descripción</label>
                </div>
                <div class="col-12 col-lg-9">
                    <textarea name="description" id="description" cols="30" rows="10" class="form-control" aria-describedby="passwordHelpInline"></textarea>
                </div>
           </div>
            <div class="row   align-items-center justify-content-center">
                <label class="custom-file-upload col-12 col-lg-8">
                    <iput type="file" id="imagen"> Subir Imagen</input>
                </label>
            </div>
            <div class="row  align-items-center justify-content-center">
                <label class="custom-file-upload col-12 col-lg-8">
                    <input type="submit" name="guardar" value="Guardar">  Guardar  </input>
                </label>
            </div>
        </form>
        `
    }
}