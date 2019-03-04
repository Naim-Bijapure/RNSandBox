import React, { Component } from 'react'
import {View,Text,Share} from 'react-native'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import {Icon,Button} from 'native-base'
export default class MyDotMenu extends Component {
   
    _menu = null;

    setMenuRef = ref => {
      this._menu = ref;
    };
  
    hideMenu = () => {
      this._menu.hide();
    };
  
    showMenu = () => {
      this._menu.show();
    };
   
  async onShare(){
        try {
          const result = await Share.share({
            message:
              'React Native | A framework for building native apps using React',
            title:'cool man',
            url:'www.google.com'
            })
    
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };

    render(){
      
        return (
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
            <Button onPress={this.showMenu}>
                <Icon name="more" />
            </Button>

              <Menu
                ref={this.setMenuRef}
                button={<Text onPress={this.showMenu}  >N </Text>}
                >
                
                <MenuItem onPress={this.onShare}>Share</MenuItem>
                <MenuItem onPress={this.hideMenu}>Menu item 2</MenuItem>
                <MenuItem onPress={this.hideMenu} disabled>
                  Menu item 3
                </MenuItem>
                <MenuDivider />
                <MenuItem onPress={this.hideMenu}>Menu item 4</MenuItem>
              </Menu>
            </View>
          );

        }
}