class Tabla{

    static CrearTabla(idTabla, cabeceraParams) {
        var tabla = document.getElementById(idTabla);
    
        if (tabla === null)
        {
            tabla = document.createElement("table");
            tabla.setAttribute("id", idTabla);
            tabla.setAttribute("class", "Tabla");
            let container = document.getElementById("id_div_tabla");
            container.appendChild(tabla);
            let cabecera = Tabla.CrearCabeceraTabla(cabeceraParams);
            tabla.appendChild(cabecera);
            let tbody = document.createElement("tbody");
            tbody.setAttribute("id", "id_tbody");
            tabla.appendChild(tbody);
        }
        return tabla;
    }
    
    static CrearCabeceraTabla(cabeceraData) {
        let fila = document.createElement("tr");
        for(let i = 0; i<cabeceraData.length;i++)
        {
            let col = document.createElement("th");
            let lbl = document.createTextNode(cabeceraData[i]);
            col.appendChild(lbl);
            fila.appendChild(col); 
        }
    
        return fila;
    }
    
    static AgregarFila(cliente) {
        var idTabla = "id_tabla"
        var tabla = document.getElementById(idTabla);
        
    
        if (tabla == null)
        {
            tabla = Tabla.CrearTabla(idTabla, cabeceraParams);
        }
    
        if (cliente != null)
        {
            var tbody = document.getElementById("id_tbody");
            var fila = document.createElement("tr");
            fila.setAttribute("id", "id_fila" + cliente.id);
            fila.setAttribute("name", "name_fila"+ cliente.id);
            var cols = [cliente.id, cliente.nombre, cliente.apellido, cliente.sexo, cliente.edad];
            cols.forEach(element =>
            {
                var col = document.createElement("td");
                var lbl = document.createTextNode(element);
                col.appendChild(lbl);
                fila.appendChild(col);
            })
    
            fila.addEventListener("click", (e)=>{
                Cliente.CargarFormConCliente(cliente)});
    
                tbody.appendChild(fila);
        }
        return fila;
    }

    static EliminarElementosLista(){

        var tabla = document.getElementById("id_tbody");
        var children = tabla.children; 

        while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
      }
    }

}   