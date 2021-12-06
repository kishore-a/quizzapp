import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const QuizPage = ({ route }) => {
  const { itemId } = route.params;

  const navigation = useNavigation();
  const [questionnumber, setquestionnumber] = React.useState(0);
  const [fontcolor_a, setfontcolor_a] = React.useState('black');
  const [fontcolor_b, setfontcolor_b] = React.useState('black');
  const [fontcolor_c, setfontcolor_c] = React.useState('black');
  const [fontcolor_d, setfontcolor_d] = React.useState('black');
  const [color_a, setcolor_a] = React.useState('white');
  const [color_b, setcolor_b] = React.useState('white');
  const [color_c, setcolor_c] = React.useState('white');
  const [color_d, setcolor_d] = React.useState('white');
  const [selected_answer, setselected_answer] = React.useState(null);
  const [marks, setmarks] = React.useState(0);
  const datum = itemId.questions[questionnumber].question;
  const option_a = itemId.questions[questionnumber].options[0];
  const option_b = itemId.questions[questionnumber].options[1];
  const option_c = itemId.questions[questionnumber].options[2];
  const option_d = itemId.questions[questionnumber].options[3];
  const answer = itemId.questions[questionnumber].answer;
  const data = [datum, option_a, option_b, option_c, option_d];
  const colorchange_a = () => {
    setfontcolor_a('white');
    setfontcolor_b('black');
    setfontcolor_c('black');
    setfontcolor_d('black');
    setcolor_a('#6330c2'),
      setcolor_b('white'),
      setcolor_c('white'),
      setcolor_d('white'),
      setselected_answer('a');
  };
  const colorchange_b = () => {
    setfontcolor_b('white');
    setfontcolor_a('black');
    setfontcolor_c('black');
    setfontcolor_d('black');
    setcolor_b('#6330c2'),
      setcolor_a('white'),
      setcolor_c('white'),
      setcolor_d('white'),
      setselected_answer('b');
  };
  const colorchange_c = () => {
    setfontcolor_c('white');
    setfontcolor_a('black');
    setfontcolor_b('black');
    setfontcolor_d('black');
    setcolor_c('#6330c2'),
      setcolor_a('white'),
      setcolor_b('white'),
      setcolor_d('white'),
      setselected_answer('c');
  };
  const colorchange_d = () => {
    setfontcolor_d('white');
    setfontcolor_a('black');
    setfontcolor_b('black');
    setfontcolor_c('black');
    setcolor_d('#6330c2'),
      setcolor_a('white'),
      setcolor_b('white'),
      setcolor_c('white'),
      setselected_answer('d');
  };
  const quizbrain = () => {

    setselected_answer(null);
    setcolor_a('white'),
      setcolor_b('white'),
      setcolor_c('white'),
      setcolor_d('white');
    setfontcolor_a('black');
    setfontcolor_b('black');
    setfontcolor_c('black');
    setfontcolor_d('black');
    console.log(selected_answer);
    console.log(answer);

    if (questionnumber < 9) {
      if (selected_answer == answer) {
        console.log("selected answer: " + selected_answer);
        console.log("answer: " + answer);
        console.log('correct');
        setmarks(marks + 1);
      } else {
        console.log("selected answer: " + selected_answer);
        console.log("answer: " + answer);
        console.log('wrong');
      }
      console.log(marks);
      setquestionnumber(questionnumber + 1);
    }
    else {
      console.log('quiz over');
      console.log(marks);
      navigation.navigate('ResultPage', { marks: marks });
    }
  }



  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 10, marginRight: 10 }}>
        <View style={{ alignItems: 'center', marginBottom: 10, marginTop: 20 }}>
          <Text style={styles.textheading}>JavaScript Quiz</Text>
        </View>
        <View >
          <Text style={{ color: '#b4626c', fontSize: 20 }}>
            Question {questionnumber + 1}/10
          </Text>
        </View>
        <View style={{ marginTop: 10, marginBottom: 50 }}>
          <Text style={styles.questions}>{datum}</Text>
        </View>
        <View >
          <View style={{
            marginVertical: 10,
            backgroundColor: color_a,
            height: 80,
            justifyContent: 'center',
            borderRadius: 18
          }}>
            <TouchableOpacity
              style={{ marginTop: 10 }}
              onPress={colorchange_a}
            >
              <Text style={{
                color: fontcolor_a,
                fontSize: 20,
                marginHorizontal: 30
              }}>A:{option_a}</Text>
            </TouchableOpacity>
          </View>
          <View style={{
            marginVertical: 10,
            backgroundColor: color_b,
            height: 80,
            justifyContent: 'center',
            borderRadius: 18
          }}>
            <TouchableOpacity
              style={{ marginTop: 10 }}
              onPress={colorchange_b}
            >
              <Text style={{
                color: fontcolor_b,
                fontSize: 20,
                marginHorizontal: 30
              }}>B:{option_b}</Text>
            </TouchableOpacity>
          </View>
          <View style={{
            marginVertical: 10,
            backgroundColor: color_c,
            height: 80,
            justifyContent: 'center',
            borderRadius: 18
          }}>
            <TouchableOpacity
              style={{ marginTop: 10 }}
              onPress={colorchange_c}
            >
              <Text style={{
                color: fontcolor_c,
                fontSize: 20,
                marginHorizontal: 30
              }}>C:{option_c}</Text>
            </TouchableOpacity>
          </View>
          <View style={{
            marginVertical: 10,
            backgroundColor: color_d,
            height: 80,
            justifyContent: 'center',
            borderRadius: 18
          }}>
            <TouchableOpacity
              style={{ marginTop: 10 }}
              onPress={colorchange_d}
            >
              <Text style={{
                color: fontcolor_d,
                fontSize: 20,
                marginHorizontal: 30
              }}>D:{option_d}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 100, alignItems: 'center' }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                quizbrain();
              }}
            >
              <Text style={{ color: 'white', fontSize: 20 }}>Submit Answer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default QuizPage;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  textheading: {
    fontSize: 20,
    color: 'black',

  },
  button: {
    width: (Dimensions.get('window').width) - 100,
    height: 75,
    backgroundColor: '#6330c2',
    marginBottom: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18
  },
  option: {
    marginVertical: 10,
    backgroundColor: 'white',
    height: 80,
    justifyContent: 'center',
    borderRadius: 18
  },
  questions: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  optioncontainer: {
    backgroundColor: 'white',
    width: '100%',
  },
  text: {
    color: 'black',
    fontSize: 20,
    marginHorizontal: 30
  }
});
