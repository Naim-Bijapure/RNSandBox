import React, { Component } from 'react'
import {Text,View,Button} from 'react-native'
import RNChirpReactNative, {ChirpEvent} from 'chirp-react-native';

 RNChirpReactNative.init("F3EE5544a3f31b0A85fBb0074", "c86185dfe61bF2322adB1779F92aedD5e812dbfE9B0bb86C1b");
export default class MyChirp extends Component {

    render(){
       return (
            <View>
            <Text>Yo this is Chirp </Text>
            <Button title="click send" onPress={this.Send.bind(this)}/>

            <Button title="click listen" onPress={this.Recive.bind(this)}/>
            </View>
        )

    }

    async Send(){
        alert('runniing');
        try {
            RNChirpReactNative.start();
            // RNChirpReactNative.sendRandom();
            RNChirpReactNative.send([172, 47, 117, 192]);
            
        } catch (error) {
            alert(error);            
        }
        
    }
    async Recive(){
        try {
            
       const listen=      await RNChirpReactNative.getLicense();
       const listener = RNChirpReactNative.on(ChirpEvent.onReceived, (data) => {
        //Use the data received
        alert(data);
    })
        } catch (error) {
             alert(error);            
        }

    }
}