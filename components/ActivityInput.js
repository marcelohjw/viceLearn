import React, { useState } from 'react';
import { View, TextInput, Button,  StyleSheet, Modal  } from 'react-native';

const ActivityInput = props => {
    const [enteredAct, setEnteredAct] = useState('');

    const addActvInputHandler = (enteredText) => {
        setEnteredAct(enteredText);
      };

    const addActivityHandler = () => {
      props.onAddActivity(enteredAct);
      setEnteredAct('');
    };

    return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
          <TextInput 
            placeholder="Digite aqui" 
            style={styles.input}
            onChangeText={addActvInputHandler}
            value={enteredAct}
          />
          <Button 
            title="ADICIONAR" 
            onPress={addActivityHandler}
          />
          <Button 
            title="CANCELAR"
            color="red" 
          />
      </View>
    </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
      },
      input: {
        borderColor: 'gray',
        borderWidth: 1,
        width: '85%',
        padding: 5,
        marginBottom: 5
      }
});

export default ActivityInput;