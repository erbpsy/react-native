import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
class ViewComponentList extends React.Component{
render(){
    return(
        <View>
            <Text style={styles.listStyle}>
                this is from list component
            </Text>
        </View>

    )
}
}
const styles=StyleSheet.create({
listStyle:{
    color:'red',
    fontSize:14
}

})