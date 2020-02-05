import React from 'react'
import {View,Text} from 'react-native'


const ViewComponentProp=(props)=>{
return(
    <View>
        <Text>===========this os from props view===============</Text>
        <Text onPress={props.updateStateNew}>

            {props.currentState}
            Have  a look, it is working now-------
        </Text>
    </View>
)
}
export default ViewComponentProp;