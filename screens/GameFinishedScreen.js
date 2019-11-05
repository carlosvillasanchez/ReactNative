import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image
} from 'react-native';

import Card from '../components/simple/Card'
import Input from '../components/simple/Input'
import NumberContainer from '../components/complex/NumberContainer'
import TitleText from '../components/simple/TitleText'
import BodyText from '../components/simple/BodyText';


import Colors from '../constants/colors';
import DefaultStyles from '../constants/default-styles';
import colors from '../constants/colors';

const GameFinishedScreen = props => {

    return (
        <View style={{...DefaultStyles.mainContainer, justifyContent: 'center'}}>
            <TitleText>Finished</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/pictures/success.jpg')}
                    style={styles.image}
                    resizeMode="stretch"
                />
            </View>
            <BodyText>The Game is Over!</BodyText>
            <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
            <BodyText>Number was: {props.userNumber}</BodyText>
            <Button
                title="NEW GAME"
                color={Colors.primary}
                onPress={props.onRestart}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        height: 300,
        width: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: colors.secondary1,
        overflow: "hidden",
        marginVertical: 30,
        alignItems: 'center'
    },
    image:{
        height: '100%'
    }
});

export default GameFinishedScreen;
