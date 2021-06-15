import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';

export default class Best extends React.Component{
    render(){
        return(
            <View>
                <ImageBackground
                source={require('../images/lr.png')} style={{
                    height:130,
                    width:230,
                    marginRight:20,
                    borderRadius:10,
                    marginBottom:40,
                    opacity:0.7,
                    backgroundColor:"#000",
                    marginLeft:3,
                    padding:12,
                    marginTop:20
                }}>
                    <Text style={{
                        fontWeight:"bold",
                        color:"#FFF",
                        fontSize:18
                    }}>
                        Zara Farniture World
                        </Text>
                        <Text style={{
                            fontWeight:"bold",
                            color:"#FFF",
                            fontSize:15,
                            marginLeft:60
                    }}>
                        Get 25% OFF
                        </Text>
                </ImageBackground>
            </View>
        );
    }
}