import React from 'react';
import { View, StyleSheet } from 'react-native';
import GameScreen from './src/Screens/GameScreen';
import Orientation from 'react-native-orientation';


export default function App() {

  useEffect(() => {
    // Configura a orientação para paisagem quando o componente é montado
    Orientation.lockToLandscape();

    // Lembre-se de desbloquear a orientação quando o componente for desmontado
    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);
  return (
    <View style={styles.container}>
      <GameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});
function useEffect(arg0: () => () => void, arg1: never[]) {
  
}

