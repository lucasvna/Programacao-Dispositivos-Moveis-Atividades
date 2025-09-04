import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, {useState} from 'react'

const Exercicio3 = () => {

    const [texto, setTexto] = useState("")

    return (
        <View style={styles.container}>

            <TextInput
                style={styles.input}
                placeholder="Escreva alguma coisa"
                value={texto}
                onChangeText={setTexto}
            />

            <Text>Você escreveu isto: {texto}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        padding: 100
    },

    input: {
        borderWidth: 1,
        borderColor: "#000",
        padding: 10,
        marginVertical: 10,
        width: 200,
        borderRadius: 5
    }

})

export default Exercicio3