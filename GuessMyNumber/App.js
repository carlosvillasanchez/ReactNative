import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

// Own components
import Header from './components/complex/Header';
import PreGameScreen from './screens/PreGameScreen';
import GameScreen from './screens/GameScreen';
import GameFinishedScreen from './screens/GameFinishedScreen';

// Constants
import Colors from './constants/colors';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};


export default function App() {
  let [userNumber, setUserNumber] = useState()
  let [numberOfRounds, setNumberOfRounds] = useState()
  let [dataLoaded, setDataLoaded] = useState(false);


  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

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
