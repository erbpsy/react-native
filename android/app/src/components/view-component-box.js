import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
class ViewComponentBox extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.customStyle}>this is from box component view</Text>
                    <View style={styles.redBox}></View>
                    <View style={styles.greenBox}></View>
                    <View style={styles.blueBox}></View>
            </View>
            
);
    }
}
const styles=StyleSheet.create({
customStyle:{
    color:'orange',
    fontSize:40,
    textAlign:'center'
},
redBox:{
    color:'#fff',
    width:150,
    height:150,
    backgroundColor:'red',
    fontSize:20,
    borderRadius:10,
    textAlign:'center',
    marginLeft:10
},
greenBox:{
    color:'#fff',
    width:150,
    height:150,
    backgroundColor:'green',
    fontSize:20,
    borderRadius:10,
    textAlign:'center',
    marginLeft:10
},
blueBox:{
    color:'#fff',
    width:150,
    height:150,
    backgroundColor:'blue',
    fontSize:20,
    borderRadius:10,
    textAlign:'center',
    marginLeft:10
},
container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: 'grey',
    height: 600
 },
})
export default ViewComponentBox