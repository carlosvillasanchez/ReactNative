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

const GameFinishedScreen = props => {

    return (
        <View style={{...DefaultStyles.mainContainer, justifyContent: 'center'}}>
            <Text>Finished</Text>
            <Text>The Game is Over!</Text>
            <Text>Number of rounds: {props.roundsNumber}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <Button
                title="NEW GAME"
                color={Colors.primary}
                onPress={props.onRestart}
            />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default GameFinishedScreen;
