import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Entypo from '@expo/vector-icons/Entypo';

export default function LoginScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={[ styles.txt , {fontSize: 60} ]}>Login</Text>
      <TouchableOpacity style={styles.btn}
      onPress={() => navigation.navigate('Calculadora')}>
        <View style={styles.fila}>
        <Text style={styles.txt}>ir a calculadora</Text>
        <Entypo name="login" size={50} color="#f3f2c8" />
        </View>
        <Image source={require('../assets/image/calculadora.png')} style={styles.img} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#a8e5f5",
    },
    txt: {
        color: "#fcfdfc", 
        fontSize: 30,
    },
    btn:{
        backgroundColor: "#636136",
        width: "80%",
        height: 150,
        alignItems: "center",
        borderRadius: 50 ,
    },
    img:{
        width: 100,
        height: 100,
    },
    fila:{
        flexDirection: "row",
        
        
    }
});
