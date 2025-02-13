import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.homeHeaderContainer}>
        <Text style={styles.homeHeader}>Welcome Back!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeHeaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  homeHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#363e6b',
    fontFamily: 'Poppins-Regular',
  },
});

export default HomeScreen;