import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {
    CommunicationPhone,
    CommunicationContactMail,
    MapsMyLocation,
    ContentSend
} from'material-ui/svg-icons';

export default class Contact extends React.Component{

    constructor(props){
        super(props);
        this.iconStyle = {
            width: '30',
            height: '30'
        }
    }

    render(){
        return(
            <section id="contact">
                <h3>Contácto</h3>
                <div id="contact-container">
                    <div className="left">
                        <ul>
                            <li>
                                <figure>
                                    <CommunicationPhone
                                        style={this.iconStyle}
                                    />
                                </figure>
                                <span>(+57) 317-292-9225</span>
                            </li>
                            <li>
                                <figure>
                                    <CommunicationContactMail
                                        style={this.iconStyle}
                                    />
                                </figure>
                                <span>chrisarts.net@gmail.com</span>
                            </li>
                            <li>
                                <figure>
                                    <MapsMyLocation
                                        style={this.iconStyle}
                                    />
                                </figure>
                                <span>Cali, Colombia</span>
                            </li>
                        </ul>
                    </div>
                    <div className="right">
                        <TextField
                            floatingLabelText="Nombre"
                            fullWidth={true}
                        />
                        <TextField
                            floatingLabelText="Asunto"
                            fullWidth={true}
                        />
                        <TextField
                            floatingLabelText="Email"
                            fullWidth={true}
                        />
                        <TextField
                            floatingLabelText="Mensaje"
                            fullWidth={true}
                        />
                        <RaisedButton
                            label="Enviar"
                            labelPosition="before"
                            primary={true}
                            backgroundColor="#a4c639"
                            icon={<ContentSend />}
                        />
                    </div>
                </div>
                <div className="spacer" style={ {clear: 'both'} }></div>
            </section>
        )
    }
}