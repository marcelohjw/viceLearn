import React, { useState } from 'react';
import { View, TextInput, Button,  StyleSheet  } from 'react-native';

const ActivityInput = props => {
    const [enteredAct, setEnteredAct] = useState('');

    const addActvInputHandler = (enteredText) => {
        setEnteredAct(enteredText);
      };

    return (
    <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Digite aqui" 
          style={styles.input}
          onChangeText={addActvInputHandler}
          value={enteredAct}
        />
        <Button 
          title="ADD" 
          onPress={() => props.onAddActivity(enteredAct)}
        ></Button>
    </View>
    );
}

const styles = StyleSheet.create({
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

export default ActivityInput;