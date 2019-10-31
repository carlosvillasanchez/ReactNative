import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  let [enteredTodo, setEnteredTodo] = useState('')
  let [todos, setTodo] = useState([])

  function todoTextChange(enteredText){
    setEnteredTodo(enteredText)
  }

  function addGoal(){
    console.log(enteredTodo)
    setTodo(todos => [...todos, enteredTodo])
    setEnteredTodo("")
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Todo text!"
          style={styles.input}
          onChangeText={todoTextChange}
          value={enteredTodo}/>
        <Button title="Add" onPress={addGoal}/>
      </View>
      <ScrollView>
        {todos.map((todo) => {
          return(
            <Text style={styles.todo} key={todo}>{todo}</Text>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    width: '70%'
  },
  todo: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: 'black',
    borderWidth: 1
  }
});
