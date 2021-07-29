import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

import ActivityItem from './components/ActivityItem';

export default function App() {
  const [enteredAct, setEnteredAct] = useState('');
  const [actvityList, setActivty] = useState([]);

  const addActvInputHandler = (enteredText) => {
    setEnteredAct(enteredText);
  };

  const addActvHandler = () => {
    setActivty(currentActivitys => [...actvityList, {key: Math.random().toString(), value: enteredAct}]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Digite aqui" 
          style={styles.input}
          onChangeText={addActvInputHandler}
          value={enteredAct}
        />
        <Button 
          title="Adicionar" 
          onPress={addActvHandler}
        ></Button>
      </View>
      <FlatList
        data={actvityList}
        renderItem={ itemData => <ActivityItem title={itemData.item.value} />}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  inputContainer: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    width: '85%',
    padding: 5
  }
});
