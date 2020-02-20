import React from 'react';
import { Menu, Dropdown, Button, Icon} from 'antd';

class Drop extends React.Component {

    state = {
        type: null,
    };

    sendData1 = () => {
        console.log("sendData1")
        this.props.parentCallback(this.state.type);
      }


    handleButtonClick = (e) => {
        console.log('click left button', e);
    }

    handleMenuClick = (e) => {
        console.log('click', e.key);
        if (e.key == 1) {
            this.state.type = 'Receiving'
        }
        else if (e.key == 2) {
            this.state.type = 'delete'
        }
        else if (e.key == 3) {
            this.state.type = 'Access'
        }
        else if (e.key == 4) {
            this.state.type = 'Received'
        }
        else if (e.key == 5) {
            this.state.type = 'replicate'
        }
        else if (e.key == 6) {
            this.state.type = 'Served'
        }
        this.sendData1()
    }



    render() {
        const menu = (
            <Menu onClick={this.handleMenuClick}>
            <Menu.Item key="1">
                Receiving
            </Menu.Item>
            <Menu.Item key="2">
                delete
            </Menu.Item>
            <Menu.Item key="3">
                Access
            </Menu.Item>
            <Menu.Item key="4">
                Received
            </Menu.Item>
            <Menu.Item key="5">
                replicate
            </Menu.Item>
            <Menu.Item key="6">
                Served
            </Menu.Item>
            </Menu>
        );
        return (
            <div id="components-dropdown-demo-dropdown-button">
                <Dropdown overlay={menu}>
                <Button>
                    Type <Icon type="down" />
                </Button>
                </Dropdown>
            </div>
        );//,
    //mountNode,
    }
}

export default Drop;