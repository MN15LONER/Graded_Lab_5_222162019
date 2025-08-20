import React from 'react';
import { SafeAreaView, View } from 'react-native';
import ToDoList from './Componants/ToDoList';

export default function App() {
  return (
   <SafeAreaView>
    <View>
    <ToDoList/>
    </View>
   </SafeAreaView>
  );
}
