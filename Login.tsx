import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

const LoginScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);


  const handleLogin = () => {
    if (username === '' || password === '') {
      setModalVisible(true);
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <Text style={styles.text}> Hello </Text>
          <Text style={styles.innerText}> Welcome Back~! </Text>
        </View>

        <View style={styles.fieldContainer}>
          <TextInput
            style={styles.field}
            placeholder="Enter your username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={[styles.field, styles.fieldMargin]}
            placeholder="Enter your Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalText}> All fields must be filled!</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safe:{
    flex: 1,
    backgroundColor: '#262838',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginStart: 20,
    
  },
  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    color: 'green'
  },
  innerText: {
    color: '#363e6b',
    fontFamily: 'Poppins-Regular',
    color: 'white'
  },
  fieldContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    
    marginBottom: 30,
  },
  field: {
    backgroundColor: 'white',
    width: 200,
    height: 50,
    borderColor: '#5c69ab',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    fontFamily: 'Poppins-Regular',
  },
  fieldMargin:{
    marginTop: 15,
  },
  button: {
    backgroundColor: '#9cc2ff',
    height: 40,
    width: 100,
    borderRadius: 15,
    
  },
  buttonContainer: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontFamily: 'Poppins-Regular',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    color: '#363e6b',
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: 15,
    fontFamily: 'Poppins-Regular',
  },
});

export default LoginScreen;