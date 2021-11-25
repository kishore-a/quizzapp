import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import auth from '@react-native-firebase/auth'

const HomeScreen = () => {

  return (
    <View style={styles.page} >
      <View></View>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerfont}>
            Lets play
          </Text>
          <Text style={styles.headersmallfont}>
            And be the First !
          </Text>

        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.quizheading}>
          Recent Quiz
        </Text>
        <View>
          <View style={styles.quiztypes}>
            <Image source={require('../../../assets/js.png')} style={styles.image} />
            <View style={{ marginLeft: 15, alignItems: 'center' }}>
              <Text style={styles.quizname}>JavaScript</Text>
              <Text style={styles.numberofquestions}>10 Questions</Text>
            </View>

          </View>
        </View>
        <View>
          <View style={styles.quiztypes}>
            <Image source={require('../../../assets/python.png')} style={styles.image} />
            <View style={{ marginLeft: 15, }}>
              <Text style={styles.quizname}>Python Programming</Text>
              <Text style={styles.numberofquestions}>10 Questions</Text>
            </View>

          </View>
        </View>
        <View>
          <View style={styles.quiztypes}>
            <Image source={require('../../../assets/c.png')} style={styles.image} />
            <View style={{ marginLeft: 15 }}>
              <Text style={styles.quizname}>C programming</Text>
              <Text style={styles.numberofquestions}>10 Questions</Text>
            </View>

          </View>
        </View>
        <View>
          <View style={styles.quiztypes}>
            <Image source={require('../../../assets/react.png')} style={styles.image} />
            <View style={{ marginLeft: 15 }}>
              <Text style={styles.quizname}>React</Text>
              <Text style={styles.numberofquestions}>10 Questions</Text>
            </View>

          </View>
        </View>

      </View>
    </View>
  )
}
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
    color: 'white'
  },
  headersmallfont: {
    marginLeft: '5%',
    marginTop: '2%',
    fontSize: 20,
    color: 'white'
  },
  body: {
    marginLeft: '5%',
    marginTop: '8%'

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
    fontWeight: '600'
  },
  numberofquestions: {
    color: 'grey',
    fontSize: 15
  }

})
export default HomeScreen
