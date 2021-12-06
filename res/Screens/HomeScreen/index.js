import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Quiztypes from '../../components/quiztypes';
import storage from '@react-native-firebase/storage';
const HomeScreen = () => {
  const js = storage().ref('js.png');
  // useEffect(() => {
  //   js.getDownloadURL().then(url => {
  //     setimageurl(url);
  //   });
  // }, []);
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerfont}>Lets play</Text>
          <Text style={styles.headersmallfont}>And be the First !</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.quizheading}> Recent Quiz</Text>
        <Quiztypes />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    height: '18%',
    backgroundColor: '#6330c2',
  },
  headerfont: {
    marginLeft: '5%',
    marginTop: '8%',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  headersmallfont: {
    marginLeft: '5%',
    marginTop: '2%',
    fontSize: 20,
    color: 'white',
  },
  body: {
    marginLeft: '5%',
    marginTop: '8%',
    marginLeft: '5%',
  },
  quizheading: {
    fontSize: 23,
    color: '#353343',
    fontWeight: 'bold',
  },
  image: {
    height: 85,
    width: 85,
  },
  quiztypes: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  quizname: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
  },
  numberofquestions: {
    color: 'grey',
    fontSize: 15,
  },
});
export default HomeScreen;
