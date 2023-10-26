import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';
import Orientation from 'react-native-orientation';

const GameScreen = () => {
  const [scoreRed, setScoreRed] = useState(0);
  const [scoreBlue, setScoreBlue] = useState(0);

  const incrementScore = (team: 'red' | 'blue') => {
    if (team === 'red') {
      setScoreRed(scoreRed + 1);
    } else {
      setScoreBlue(scoreBlue + 1);
    }
  };

  const decrementScore = (team: 'red' | 'blue') => {
    if (team === 'red' && scoreRed > 0) {
      setScoreRed(scoreRed - 1);
    } else if (team === 'blue' && scoreBlue > 0) {
      setScoreBlue(scoreBlue - 1);
    }
  };

  const resetScores = () => {
    setScoreRed(0);
    setScoreBlue(0);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.teamContainer, styles.redContainer]}
        onPress={() => incrementScore('red')}
      >
        <Text style={styles.scoreText}>{scoreRed}</Text>
        <Button title="- 1" onPress={() => decrementScore('red')} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.teamContainer, styles.blueContainer]}
        onPress={() => incrementScore('blue')}
      >
        <Text style={styles.scoreText}>{scoreBlue}</Text>
        <Button title=" - 1" onPress={() => decrementScore('blue')} />
      </TouchableOpacity>
      <View style={styles.resetButtonContainer}>
        <Button title="Zerar" onPress={resetScores} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 20,
    flexDirection: 'row',
  },
  teamContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  redContainer: {
    backgroundColor: 'red',
  },
  blueContainer: {
    backgroundColor: 'blue',
  },
  scoreText: {
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
  },
  resetButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default GameScreen;
