import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import storage from '@react-native-firebase/storage'
import JavaScript from '../../../../assets/data/JavaScript'
import Python from '../../../../assets/data/Python'
import react from "../../../../assets/data/react"
import c from '../../../../assets/data/c'
import { useNavigation } from '@react-navigation/native'
const QuizComponent = ({ item }) => {
  const js = storage().ref(item.imagename)
  const navigation = useNavigation()
  useEffect(() => {
    js.getDownloadURL().then((url) => { setimageurl(url) })
  }, [])
  const [imageurl, setimageurl] = useState()
  const quizname = item.quiz_name
  const numberofquestions = item.number_of_questions
  const [finalquizname, setfinalquizname] = useState("")
  const handlequiz = () => {
    if (item.quiz_name == 'Python') {
      navigation.navigate('QuizPage', { itemId: Python })
    }
    else if (item.quiz_name == 'JavaScript') {
      navigation.navigate('QuizPage', { itemId: JavaScript })
    }
    else if (item.quiz_name == 'React') {
      navigation.navigate('QuizPage', { itemId: react })
    }
    else {
      navigation.navigate('QuizPage', { itemId: c })
    }


  }
  const toquizpage = () => {
    console.log(finalquizname)
    navigation.navigate('QuizPage', { itemId: Python })
  }

  return (
    <TouchableOpacity onPress={handlequiz}>
      <View style={styles.QuizComponent}>
        <Image source={{ uri: imageurl }} style={styles.image} />
        <View style={{ marginLeft: 15, }}>
          <Text style={styles.quizname}>{quizname}</Text>
          <Text style={styles.numberofquestions}>{numberofquestions} Question</Text>
        </View>
      </View>
    </TouchableOpacity>


  )
}
const styles = StyleSheet.create({
  quizheading: {
    fontSize: 23,
    color: '#353343',
    fontWeight: 'bold',
  },
  image: {
    height: 85,
    width: 85,
  },
  QuizComponent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 20,
    alignItems: 'center',
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
export default QuizComponent
