import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
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
        <TouchableOpacity style={styles.button} onPress={() => decrementScore('red')}>
          <Text style={styles.buttonText}>- 1</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.teamContainer, styles.blueContainer]}
        onPress={() => incrementScore('blue')}
      >
        <Text style={styles.scoreText}>{scoreBlue}</Text>
        <TouchableOpacity style={styles.button} onPress={() => decrementScore('blue')}>
          <Text style={styles.buttonText}>- 1</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.resetButtonContainer}>
        <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
          <Text style={styles.buttonText}>Zerar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 120,
    color: 'white',
    fontWeight: 'bold',
  },
  resetButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 90,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  resetButton: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default GameScreen;
