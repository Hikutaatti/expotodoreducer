import React, { useReducer, useState } from 'react';
import { View, TextInput, Button, FlatList } from 'react-native';
import TaskItem from './components/TaskItem';
import styles from './styles';

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, { id: Date.now().toString(), text: action.payload }];
    case 'REMOVE_TASK':
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState('');

  const addTask = () => {
    if (text.trim()) {
      dispatch({ type: 'ADD_TASK', payload: text });
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Add a new task"
      />
      <Button title="Save" onPress={addTask} />
      <FlatList
        data={state}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskItem item={item} dispatch={dispatch} />
        )}
      />
    </View>
  );
}