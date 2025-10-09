import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const CartaoApresentacao = () => {
  return (
    <View style ={style.container}>
      <Image source={{ uri: 'https://avatars.githubusercontent.com/u/1?v=4' }}
      style={style.imagemPerfil}/>

      {/* NOME E DESCRICAO */}
      <Text style={style.nome}>John Doe</Text>
      <Text style={style.descricao}>Fullstack Developer</Text>


        <View style={style.botoesContainer}>
        {/* CONTATOS */}
      <TouchableOpacity style={[style.botao, style.botaoGithub]}>
        <Text style={style.textoBotao}>Github</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[style.botao, style.botaoLinkedin]}>
        <Text style={style.textoBotao}>Linkedin</Text>
      </TouchableOpacity>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        width: 300,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#ffff',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height:2},
        shadowOpacity: 0.1,
        shadowRadius: 0.4,
        elevation: 5,
    },
    imagemPerfil: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    nome: {
        fontSize: 22,
        fontWeight: 'bold',
        color: "#333"
    },
    descricao: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginVertical: 10
    },
    botao: {
        flex: 1,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    botaoGithub: {
        backgroundColor: '#ff8552'
    },
    botaoLinkedin: {
        backgroundColor: '#297373'
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    botoesContainer: {
        flexDirection: 'row',
        marginTop: 10
    }
})

export default CartaoApresentacao