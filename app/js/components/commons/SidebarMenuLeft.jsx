import ScrollAnim from 'rc-scroll-anim';
var Link = ScrollAnim.Link;
import React from 'react';
import Drawer from 'material-ui/Drawer';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {
    MapsPersonPin,
    SocialPoll,
    ActionCode,
    HardwareDeveloperBoard,
    CommunicationPhone
} from 'material-ui/svg-icons';

export default class SidebarMenuLeft extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isOpen: true
        }
    }

    render(){
        return (
            <Drawer open={this.state.isOpen} width={360}>
                <List>
                    <Subheader>Menú</Subheader>
                    <Link location="header">
                        <ListItem
                            primaryText="Sobre mí"
                            leftAvatar={<Avatar icon={<MapsPersonPin />} />}
                        />
                    </Link>
                    <Link location="experience">
                        <ListItem
                            primaryText="Experiencia"
                            leftAvatar={<Avatar icon={<ActionCode />} />}
                        />
                    </Link>
                    <Link location="skills">
                        <ListItem
                            primaryText="Habilidades"
                            leftAvatar={<Avatar icon={<SocialPoll />} />}
                        />
                    </Link>
                    <Link location="services">
                        <ListItem
                            primaryText="Servicios"
                            leftAvatar={<Avatar icon={<HardwareDeveloperBoard />} />}
                        />
                    </Link>
                    <Link location="contact">
                        <ListItem
                            primaryText="Contacto"
                            leftAvatar={<Avatar icon={<CommunicationPhone />} />}
                        />
                    </Link>
                </List>
            </Drawer>
        );
    }
}