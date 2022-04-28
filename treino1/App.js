import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';

import Topo from './source/telas/Astronomia/Topo.js';
import Estrelas from './source/telas/Astronomia/Estrelas.js';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <Topo/>

      <Estrelas/>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
