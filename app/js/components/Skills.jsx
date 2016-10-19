import React from 'react';
import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class SliderComponent extends React.Component{

    constructor(props){
        super(props);
        this.styles = {
            slider: getMuiTheme({
                slider: {
                    trackColor: '#FFF',
                    handleColorZero: '#000',
                    handleSizeDisabled: 15,
                    marginTop: 10
                },
            }),
            sliderMaster: {
                marginTop: '10px',
                marginBottom: 25
            }
        }
    }

    render(){
        return(
            <li>
                <strong>{this.props.text} <span>{this.props.value}%</span></strong>
                <MuiThemeProvider muiTheme={this.styles.slider}>
                    <Slider
                        min={0}
                        max={100}
                        step={1}
                        value={parseInt(this.props.value)}
                        disabled={true}
                        sliderStyle={this.styles.sliderMaster}
                    />
                </MuiThemeProvider>
            </li>
        )
    }
}

export default class Skills extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <section id="skills">
                <h3>Habilidades</h3>
                <div id="skills-container">
                    <div className="skill">
                        <h4>Profesionales</h4>
                        <ul>
                            <SliderComponent text="UI/UX Design" value="90" />
                            <SliderComponent text="Javascript (ReactJS & AngularJS)" value="95" />
                            <SliderComponent text="PHP Web Applications (Laravel)" value="80" />
                            <SliderComponent text="NodeJS (Meteor & Express)" value="70" />
                            <SliderComponent text="Android Development (ionic & Cordova)" value="60" />
                        </ul>
                    </div>
                    <div className="skill">
                        <h4>Personales</h4>
                        <ul>
                            <SliderComponent text="Compromiso" value="90" />
                            <SliderComponent text="Puntualidad" value="80" />
                            <SliderComponent text="Liderazgo" value="70" />
                            <SliderComponent text="Comunicación" value="70" />
                            <SliderComponent text="Analisis" value="90" />
                        </ul>
                    </div>
                    <div className="skill">
                        <h4>Idiomas</h4>
                        <ul>
                            <SliderComponent text="Español (Nativo)" value="100" />
                            <SliderComponent text="Inglés" value="80" />
                            <SliderComponent text="Francés" value="40" />
                            <SliderComponent text="Portugues" value="40" />
                        </ul>
                    </div>
                </div>
                <div className="spacer" style={ {clear: 'both'} }></div>
            </section>
        )
    }
}