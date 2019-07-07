import React, {Component} from "react";

class ListadoElementos extends Component{

    clickLibro=(item)=>{
        const{agregarAlCarrito}=this.props
        console.log('haciendo click en el libro..',item)

        agregarAlCarrito(item);
      
    }
    render(){
        const{libros}=this.props
        return(
            <div>
               
                 <div>
                     {libros.map((item,index)=>{

                         return(
                             <div onClick={()=>{this.clickLibro(item)}} key={index}>
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