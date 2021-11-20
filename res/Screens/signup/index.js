import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'

const ScreenWidth = Dimensions.get('window').width
const Signup = () => {
  const navigation = useNavigation()
  const [email, setemail] = React.useState(null)
  const [password, setpassword] = React.useState(null)
  return (
    <View style={styles.body} >
      <View style={styles.container}>
        <Image style={styles.image} source={require("../../../assets/signup.gif")} />
        <View style={styles.infoContainer}>
          <Text style={styles.titletext}>Sign Up</Text>
        </View>{/* infoContainer */}
        <View style={styles.inputcontainer}>
          <Text style={styles.reqtext}>Email</Text>
          <TextInput style={styles.input} color="black" onChangeText={setemail} placeholderTextColor="black" placeholder="your@example.com" />
          <Text style={styles.reqtext}>Password</Text>
          <TextInput secureTextEntry={true} style={styles.input} color="black" placeholderTextColor="black" placeholder="password" onChangeText={setpassword} />
        </View>

      </View>{/* container */}
      <View style={{ marginTop: 40, alignItems: 'center' }}>

        <TouchableOpacity style={styles.button}  >
          <Text style={styles.buttontext}>SignUp</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 50, flexDirection: 'row' }}>
        <View>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>
            Already have an account?
          </Text>
        </View>
        <View style={{ marginLeft: 5 }}>
          <TouchableOpacity onPress={() => { navigation.navigate('LoginPage') }} >
            <Text style={{ color: '#6330c2', fontWeight: 'bold' }}>
              Login !
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
    width: 250,
    height: 250,
    alignSelf: 'center',
  },
  container: {
    marginTop: 80,
  },
  infoContainer: {
    marginTop: 20,
    alignItems: 'center'
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
    paddingLeft: 10,
    width: ScreenWidth - 140

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
export default Signup
