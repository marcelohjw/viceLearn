import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

import ActivityItem from './components/ActivityItem';
import ActivityInput from './components/ActivityInput';

export default function App() {
  const [activityList, setActivity] = useState([]);
  const [isAddActivity, setIsAddActivity] = useState(false);


  const addActvHandler = activityTitle => {
    if (activityTitle.length === 0) {
      return;
    }

    setActivity(currentActivitys => [...activityList, {key: Math.random().toString(), value: activityTitle}]);
    setIsAddActivity(false);
  };

  const removeActivityHandler = activityId => {
    setActivity(currentActivitys => {
        return currentActivitys.filter((activity) => activity.key !== activityId);
    });
  };

  const cancelActivityHandler = () => {
    setIsAddActivity(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Nova Tarefa" onPress={() => setIsAddActivity(true)}/>
      <ActivityInput visible={isAddActivity} onAddActivity={addActvHandler} onCancelActivity={cancelActivityHandler}/>
      <View style={styles.taskList}>
      <FlatList
        data={activityList}
        renderItem={ itemData => <ActivityItem id={itemData.item.key} onDelete={removeActivityHandler} title={itemData.item.value} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  taskList: {
    paddingTop: '2%'
  },
  container: {
    padding: 50
  }
});
