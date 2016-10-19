import React from 'react';
import ReactDom from 'react-dom';
//Material Imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//Include Components
import Header from './components/commons/Header';
import SidebarMenuLeft from './components/commons/SidebarMenuLeft';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
//Include Flexbox
import 'flexboxgrid/css/flexboxgrid.min.css';
//Include personal files
import '../css/layout.styl';

//Components
//import HomeComponent from './components/HomeComponent';
//Compatibility
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


class Resume extends React.Component{

    render(){
        return (
            <MuiThemeProvider>
                <div>
                    <SidebarMenuLeft/>
                    <div id="container">
                        <Header/>
                        <About/>
                        <Experience/>
                        <Skills/>
                        <Services/>
                        <Contact/>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

ReactDom.render(
    <Resume />,
    document.getElementById('resume')
);