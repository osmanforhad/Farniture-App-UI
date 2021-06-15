import React from 'react';
import {View, Text, Image} from 'react-native';

export default class New extends React.Component{
    render(){
        return(
            <View style={{
                flexDirection:"row",
                height:60,
                width:240,
                backgroundColor:"#fff",
                elevation:2,
                padding:6,
                marginVertical:5,
                marginRight:20,
                marginLeft:2,
                borderRadius:10
            }}>
                <View>
                <Image
                source={this.props.src}
                style={{
                    height:50,
                    width:60,
                    borderRadius:10
                }}/>
                </View>
                <View style={{
                    width:"65%",
                    height:"100%",
                    justifyContent:"flex-end",
                    paddingHorizontal:10
                }}>
                    <Text style={{
                        fontSize:11,
                        fontWeight:"bold"
                    }}>
                       Slakal sleeves short dress with three attractive colors
                        </Text>
                        <Text style={{
                            fontSize:15,
                            fontWeight:"bold"
                        }}>
                            454.69 USD
                        </Text>
                </View>
                <View style={{
                    width:"5%",
                    height:"100%",
                    justifyContent:"flex-end"
                }}>
                    <Image source={require('../images/add.png')} style={{
                        height:25,
                        width:25
                    }}/>
                </View>
            </View>
        );
    }
}