import React from 'react'
import { Button, View } from 'react-native-web';

function Component3() {
  return (
    <View>
       <Button
       title="IR PARA CONTADOR1"
        onPress= {() => navigation.navigate('Contador1')}
       ></Button>
    </View>
  )
}

export default Component3;