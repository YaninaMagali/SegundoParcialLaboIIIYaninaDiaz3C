class Cliente extends Persona{
    sexo;
    edad;

    constructor(id, nombre, apellido, sexo, edad) {
        super(id, nombre, apellido)
        this.sexo = sexo;
        this.edad = edad;
      }


      static CargarTablaClientes(clientes){

        clientes.forEach(e => {
        clientesGlobal.push(e);
        Tabla.AgregarFila(e);
        })
      }

      static FiltrarPorSexo(exito, error) {
      
        var filtrado = [];
        var sexoSeleccionado = document.getElementById("id_select_sexo").value;
        filtrado = clientesGlobal.filter(cli => cli.sexo == sexoSeleccionado);
        if(typeof filtrado !== 'undefined' && filtrado.length > 0)
        {
          Tabla.EliminarElementosLista();
          exito(filtrado)
        }
        else{
          error(false)
        }        
      }

      static AgregarCliente(){

        var nuevoCli = GetDataDelForm();
        Tabla.AgregarFila(nuevoCli);
      }

      static CalcularIdCliente(){

        var id = clientesGlobal.reduce((max, cliente) => 
        {
          if(max < cliente.id){
            max = cliente.id + 1;
          }
          return max;
        } , 0 )
        return id;
      }

      static CargarFormConCliente(cliente){

        if(cliente != null){
          document.getElementById("id_input_id").value = cliente.id;
          document.getElementById("id_nombre").value = cliente.nombre;
          document.getElementById("id_apellido").value = cliente.apellido;
          document.getElementById("id_sexo").value = cliente.sexo;
          document.getElementById("id_edad").value = cliente.edad;
        }
      }

      static EliminarCliente(id){
        
        id = document.getElementById("id_input_id").value;
        var filaActual = document.getElementById("id_fila"+id);
      
        if (filaActual.parentNode) {
            filaActual.parentNode.removeChild(filaActual);
            }
      }
      
}
