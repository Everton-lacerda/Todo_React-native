import React from 'react';
import { View, StyleSheet, Text, } from 'react-native';


// import { Container } from './styles';

export default function Header() {
  return (
    <View style={style.header}>
        <Text style={style.title}>TENHO QUE FAZER</Text>
    </View>
  );
}

const style = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral'
    },
    title: {
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
})
