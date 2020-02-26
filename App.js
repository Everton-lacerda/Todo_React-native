import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';


// import { Container } from './styles';

export default function mobile() {

  const [todos, setTodos] = useState([
    { text: 'Comprar Café', key: '1'},
    { text: 'Criar um aplicativo', key: '2'},
    { text: 'Jogar um game', key: '3'}
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }
  const submitHandler = (text) => {

    if(text.length > 3 ) {
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos, 
      ]
    })
   } else {
     Alert.alert('OOPS!', 'As Tarefas devem no minimo 4 caracteres', [{
       text: 'Close', onPress: () => console.log('alert closed')
     }])
   }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      console.log('dismissed keyboard')
    }}>
      <View style={styles.container}>
      <Header />
        <View style={styles.content}>
        <AddTodo 
          submitHandler={submitHandler}
        />
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({item}) => (
                <TodoItem 
                  item={item}  
                  pressHandler={pressHandler}
                />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20
  }
})