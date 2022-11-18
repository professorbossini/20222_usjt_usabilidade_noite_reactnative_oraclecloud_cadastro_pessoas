import { StyleSheet, Text, View } from 'react-native'
//useState é um hook do React (existe desde a versão 16.8)
import React, { useState } from 'react'
import {
  Button,
  Card,
  Input
} from '@rneui/themed'

const PessoaAddComponente = () => {
  // os hooks do React, necessariamente são chamados dentro da função que define o componente
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [hobby, setHobby] = useState('')
  return (
    <>
      <Card>
        <Card.Title>Cadastro de pessoas</Card.Title>
        <Card.Divider></Card.Divider>
        <Input 
          style={ styles.textInput }
          placeholder='Digite o nome'
          leftIcon={{type: "font-awesome", name: "user"}}/>

        <Input 
          style={ styles.textInput }
          placeholder="Digite a idade"
          leftIcon={{type: "font-awesome", name: "info"}}/>

        <Input 
          style={ styles.textInput }
          placeholder="Digite o hobby"
          leftIcon={{type: "font-awesome", name: "heart"}}/>

          <Button 
            title="OK"
            buttonStyle={ styles.button }/>
      </Card>
    </>
  )
}

export default PessoaAddComponente

const styles = StyleSheet.create({
  button: {
    borderRadius: 8
  },
  textInput: {
    textAlign: 'center',
    margin: 0,
    padding: 0
  }
})