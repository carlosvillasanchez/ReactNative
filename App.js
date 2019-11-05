import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

// Own components
import Header from './components/complex/Header';
import PreGameScreen from './screens/PreGameScreen';
import GameScreen from './screens/GameScreen';
import GameFinishedScreen from './screens/GameFinishedScreen';

// Constants
import Colors from './constants/colors';



export default function App() {
  let [userNumber, setUserNumber] = useState()
  let [numberOfRounds, setNumberOfRounds] = useState()

  function startGameHadler(number){
    setUserNumber(number);
  }

  function gameOverHandler(rounds){
    setNumberOfRounds(rounds);
  }

  function restartGameHadler(){
    setNumberOfRounds(null);
    setUserNumber(null);
  }

  let content = <PreGameScreen onStartGame={startGameHadler}/>;

  if (userNumber) {
    content = <GameScreen selectedNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if (numberOfRounds) {
    content = <GameFinishedScreen roundsNumber={numberOfRounds} userNumber={userNumber} onRestart={restartGameHadler}/>
  }

  return (
    <View style={styles.container}>
      <Header title="Guess my number!"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    height: '100%',
    width: '100%',
    alignItems: 'center'
  },
});
