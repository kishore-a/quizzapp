import React from 'react'
import { FlatList } from 'react-native'
import react_quiz from '../../../assets/data/jsqs'
import QuizComponent from './Quizcomponent'
const Quiztypes = () => {
  return (
    <FlatList

      data={react_quiz}
      renderItem={({ item }) => <QuizComponent item={item} />}
    />
  )
}

export default Quiztypes
