import React, {Component} from "react";

class ListadoElementos extends Component{
    render(){
        const{libros}=this.props
        return(
            <div>
                 <div>Libros de Informatica</div>
                 <div>
                     {libros.map((item)=>{

                         return(
                             <div key={item.id}>
                                 {item.nombre}
                                 </div>

                         )
                     })}
                 </div>
            </div>
            )
        }
   
}

export default ListadoElementos