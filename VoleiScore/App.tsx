import React from 'react';
import { View, StyleSheet } from 'react-native';
import GameScreen from  './src/Screens/GameScreen'; // Certifique-se de que o caminho esteja correto
import Nome from './src/Components/Nome';

const App = () => {
  return (
    <View style={styles.container}>
     
      <GameScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
