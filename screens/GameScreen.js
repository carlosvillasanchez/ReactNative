import React, { useState, useRef, useEffect } from 'react';
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
import DefaultStyles from '../constants/default-styles';

function generateRandomBetween(min, max, exclude){
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
}


const GameScreen = props => {
    let [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, props.selectedNumber)
    );
    let [rounds, setRounds] = useState(0);
    let currentLow = useRef(1);
    let currentHigh = useRef(100);
    
    const { selectedNumber, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === selectedNumber) {
            onGameOver(rounds);
        }
    }, [currentGuess, selectedNumber, onGameOver]);

    function nextGuessHandler(direction){
        if (
          (direction === 'lower' && currentGuess < props.selectedNumber) ||
          (direction === 'higher' && currentGuess > props.selectedNumber)
        ) {
          Alert.alert("Don't lie!", 'You know that this is wrong...', [
            { text: 'Sorry!', style: 'cancel' }
          ]);
          return;
        }
        if (direction === 'lower') {
          currentHigh.current = currentGuess;
        } else {
          currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(
          currentLow.current,
          currentHigh.current,
          currentGuess
        );
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1);
      };
    

    return (
        <View style={DefaultStyles.mainContainer}>
            <Text>Guessing your number</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.inputContainer}>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}> 
                        <Button 
                            title="LOWER"
                            color={Colors.secondary1}
                            onPress={nextGuessHandler.bind(this, 'lower')}
                        />
                    </View>
                    <View style={styles.button}> 
                        <Button 
                            title="HIGHER"
                            color={Colors.secondary2}
                            onPress={nextGuessHandler.bind(this, 'higher')}
                        />
                    </View>
                </View>
            </Card>
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

export default GameScreen;
