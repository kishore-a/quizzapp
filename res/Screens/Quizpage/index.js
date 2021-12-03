import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Quizoptions from '../../components/quizoptions';
const QuizPage = ({route}) => {
  const {itemId} = route.params;
  React.useEffect(() => {
    console.log(color_a);
  }, []);

  const navigation = useNavigation();
  const [questionnumber, setquestionnumber] = React.useState(0);
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
    setcolor_a('red'),
      setcolor_b('white'),
      setcolor_c('white'),
      setcolor_d('white'),
      setselected_answer('a');
  };
  const colorchange_b = () => {
    setcolor_b('red'),
      setcolor_a('white'),
      setcolor_c('white'),
      setcolor_d('white'),
      setselected_answer('b');
  };
  const colorchange_c = () => {
    setcolor_c('red'),
      setcolor_a('white'),
      setcolor_b('white'),
      setcolor_d('white'),
      setselected_answer('c');
  };
  const colorchange_d = () => {
    setcolor_d('red'),
      setcolor_a('white'),
      setcolor_b('white'),
      setcolor_c('white'),
      setselected_answer('d');
  };

  return (
    <View style={styles.container}>
      <View style={{marginLeft: 10, marginRight: 10}}>
        <View style={{alignItems: 'center', marginBottom: 10, marginTop: 20}}>
          <Text style={styles.text}>JavaScript Quiz</Text>
        </View>
        <View>
          <Text style={{color: '#b4626c', fontSize: 20}}>
            Question {questionnumber + 1}/10
          </Text>
        </View>
        <View style={{marginTop: 10, marginBottom: 50}}>
          <Text style={styles.questions}>{datum}</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.option}>
            <TouchableOpacity
              style={{backgroundColor: color_a, marginTop: 10}}
              onPress={colorchange_a}
            >
              <Text style={styles.text}>A:{option_a}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.option}>
            <TouchableOpacity
              style={{backgroundColor: color_b, marginTop: 10}}
              onPress={colorchange_b}
            >
              <Text style={styles.text}>B:{option_b}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.option}>
            <TouchableOpacity
              style={{backgroundColor: color_c, marginTop: 10}}
              onPress={colorchange_c}
            >
              <Text style={styles.text}>C:{option_c}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.option}>
            <TouchableOpacity
              style={{backgroundColor: color_d, marginTop: 10}}
              onPress={colorchange_d}
            >
              <Text style={styles.text}>D:{option_d}</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop:100}}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setcolor_a('white'),
                  setcolor_b('white'),
                  setcolor_c('white'),
                  setcolor_d('white');
                console.log(selected_answer);
                console.log(answer);
                if (selected_answer == answer) {
                  console.log('correct');
                  setmarks(marks + 1);
                } else {
                  console.log('wrong');
                }
                console.log(marks);
                setquestionnumber(questionnumber + 1);
              }}
            >
              <Text>Press me</Text>
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
  text: {
    fontSize: 20,
    color: 'black',
  },
  button: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
    marginBottom: 100,
    alignItems:'center',
    justifyContent:'center'
  },
  option: {
    marginVertical: 20,
  },
  questions: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});