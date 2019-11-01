import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button, Modal} from 'react-native';

const TodoInput = props => {
    let [enteredTodo, setEnteredTodo] = useState('')
    function todoTextChange(enteredText){
        setEnteredTodo(enteredText)
    }
    
    function addGoal(){
        props.onPress(enteredTodo)
        setEnteredTodo('')
    }
    return(
        <Modal visible={props.visible} animationType="slide" style={styles.modal}>
            <View style={styles.inputContainer}>
                <TextInput 
                placeholder="Todo text!"
                style={styles.input}
                onChangeText={todoTextChange}
                value={enteredTodo}/>
                <View style={styles.buttomsView}>
                    <View style={styles.Button}>
                        <Button title="Add" onPress={addGoal} style={styles.addButton}/>
                    </View>
                    <View style={styles.Button}>
                        <Button title="Cancel" color="red" onPress={props.onCancel}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        height: '50%',
        width: '85%'
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        width: '70%',
        marginBottom: 10
    },
    Button: {
        width: '45%'
    },
    buttomsView: {
        width: '40%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default TodoInput;