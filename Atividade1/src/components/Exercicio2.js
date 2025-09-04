import { View, Text, StyleSheet, Button } from 'react-native'
import { useState } from 'react'
import React from 'react'

const Exercicio2 = () => {

    const [contador, setContador] = useState(0)

    function incrementar() {
        setContador(contador + 1)
    }

    function decrementar() { 
        setContador(contador - 1)
    }


    return (
        <View style={style.container}>

            <Button title='incrementar' onPress={incrementar} />
            <Button title="decrementar" onPress={decrementar} />

            <Text>O contador está em: {contador}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        padding: 100
    }
})

export default Exercicio2