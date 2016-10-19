import React from 'react';
import Drawer from 'material-ui/Drawer';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {
    MapsPersonPin,
    HardwareKeyboardArrowRight,
    SocialSchool,
    SocialPoll,
    ActionCode,
    HardwareDeveloperBoard,
    ActionWork,
    EditorAttachMoney,
    AlertError,
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
                    <ListItem
                        primaryText="About me"
                        leftAvatar={<Avatar icon={<MapsPersonPin />} />}
                        secondaryText="Do you want to know about me? Ö"
                    />
                    <ListItem
                        primaryText="Experience"
                        leftAvatar={<Avatar icon={<ActionCode />} />}
                        secondaryText="Hard work experience along the time"
                    />
                    <ListItem
                        primaryText="Skills"
                        leftAvatar={<Avatar icon={<SocialPoll />} />}
                        secondaryText="My general abilities"
                    />
                    <ListItem
                        primaryText="Education"
                        leftAvatar={<Avatar icon={<SocialSchool />} />}
                        secondaryText="My educational trajectory"
                    />
                    <ListItem
                        primaryText="Services"
                        leftAvatar={<Avatar icon={<HardwareDeveloperBoard />} />}
                        secondaryText="My currently services to offer"
                    />
                    <ListItem
                        primaryText="Portafolio"
                        leftAvatar={<Avatar icon={<ActionWork />} />}
                        secondaryText="This is my previous work"
                    />
                    <ListItem
                        primaryText="Pricing"
                        leftAvatar={<Avatar icon={<EditorAttachMoney />} />}
                        secondaryText="Wanna contract me? :D"
                    />
                    <ListItem
                        primaryText="Interest"
                        leftAvatar={<Avatar icon={<AlertError />} />}
                        secondaryText="This is what I do in my free time"
                    />
                    <ListItem
                        primaryText="Contact"
                        leftAvatar={<Avatar icon={<CommunicationPhone />} />}
                        secondaryText="Call me ;)"
                    />
                </List>
            </Drawer>
        );
    }
}