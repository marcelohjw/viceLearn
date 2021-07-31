import React from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native';

const ActivityItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete}>
            <View style={styles.actvityList}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
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