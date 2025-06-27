import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function TarjetaComponent(props : any) {
    //console.log(props.informacion.name.first);
    
    function mostrarMas (data: any){
        Alert.alert("Informacion", data.name.fisrt + " Trabaja como" + data.occupation)

    }

  return (
    <TouchableOpacity 
    style={styles.btn}
    onPress={() => mostrarMas (props.informacion)}>
        <Image style={styles.img} source={{uri: props.informacion.images.main}}/>
        <View >
        <Text >{props.informacion.species} </Text>
        <Text >{props.informacion.homePlanet}</Text>
        <Text style={styles.txt} >{props.informacion.name.first}</Text> 
        <Text >{props.informacion.name.last}</Text> 
        </View>
        
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
   

    btn:{
        backgroundColor: "#313f59",
        margin:5,
        borderRadius: 30,
        flexDirection: 'row'
    },
    container: {
        justifyContent: 'center',
        flex: 1
    },
    img: {
        width: 200,
        height: 200,
    },
    txt: {
        fontSize: 20
    },
})