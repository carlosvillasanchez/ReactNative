import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';

import Card from '../components/simple/Card'
import Input from '../components/simple/Input'
import NumberContainer from '../components/complex/NumberContainer'

import Colors from '../constants/colors';
import DefaultStyles from '../constants/default-styles'

const PreGameScreen = props => {
    let [enteredValue, setEnteredValue] = useState('')
    let [confirmed, setConfirmed] = useState(false)
    let [selectedNumber, setSelectedNumber] = useState()

    function numberInputHandler(inputText){
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    function cancelNumberHandler(){
        setConfirmed(false);
    }

    function startGameHadler(){
        props.onStartGame(selectedNumber)
    }

    function selectNumberHandler(){
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
          Alert.alert(
            'Invalid number!',
            'Number has to be a number between 1 and 99.',
            [{ text: 'Okay', style: 'destructive', onPress: cancelNumberHandler }]
          );
          return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if (confirmed) {
      confirmedOutput = (
        <Card style={styles.summaryContainer}>
          <NumberContainer>{selectedNumber}</NumberContainer>
          <Button
            title="START GAME"
            color={Colors.secondary2}
            onPress={startGameHadler}
          />
        </Card>
      );
    }

    return (
        <View style={DefaultStyles.mainContainer}>
            <Text>Starting the game</Text>
            <Card style={styles.inputContainer}>
                <Text>Choose a number between 1 and 99:</Text>
                <Input
                    style={styles.input}
                    blurOnSubmit
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="number-pad"
                    maxLength={2}
                    onChangeText={numberInputHandler}
                    value={enteredValue}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}> 
                        <Button 
                            title="CANCEL"
                            color={Colors.secondary1}
                            onPress={cancelNumberHandler}
                        />
                    </View>
                    <View style={styles.button}> 
                        <Button 
                            title="SELECT"
                            color={Colors.secondary2}
                            onPress={selectNumberHandler}
                        />
                    </View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
    );
};

const styles = StyleSheet.create({
  buttonContainer:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  input: {
    width: 50,
    textAlign: 'center'
  },
  button: {
      width: 100
  },
  inputContainer: {
    width: '80%',
    maxWidth: '80%',
    alignItems: 'center',
    margin: 10
  },
  mainContainer: {
      width: '100%',
      height: '100%',
      alignItems: 'center'
  },
  summaryContainer:{
      alignItems: 'center',
      margin: 10
  }
});

export default PreGameScreen;
