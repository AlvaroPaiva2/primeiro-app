import { useState } from 'react';
import { View, Button, Text } from 'react-native';

const Contador1 = () => {
  const [ano, setAno] = useState(2023);

  function incrementarAno() {
    return setAno(ano + 1)
  }
  function decrementarAno(){
    return setAno(ano - 1)
  }

return (
  <View>
    <Button  onPress={() => incrementarAno()} title='Pressione para incrementar (+)' />
    <Text style={{ textAlign: "center", fontSize: 50, }}>{ano}</Text>
    <Button  onPress={() => decrementarAno()} title='Pressione para decrementar (-)' />
  </View>
);
}

export default Contador1;