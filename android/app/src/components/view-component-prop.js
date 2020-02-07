import React from 'react'
import {View,Text,StyleSheet} from 'react-native'


const ViewComponentProp=(props)=>{
return(
    <View>
        <Text style={styleNow.colorSet}>===========this os from props view===============</Text>
        <Text style={styleNow.colorSet} onPress={props.updateStateNew}>

            {props.currentState}
            
            Have  a look, it is working now-------
        </Text>
    </View>
)
}
const styleNow=StyleSheet.create({
    colorSet:{
        color:'red',
        fontSize:25,
        fontFamily:"arial",
        marginTop:20,
        fontWeight:"bold",
        textAlign:"center"
    }
    
    })
export default ViewComponentProp;
