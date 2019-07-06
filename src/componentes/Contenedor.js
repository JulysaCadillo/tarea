import React,{Component} from "react";
import ListadoElementos from "./ListadoElementos"

const arregloLibros=[
    {id:1, nombre:"Accidental Empires",autor:"Maria cardenas",precio:24 },
    {id:2, nombre:"The Search",autor:"Joel Flores",precio:20 },
    {id:3, nombre:"Start- Up",autor:"Ana Carrasco",precio:15 },
    {id:4, nombre:"El Libro del Hacker",autor:"Jose Lopez",precio:26},
    {id:5, nombre:"La guia Completa",autor:"Garay",precio:30},
    {id:6, nombre:"El Libro del Programador",autor:"Luis gutierrez",precio:12},
    {id:7, nombre:"Tecnologia",autor:"Fernando Pardo",precio:19},
    {id:8, nombre:"Rendimiento de Software",autor:"Alejandro Huamani",precio:18},
    {id:9, nombre:"Curso de Oracle",autor:"Israel Mejia",precio:25},
    {id:10, nombre:"Internet Segura",autor:"Jose Angel Fernandez",precio:17},
    {id:11, nombre:"Algoritmos",autor:"Aditya Bhargava",precio:19},
]

class Contenedor extends Component{

    constructor(){
        super()
        this.state={
            listaLibros:arregloLibros
        }
    }
    escribiendo=(evento)=>{
       // console.log("escribiendo",evento.target.value)
        const texto=evento.target.value;
        this.filtrar(texto)
    }

    filtrar=(texto)=>{
        const listadoFiltrado=[];
       for(let i=0;i<arregloLibros.length;i++){
           const libros=arregloLibros[i];
           if(libros.nombre.startsWith(texto)){
               listadoFiltrado.push(libros);
           }
       }
       this.setState({listaLibros:listadoFiltrado})
    }
    render(){

        const{listaLibros}=this.state
        return(
            <div>
                Buscador web
            
              <div>
                <div><input  onChange={this.escribiendo}/></div>

                <ListadoElementos libros={listaLibros} />
              </div>
           </div>

        )
    }
}

export default Contenedor