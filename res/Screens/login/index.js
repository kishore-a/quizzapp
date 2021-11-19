import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native'
const ScreenWidth = Dimensions.get('window').width
const LoginPage = () => {
  const print = () => {
    console.log(email)
    console.log(password)
  }
  const [email, setemail] = React.useState(null)
  const [password, setpassword] = React.useState(null)
  return (
    <View style={styles.body} >
      <View style={styles.container}>
        <Image style={styles.image} source={require("../../../assets/add-friend.png")} />
        <View style={styles.infoContainer}>
          <Text style={styles.titletext}>Welcome to Quizzer</Text>
        </View>{/* infoContainer */}
        <View style={styles.inputcontainer}>
          <Text style={styles.reqtext}>Email</Text>
          <TextInput style={styles.input} color="black" onChangeText={setemail} placeholderTextColor="black" placeholder="your@example.com" />
          <Text style={styles.reqtext}>Password</Text>
          <TextInput secureTextEntry={true} style={styles.input} color="black" placeholderTextColor="black" placeholder="password" onChangeText={setpassword} />
        </View>

      </View>{/* container */}
      <View style={{ marginTop: 40, alignItems: 'center' }}>

        <TouchableOpacity style={styles.button} onPress={print}>
          <Text style={styles.buttontext}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 50, flexDirection: 'row' }}>
        <View>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>
            Dont have an account?
          </Text>
        </View>
        <View style={{ marginLeft: 5 }}>
          <TouchableOpacity>
            <Text style={{ color: '#6330c2', fontWeight: 'bold' }}>
              Register !
            </Text>
          </TouchableOpacity>
        </View>

      </View>
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
    marginTop: 10,
  },
  inputcontainer: {
    marginTop: 40,
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    borderRightColor: 'black',
    borderRightWidth: 0.5,
    borderTopColor: 'black',
    borderTopWidth: 0.5,
    borderLeftColor: 'black',
    borderLeftWidth: 0.5,
    paddingLeft: 10

  },
  button: {
    backgroundColor: '#6330c2',
    width: ScreenWidth - 100,
    height: 60,
    borderRadius: 9,
    justifyContent: 'center',

  },
  buttontext: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  }



})
export default LoginPage
