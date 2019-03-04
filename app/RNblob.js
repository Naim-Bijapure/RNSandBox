import React, { Component } from 'react';
import { View,Text,Button } from "react-native";
import RNFetchBlob from 'rn-fetch-blob'
const { fs, fetch, wrap } = RNFetchBlob
class RNblob extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <View>
            <Text>Working</Text>
            <Button title="click me"  onPress={this.clickIt}/> 
        </View> );
    }

    clickIt=()=>{
        // alert(fs.dirs.MainBundleDir);
       fs.asset('N.txt');
       fs.readStream(fs.asset('N.txt'))
       .then((stream) => {
        let data = ''
        stream.open()
        stream.onData((chunk) => {
            data += chunk
        })
        stream.onEnd(() => {
            alert(data);
        })
    })
    }
}
 
export default RNblob;