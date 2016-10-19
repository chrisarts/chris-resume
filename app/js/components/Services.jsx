import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import {
    ActionAndroid,
    ActionCode,
    FileCloudDone,
    ImageBrush,
    ActionShoppingCart,
    DeviceWidgets
} from'material-ui/svg-icons';

export default class Services extends React.Component{

    constructor(props){
        super(props);
        this.iconStyles = {
            margin: '0 15px',
            fontSize: 30,
            width: 50,
            height: 50
        };
    }

    render(){
        return(
            <section id="services">
                <h3>Servicios</h3>
                <div className="service">
                    <figure>
                        <ActionAndroid  style={this.iconStyles}/>
                        <SvgIcon style={this.iconStyles}>
                            <path fill="#455A64" d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                        </SvgIcon>
                    </figure>
                    <h4>Aplicaciones Moviles</h4>
                    <p>
                        Desarrollo de aplicaciones moviles con el uso de tecnología web Javascript con renderizados en HTML para producir entornos
                        con experiencias increibles de uso, las funcionalidades del equipo pueden ser emuladas de manera nativa usando tecnología de transpilación
                        para la generación de cada paquete según su respectiva tienda, optimizando el uso de la interfaz e interacción con los datos ya sean dentro de la
                        aplicación o en la nube usando API's.
                    </p>
                </div>
                <div className="service">
                    <figure>
                        <ActionCode  style={this.iconStyles}/>
                    </figure>
                    <h4>Desarrollo Web</h4>
                    <p>
                        Desarrollo de aplicaciones web con el uso de tecnologías recientes como Material Design (by Google)
                        ó Bootstrap, ambos combinados con un uso avanzado de CSS3 según el estandar establecido por la W3C;
                        combinado con un uso de las nuevas convenciones que se establecieron en versiones más recientes de
                        Javascript (ES5 y ES6), dadas estas condiciones decidí incursionar en el desarrollo web con el uso de
                        AngularJS y ReactJS.
                    </p>
                </div>
                <div className="service">
                    <figure>
                        <FileCloudDone  style={this.iconStyles}/>
                    </figure>
                    <h4>Cloud Computing</h4>
                    <p>
                        Gestión de servicios en la nube de acuerdo a el caso usando servicios en Amazon Web Services tales como EC2, S3, Elastic Beanstalk etc...
                        o gestión de proyectos desplegados en Openshift by Red Hat con el uso de Red Hat Cloud, eligiendo la arquitectura según los requerimientos
                        de la aplicación, motor ó entorno.
                    </p>
                </div>
                <div className="service">
                    <figure>
                        <ImageBrush  style={this.iconStyles}/>
                    </figure>
                    <h4>UI/UX Design</h4>
                    <p>
                        Diseño y desarrollo de interfaces amigables con el usuario, que efectuen la experiencia requerida según las especificaciones de la aplicación,
                        manejo de recursos y conceptos necesarios para el diseño de fascinantes interfaces de usuario y experiencias web ó moviles.
                    </p>
                </div>
                <div className="service">
                    <figure>
                        <ActionShoppingCart  style={this.iconStyles}/>
                    </figure>
                    <h4>E-commerce</h4>
                    <p>
                        Diseño y desarrollo de sitios web orientados a las ventas online, con manejo de alta seguridad para manejo de usuarios y prevención de fraudes,
                        manejo de pasarelas de pago de alto y bajo nivel con diseños orientados a el uso de API's de consulta precisos optimizando el proceso de navegación y
                        busqueda en estos mismos.
                    </p>
                </div>
                <div className="service">
                    <figure>
                        <DeviceWidgets  style={this.iconStyles}/>
                    </figure>
                    <h4>Automatización</h4>
                    <p>
                        Generación de procesos para independización de zonas de trabajo ó carga laboral, ya sea por medio de reportes, auditorias detalladas
                        ó inspección de uso por medio de ClickMapping o HotMapping en las páginas web.
                    </p>
                </div>
                <div className="spacer" style={ {clear: 'both'} }></div>
            </section>
        )
    }
}