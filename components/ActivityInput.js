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
            placeholder="Tarefa" 
            style={styles.input}
            onChangeText={addActvInputHandler}
            value={enteredAct}
          />
          <View style={styles.inputButtons}>
            <View style={styles.button}>
              <Button 
                title="ADICIONAR" 
                onPress={addActivityHandler}
              />
            </View>
            <View style={styles.button}>
              <Button 
                title="CANCELAR"
                color="red"
                onPress={props.onCancelActivity} 
              />
            </View>
          </View>
      </View>
    </Modal>
    );
}

const styles = StyleSheet.create({
    inputButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
      },
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
      },
      button: {
        width: '50%'
      }
});

export default ActivityInput;