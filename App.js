import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

import ActivityItem from './components/ActivityItem';
import ActivityInput from './components/ActivityInput';

export default function App() {
  const [actvityList, setActivty] = useState([]);



  const addActvHandler = activityTitle => {
    setActivty(currentActivitys => [...actvityList, {key: Math.random().toString(), value: activityTitle}]);
  };

  return (
    <View style={styles.container}>
      <ActivityInput onAddActivity={addActvHandler} />
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
  }
});
