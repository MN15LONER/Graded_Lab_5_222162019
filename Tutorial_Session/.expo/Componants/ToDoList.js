import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function TodoList() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState('');

  const handleInput = (text) => {
    setInput(text);
  };

  const handleTodo = () => {
    if (input.trim() === '') {
      Alert.alert("Please enter a task");
      return;
    }
    const newTodo = [...todo, input];
    setTodo(newTodo);
    setInput('');
  };

  const handleDelete = (index) => {
    const newTodo = todo.filter((_, i) => i !== index);
    setTodo(newTodo);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>To-do List</Text>
      <TextInput
        style={styles.input}
        value={input}
        placeholder="Add your to do"
        onChangeText={handleInput}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleTodo}>
        <Text style={styles.addBtn}>Add Task</Text>
      </TouchableOpacity>
      <FlatList
        data={todo}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <Text style={styles.taskText}>{item}</Text>
            <TouchableOpacity onPress={() => handleDelete(index)} style={styles.deleteButton}>
              <Text style={styles.deleteText}>Delete task</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 20,
    marginTop: 100 },
  text: { 
    fontSize: 24,
    fontWeight: "bold", 
    marginBottom: 20 },
  input: { 
    borderWidth: 1,
    borderColor: "grey",
    padding: 10, 
    marginBottom: 10, 
    borderRadius: 5 },
  listItem: { 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between", 
    marginTop: 10,
    padding: 10, 
    backgroundColor: "pink", 
    borderRadius: 5 },
  taskText: { 
    fontSize: 16 },
  deleteButton: { 
    backgroundColor: "red", 
    padding: 8, 
    borderRadius: 5 },
  deleteText: { 
    color: "white", 
    fontWeight: "bold" },
  addButton: {
    backgroundColor: "blue",
    height: 40,
    borderRadius: 5,
  },
  addBtn: {
    color: "white",
    textAlign: "center",
    marginTop: 10,
  },
});
