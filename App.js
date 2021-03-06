import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import Viewcomponent from './android/app/src/components/view-component'
import ViewComponentProp from './android/app/src/components/view-component-prop'
import ViewComponentBox from './android/app/src/components/view-component-box'
import ViewComponentList from './android/app/src/components/view-component-list'
export default class App extends React.Component{

constructor(){
  super()
  this.updateStateNew=this.updateStateNew.bind(this)
  this.showBoxesNow=this.showBoxesNow.bind(this)
  this.showListNow=thisshowListNow.bind(this)
}


  state={
    currentState:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum. `,
    renderPropComponent:false,
    renderBox:false,
    renderList:false
  }

showBoxesNow(){
  this.setState({
    renderBox:!this.state.renderBox
  })
}

  updateStateNew(){
    this.setState({
      renderPropComponent:true,
      //renderBox:true,
      currentState :"updated New!!!"
    })
  }


  showListNow(){
    this.setState({
          renderList=this.state.renderList
    })
  }

updateState=()=>this.setState({
                                currentState : `Hello, this is from first demo, Hello World!!!
                              Value is updated now.............`,
                              renderPropComponent:true,
                              //renderBox:true

                              })

  render(){
          return(
              <View>
                <Text style={styleNow.button} onPress={this.showListNow}> click to see list</Text>
                <Text style={styleNow.button} onPress={this.showBoxesNow}>click to see box </Text>
                <Text style={styleNow.colorSet} onPress={this.updateStateNew}>
                {this.state.renderPropComponent}
                {this.state.renderBox}
                  {this.state.currentState}
               
                </Text>
              {
                this.state.renderList?
                <ViewComponentList/>
                :
                this.state.renderBox? 
                <ViewComponentBox/> :
                this.state.renderPropComponent ?
                <ViewComponentProp currentState={this.state.currentState} updateStateNew={this.updateStateNew}/>
                : <Viewcomponent/>
              }  
              </View>
          );
        }
        
}

const styleNow=StyleSheet.create({
  colorSet:{
      color:'green',
      fontSize:20,
      fontFamily:"arial",
      marginTop:20,
      fontWeight:"bold",
      textAlign:"center"
  },
  button:{
    borderColor:'red',
    color:'green',
    fontSize:20,
    margin:10,
    borderBottomWidth:3,
    backgroundColor:'pink',
    borderRadius:10
  }
  
  })

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//              {/* do not render learn more links for now..  */}
//              <LearnMoreLinks />
//             <View style={styles.container}>
//                 <Text>this is the first line to align senter</Text>
//                 <Text>this is the second line to align senter</Text>
//                 <Text>this is the third line to align senter</Text>
//                 <Text>this is the fourth line to align senter</Text>
//           </View>
//           </View>
         
//         </ScrollView>
//       </SafeAreaView>   
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 10,
//     borderBottomColor: "#ccc",
//     borderBottomWidth:2
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
//   container:{
//     flex:1,
//     backgroundColor:"#fff",
//     alignItems: "center",
//     justifyContent:"center",
//     marginTop:10
//   }
// });

// export default App;
