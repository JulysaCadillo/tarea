import React, {Component} from "react";

class ListadoElementos extends Component{

    clickLibro=(item)=>{
        const{agregarAlCarrito}=this.props
        console.log('haciendo click en el libro..',item)

        if(typeof agregarAlCarrito==='function'){
            agregarAlCarrito(item);  
        }

       
      
    }
    render(){
        const{libros}=this.props
        return(
            <div>
               
                 <div>
                     {libros.map((item,index)=>{

                         return(
                             <div onClick={()=>{this.clickLibro(item)}} key={index}>
                                 {item.nombre} - {item.precio}
                                 </div>

                         )
                     })}
                 </div>
            </div>
            )
        }
   
}

export default ListadoElementos