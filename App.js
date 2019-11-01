import React, {useState} from 'react';
import { StyleSheet, View, Button,FlatList} from 'react-native';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';

export default function App() {
  let [todos, setTodo] = useState([])
  let [isAddMode, setAddMode] = useState(false)


  function addGoal(enteredTodo){
    console.log(enteredTodo)
    setTodo(todos => [...todos, {key: Math.random().toString(), value: enteredTodo}])
    setAddMode(false)
  }

  function deleteTodo(todoKey){
    setTodo(todos => {
      return todos.filter((todo) => todo.key !== todoKey)
    })
  }

  function closeModal(){
    setAddMode(false);
  }

  return (
    <View style={styles.container}>
      <Button title='Add new todo' onPress={() => setAddMode(true)}/>
      <TodoInput 
        onPress={addGoal} 
        visible={isAddMode}
        onCancel={closeModal}
      />
      <FlatList
        data={todos}
        renderItem={ItemData => <TodoItem 
          onDelete={deleteTodo.bind(this, ItemData.item.key)}
          title={ItemData.item.value}
        />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});
