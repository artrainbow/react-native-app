import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import { Navbar } from "./src/Navbar.js";
import { AddTodo } from "./src/AddTodo.js";
import { Todo } from "./src/Todo.js";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = title => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title
      }
    ]);
  };

  const removeTodo = id => {
    setTodos(prev => prev.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <AddTodo onSubmit={addTodo} />
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={todos}
        renderItem={({ item }) => {
          return <Todo todo={item} removeTodo={removeTodo} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    ["backgroundColor"]: "red",
    justifyContent: "flex-start"
  }
});
