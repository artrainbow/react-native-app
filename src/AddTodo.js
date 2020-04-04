import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    } else {
      Alert.alert("Error");
    }
  };

  return (
    <View>
      <TextInput
        style={{
          borderStyle: "solid",
          borderBottomWidth: 2,
          borderBottomColor: "black",
          backgroundColor: "white",
          padding: 5
        }}
        onChangeText={text => setValue(text)}
        value={value}
        placeHolder="Input todo"
        autocorrect={false}
        autoCapitalize="none"
      />
      <Button title="Add" onPress={pressHandler} />
    </View>
  );
};
