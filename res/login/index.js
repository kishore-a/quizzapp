import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const LoginPage = () => {
  return (
    <View style={styles.body} >
      <View style={styles.container}>
        <Image style={styles.image} source={require("../../assets/add-friend.png")} />
        <View style={styles.infoContainer}>
          <Text style={styles.titletext}>Welcome to Quizzer</Text>
        </View>{/* infoContainer */}
        <View style={styles.inputcontainer}>
          <Text style={styles.reqtext}>Email</Text>
          <Text style={styles.reqtext}>Password</Text>
        </View>
      </View>{/* container */}

    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    alignItems: 'center',

    backgroundColor: 'white'
  },
  text: {
    color: 'black',
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
  },
  container: {
    marginTop: 120,
  },
  infoContainer: {
    marginTop: 70,
  },
  titletext: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  reqtext: {
    fontSize: 15,
    color: 'grey',
    marginTop: 20,
  },
  inputcontainer: {
    marginTop: 40,
  }



})
export default LoginPage
