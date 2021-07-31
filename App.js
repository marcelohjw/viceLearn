import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import ActivityItem from './components/ActivityItem';
import ActivityInput from './components/ActivityInput';

export default function App() {
  const [activityList, setActivity] = useState([]);



  const addActvHandler = activityTitle => {
    setActivity(currentActivitys => [...activityList, {key: Math.random().toString(), value: activityTitle}]);
  };

  const removeActivityHandler = activityId => {
    setActivity(currentActivitys => {
        return currentActivitys.filter((activity) => activity.key !== activityId);
    });
  };

  return (
    <View style={styles.container}>
      <ActivityInput onAddActivity={addActvHandler} />
      <FlatList
        data={activityList}
        renderItem={ itemData => <ActivityItem id={itemData.item.key} onDelete={removeActivityHandler} title={itemData.item.value} />}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});
