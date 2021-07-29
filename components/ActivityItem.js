import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ActivityItem = props => {
    return (
        <View style={styles.actvityList}>
            <Text>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    actvityList: {
        backgroundColor: '#ccc',
        padding: 10,
        marginVertical: 2,
        }
})

export default ActivityItem;