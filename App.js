import { StyleSheet, View } from 'react-native';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Contador1 from './components/Contador1';

export default function App() {
  return (
    <View style={styles.container}>
    <Component1/>
    <Contador1/>
    <Component2/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  biggerText: {
    fontSize: 30
  }
});
