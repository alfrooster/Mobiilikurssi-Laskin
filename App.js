import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [answer, setAnswer] = useState('');
  const [calcs, setCalcs] = useState([]);

  const sum = () => {
    const nextAnswer = num1 + num2;
    setAnswer(nextAnswer);
    const nextCalc = num1 + ' + ' + num2 + ' = ' + nextAnswer
    setCalcs([...calcs, {key: nextCalc}]);
  }

  const sub = () => {
    const nextAnswer = num1 - num2;
    setAnswer(nextAnswer);
    const nextCalc = num1 + ' - ' + num2 + ' = ' + nextAnswer
    setCalcs([...calcs, {key: nextCalc}]);
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>Result: {answer}</Text>
      <TextInput
        style={{width: 200, borderColor: 'gray', borderWidth: 1, fontSize: 20}}
        onChangeText={text => setNum1(Number(text))}
        value={num1}
        placeholder="Number 1"
        keyboardType="numeric"
      />
      <TextInput
        style={{width: 200, borderColor: 'gray', borderWidth: 1, fontSize: 20}}
        onChangeText={text => setNum2(Number(text))}
        value={num2}
        placeholder="Number 2"
        keyboardType="numeric"
      />
      <View style={{width: 60, flexDirection: 'row', justifyContent: 'space-between'}}>
        <Button onPress={sum} title="+"></Button>
        <Button onPress={sub} title="-"></Button>
      </View>
      <Text>History</Text>
      <FlatList
        data={calcs}
        renderItem={({item}) => <Text>{item.key}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  },
});
