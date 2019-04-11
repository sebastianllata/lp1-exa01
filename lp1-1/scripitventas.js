var tabla = document.getElementById("contenido_tabla");
var fila = 0;
var columna = 0;
var op = false;
var st=0; 

function obtenervalores() {
    
    
    var tiket= document.getElementById("tiket").value;
    var mesa = document.getElementById("mesa").value;
    var cliente= document.getElementById("cliente").value;
    var dni = document.getElementById("dni").value;
    var producto = document.getElementById("producto").value;
    var precio = document.getElementById("precio").value;
    var cantidad = document.getElementById("cantidad").value;






    alert(mesa + " " + precio + " " + cantidad+""+tiket+""+cliente+""+dni+""+producto+"");

    if (precio == "" & cantidad == "" || precio == "" || cantidad == "") {
        alert("Complete todos los campos porfavor");
        
    } else {
        if (!/^([0-9])*$/.test(cantidad)) {
            swal("Houston tenemos un problema", "La cantidad no puede ser decimal", "warning");
        } else {
            if (comprobar(mesa)) {
                
                var uf = tabla.rows[fila].cells;
                   
                var acciones = "<a href='#' onclick='editar(this)'><i style='color:green'   class='fas fa-edit'></i></a><a href='#' onclick='eliminar(this)'><i style='color:red'   class='far fa-trash-alt'></i></a>";
                
                
                
                var hsjs=tabla.rows[fila].cells[3].innerHTML;
                //alert(hsjs);
                //alert(st);        
                var yyy=st-hsjs;           
                //alert("Ahora el nuevo st= "+yyy);
                var holi=yyy;
                //alert("El valor de holi es:"+holi)
                st=holi;
                      
                
                uf[0].innerHTML = tiket;
                uf[1].innerHTML = mesa;
                uf[2].innerHTML = cliente;
                uf[3].innerHTML = dni;

                uf[4].innerHTML = producto;
                uf[5].innerHTML = precio;
                uf[6].innerHTML = cantidad;
                uf[7].innerHTML = p;

                

                //uf[3].innerHTML = precio * cantidad;
                //uf[4].innerHTML = acciones; 
                
               var jkfghdg=st+(precio*cantidad);

              
               st=jkfghdg;    
               
      
               document.getElementById("totalindex").value = st;      
                document.getElementById("precio").value = "";
                document.getElementById("cantidad").value = "";

                op = false;
                
                alert("Registro Exitoso");

            } else {
                var nuevafila = tabla.insertRow(tabla.rows.length);
                
                var celda1 = nuevafila.insertCell(0);
                var celda2 = nuevafila.insertCell(1);
                var celda3 = nuevafila.insertCell(2);
                var celda4 = nuevafila.insertCell(3);
                var celda5 = nuevafila.insertCell(4);
                /*var celda6 = nuevafila.insertCell(5);
                var celda7 = nuevafila.insertCell(6);
                var celda8 = nuevafila.insertCell(7);
                var celda9 = nuevafila.insertCell(8);
                var celda10 = nuevafila.insertCell(9);*/



                

                var acciones = "<a href='#' onclick='editar(this)'><i style='color:blue'  class='fas fa-edit'></i></a><a href='#' onclick='eliminar(this)'><i style='color:black'  class='fas fa-trash-alt'></i></a>";

                celda1.innerHTML = tiket;
                celda2.innerHTML = mesa;
                celda3.innerHTML = cliente;
                celda4.innerHTML = dni;
                celda5.innerHTML = acciones;

                /*celda5.innerHTML = plato;
                celda6.innerHTML = cantidad;
                celda7.innerHTML = precio;
                celda8.innerHTML =p;*/

                var p=precio*cantidad;
                calcularsubtotal(p);
                

                // limpiar inputs
                document.getElementById("precio").value = "";
                document.getElementById("cantidad").value = "";


                alert("registro exitoso");  
                



            }

        }
    }

}

function comprobar(nombre_producto) {
    
    for (var i = 0; i < tabla.rows.length; i++) {
        if (tabla.rows[i].cells[0].innerHTML == nombre_producto) {
            //alert("La fila es: " + i);
            //alert(tabla.rows[i].cells[0].innerHTML);
            op = true;      
            fila = i;
            columna = 1;
        }
    }
    return op;
}
    

function editar(e) {
    //alert("editar siiiiii");
    //alert(e);         
    var j = e.parentNode.parentNode.rowIndex;    
    //alert(j);
    var c0=tabla.rows[j].cells[0].innerHTML;
    var c1=tabla.rows[j].cells[1].innerHTML;  
    var c2=tabla.rows[j].cells[2].innerHTML;  
    var c3=tabla.rows[j].cells[3].innerHTML;
    //alert(c0)
    //alert(c1)
    //alert(c2)
    //alert(c3)
     
    document.getElementById("producto").value=c0;
    document.getElementById("precio").value=c1;    
    document.getElementById("cantidad").value=c2;             
           
}        

function eliminar(e) {
    //alert("eliminar siiiiii");
    //alert(e);                                  
    var j = e.parentNode.parentNode.rowIndex;    
    //alert(j);
    var c33=tabla.rows[j].cells[3].innerHTML;
    //alert(c3);  
    var dd=st-c33;  
    //alert("El nuevo total restado  es: "+dd);
    var nuevost=dd;
    //alert("El nuevo st es: "+nuevost);
    st=nuevost;            
    //alert("ST= "+st);         
    document.getElementById("totalindex").value=st;    
    document.getElementById("contenido_tabla").deleteRow(j);
        
}



function calcularsubtotal(a){
    st=st+a;
    //alert(a);      
    document.getElementById("totalindex").value=st;  
}