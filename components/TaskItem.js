import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function TaskItem({ item, dispatch }) {
  return (
    <TouchableOpacity
      style={styles.taskItem}
      onPress={() => dispatch({ type: 'REMOVE_TASK', payload: item.id })}
    >
      <Text style={styles.taskText}>{item.text}</Text>
    </TouchableOpacity>
  );
}
