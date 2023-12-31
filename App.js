import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import Home from './components/Home';
import Component2 from './components/Component2';
import Contador1 from './components/Contador1';
import Component3 from './components/Component3';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer> 
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Component2" component={Component2} />
        <Stack.Screen name="Contador1" component={Contador1} />
        <Stack.Screen name="Component3" component={Component3} />
      </Stack.Navigator>
  </NavigationContainer>  
  )
};

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
