import ScrollAnim from 'rc-scroll-anim';
var ScrollOverPack = ScrollAnim.OverPack;
var Element = ScrollAnim.Element;
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
                    <div id="container">
                        <ScrollOverPack>
                            <SidebarMenuLeft/>
                            <Element scrollName="header">
                                <Header scrollName="header"/>
                            </Element>
                            <Element scrollName="about">
                                <About/>
                            </Element>
                            <Element scrollName="experience">
                                <Experience scrollName="experience"/>
                            </Element>
                            <Element scrollName="skills">
                                <Skills scrollName="skills"/>
                            </Element>
                            <Element scrollName="services">
                                <Services scrollName="services"/>
                            </Element>
                            <Element scrollName="contact">
                                <Contact scrollName="contact"/>
                            </Element>
                        </ScrollOverPack>
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