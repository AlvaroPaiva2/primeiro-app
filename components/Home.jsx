import React from 'react';
import { Button, View } from 'react-native-web';
import axios from 'axios';

function Home({ navigation }) {

  axios.get('https://pokeapi.co/api/v2/pokemon/bulbasaur')

    .then(function (response) {
     alert(response ="BOM DIA");
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <View>
      <Button
       title="IR PARA COMPONENT2"
        onPress= {() => navigation.navigate('Component2')}
       ></Button>
       <Button
       title="IR PARA CONTADOR1"
        onPress= {() => navigation.navigate('Contador1')}
       ></Button>
       <Button
       title="IR PARA COMPONENT3"
        onPress= {() => navigation.navigate('Component3')}
       ></Button>
    </View>
  );
}

export default Home;