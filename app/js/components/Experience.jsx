import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import Subheader from 'material-ui/Subheader';



export default class Experience extends React.Component{

    constructor(props){
        super(props);
        this.styles = {
            subheader: {
                lineHeight: '30px',
                border: 1
            },
            toolbar: {
            }
        }
    }

    render(){
        return(
            <section id="experience">
                <h3>EXPERIENCIA</h3>
                <div id="timeline">
                    <div className="item-experience">
                        <Toolbar className="toolbar">
                            <ToolbarGroup>
                                <ToolbarTitle color="white" text="Diseñador & Desarrollador web" />
                            </ToolbarGroup>
                        </Toolbar>
                        <Subheader>
                            Entualmacen.com - go.entualmacen.com - Junio 2013 - Junio 2014
                        </Subheader>
                        <p>
                            Encargado del desarrollo de la plataforma entualmacen.com, en la que se deseaba tener un sitio web capaz de
                            sostener varias tiendas multimarca usando subdominos como aliases de conexión a las mismas, en el transcurso del mismo,
                            se desarrollo un API de servicios para crear sitios web externos a la página que continuasen usando el motor interno de datos.
                        </p>
                        <Subheader>
                            Tecnologías usadas: HTML5, CSS3, PHP5, MySQL, AnguarJS
                        </Subheader>
                    </div>
                    <div className="item-experience">
                        <Toolbar className="toolbar">
                            <ToolbarGroup>
                                <ToolbarTitle text="Diseñador & Desarrollador web" />
                            </ToolbarGroup>
                        </Toolbar>
                        <Subheader>
                            Comunicación Efectiva SAS  - Junio 2014 - Julio 2016
                        </Subheader>
                        <p>
                            Encargado del mantenimiento de varios sitios web a lo largo de la trayectoria en esta compañía, tales como Revista Salud Coomeva,
                            Directorio Medicina Prepagada Coomeva, Radio Coomeva, Radio Coomeva TV, videojuegos varios.
                            Durante mi estancia tuve que autimatizar varios procesos internos para requerir la menor cantidad de tiempo en los mantenimientos
                            además de mejorar los servicios de entrega de contenidos multimediales centrados en el proyecto Radio Coomeva, para el que se
                            desarrolló una infraestructura en AWS (Amazon Web Services) capaz de distribuir contenido en streaming de audio y posteriormente
                            en transmisión en vivo con el uso de TriCaster, además de una aplicación móvil para la entrega del contenido para iOS y Android.
                        </p>
                        <Subheader>
                            Tecnologías usadas: HTML5, CSS3, PHP5, MySQL, AnguarJS, NodeJS, MongoDB, icecast2, ionic, CloudComputing (AWS & Openshift)
                        </Subheader>
                    </div>
                </div>
            </section>
        )
    }
}