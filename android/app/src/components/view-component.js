import React from 'react'
import {StyleSheet,Text,View} from 'react-native'
export default class Viewcomponent extends React.Component{

        constructor(){
            super()

        }
        render(){
            return(
                    <View>
                        <Text>-----------from normal view component----------------</Text>
                        <Text>this is from view component</Text>
                    </View>
            )
        }

}