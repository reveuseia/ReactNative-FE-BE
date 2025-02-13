/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer, StackActions, useNavigation } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import {ActivityIndicator, Alert, Button, Modal, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './Home';
import LoginScreen from './Login';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const LoginScreen= () => {
//   const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
//   const [username, setUsername] = useState('');
//   const[password, setPassword] = useState('');
//   const[modalVisible, setModalVisible] = useState(false);

//   const handleLogin = () =>{ //buat handle login page, validasi buat field di login
//     if (username === '' || password === ''){ //kalo salah satu field ada yg kosong atau empty, modal bakal popup
//       setModalVisible(true);
//     } else{ //kalo kondisi diatas ga terpenuhi, bakal lgsg di direct ke home
//       navigation.navigate('Home')
//     }
//   }
//   return (
//     <SafeAreaProvider>
//       <SafeAreaView>
//         <View style={styles.container}>
//           <Text style={styles.text}> Hello </Text>
//           <Text style={styles.innerText}> Welcome Back~! </Text>
//         </View>

//         <View style={styles.fieldContainer}>
//           <TextInput style={styles.field} placeholder="Enter your username" 
//           value={username}
//           onChangeText={setUsername}
//           />
//           <TextInput style={styles.field} placeholder="Enter your Password" 
//           value={password}
//           onChangeText={setPassword}
//           />
//         </View>

//         <View style={styles.buttonContainer}>
//           <View style={styles.button}>
//             <TouchableOpacity onPress={handleLogin}>
//               <Text style={styles.buttonText}>Login</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         <Modal animationType='slide' transparent={true} visible={modalVisible} onRequestClose= {() => {
//           setModalVisible(false);
//           }}>
//           <View style = {styles.modalView}>
//             <Text style = {styles.modalText}> All field must be filled!</Text>
//             <TouchableOpacity style = {styles.button} onPress={() => {
//               setModalVisible(false)
//             }}>
//               <Text style = {styles.buttonText}>
//                 Close
//               </Text>
//             </TouchableOpacity>
//           </View>
          
//         </Modal>

//         {/* <ActivityIndicator style={styles.load} size="large" color="#5c69ab" /> */}
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// };

// const HomeScreen = () =>{
//   return(
//     <SafeAreaView>
//       <View style = {styles.homeHeaderContainer}>
//         <Text style = {styles.homeHeader}>Welcome Back!</Text>
//       </View>
      
//     </SafeAreaView>
//   );
// };

//  const styles = StyleSheet.create({
//     container: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginTop: 50,
//       marginStart: 20
//     },

//     text: {
//       fontFamily: 'Poppins-Bold',
//       fontSize : 20,
//       fontWeight: 'bold',
//       textAlign: 'center',
//       justifyContent: 'center'
//     },

//     innerText:{
//       color: '#363e6b',
//       fontFamily: 'Poppins-Regular',
//     },

//     fieldContainer:{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginTop: 30,
//       marginBottom: 30
//     },

//     field:{
//       width: 200,
//       height: 50,
//       borderColor: '#5c69ab',
//       borderWidth: 1,
//       padding: 10,
//       borderRadius: 10,
//       fontFamily: 'Poppins-Regular',
//     },
//     button: {
//       backgroundColor: 'darkblue',
//       height: 40,
//       width: 100,
//       borderRadius: 30
//     },
//     buttonContainer: {
//       justifyContent: 'center',
//       display: 'flex',
//       alignItems: 'center',
//       marginTop: 30
//     },
//     buttonText: {
//       color: 'white',
//       textAlign: 'center',
//       padding: 10,
//       fontFamily: 'Poppins-Regular',
//     },
//     load: {
//       marginTop: 30
//     },
//     homeHeaderContainer: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       padding: 20
//     },
//     homeHeader:{
//       fontSize: 20,
//       fontWeight: 'bold',
//       color: '#363e6b',
//       fontFamily: 'Poppins-Regular'
//     },
//     modalView: {
//       margin: 20,
//       backgroundColor: 'white',
//       borderRadius: 20,
//       padding: 35,
//       alignItems: 'center',
//       shadowColor: '#000',
//       shadowOffset: {
//         width: 0,
//         height: 2
//       },
//       shadowOpacity: 0.25,
//       shadowRadius: 4,
//       elevation: 5
//     },
//     modalText:{
//       color: '#363e6b',
//       textAlign: 'center',
//       alignItems: 'center',
//       marginBottom: 15,
//       fontFamily: 'Poppins-Regular'
//     }


//     }

//   );
  
export default App;