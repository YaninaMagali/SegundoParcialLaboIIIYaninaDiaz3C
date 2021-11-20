const clientesGlobal = [];
var filtrado = [];
const cabeceraParams = ["Id" ,"Nombre", "Apellido", "Sexo", "Edad"];

async function getMaterias(funcionExito, funcionError){

    try{
        var response = await fetch("http://localhost:3001/clientes", 
        {method: 'GET', headers:{'Content-type': 'application/json'}});
        response.json().then(Cliente.CargarTablaClientes).catch(funcionError);
    }
    catch(e){
        console.log("Error: ");
    }
}

function MostrarPromedioEdadClientesPantalla(promedio){

    var p = document.getElementById("id_input_promedio");
    p.value = promedio;
}

function funcionError() {
    console.log("Se ejecuta la funcionError() ");
}

function GetDataDelForm(){

    var id = document.getElementById("id_input_id").value;
    var nombre = document.getElementById("id_nombre").value;
    var apellido  = document.getElementById("id_apellido").value;
    var sexo = document.getElementById("id_sexo").value;
    var edad = document.getElementById("id_edad").value;

    console.log(id);
    if(id != " "){
        id = Cliente.CalcularIdCliente();
    }
    return new Cliente(id, nombre, apellido, sexo, edad);
}

function FiltrarSexoPromise(){
    promise = new Promise(Cliente.FiltrarPorSexo);
    promise.then(Cliente.CargarTablaClientes).catch(funcionError);
}

function PromedioPromise(){
    promise = new Promise(Cliente.CalcularPromedioEdad);
    promise.then(MostrarPromedioEdadClientesPantalla).catch(funcionError);
}

window.addEventListener("load", function () {
    this.getMaterias();
    
    var sexo = document.getElementById("id_select_sexo");
    sexo.addEventListener("change", (e)=>{
        this.FiltrarSexoPromise();
  });

  var addBtn = document.getElementById("btn_add");
  addBtn.addEventListener("click", (e)=>{
      Cliente.AgregarCliente();
  });

  var delBtn = document.getElementById("btn_delete");
  delBtn.addEventListener("click", (e)=>{
      Cliente.EliminarCliente();
  });

  var delBtn = document.getElementById("btn_clean");
  delBtn.addEventListener("click", (e)=>{
      Tabla.EliminarElementosLista();
  });

  var PromedioBtn = document.getElementById("btn_promedio");
  PromedioBtn.addEventListener("click", (e)=>{
      this.PromedioPromise();
  });
});
