import { View } from 'react-native';
import axios from 'axios';

export default function Component2() {

  axios.get('https://pokeapi.co/api/v2/pokemon/bulbasaur')
  .then(function (response) {
    // manipula o sucesso da requisição
    alert(response ="BOM DIA");
  })
  .catch(function (error) {
    // manipula erros da requisição
    console.error(error);
  })

  return (
    <View>
        <style/>
      <p>Este é um contador manual de anos.</p>
    </View>
  );
}
