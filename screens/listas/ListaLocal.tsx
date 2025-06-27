import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import datos from "../../assets/Data/futurama.json"
import TarjetaComponent from "../../components/TarjetaComponent";

export default function ListaLocal() {
/*   const [lista, setlista] = useState([
    {
        "cedula": "1728793512",
        "nombre": "Chris",
        "edad": 25,
    },
    {
        "cedula": "1728553512",
        "nombre": "chasi",
        "edad": 15,
    },
    {
        "cedula": "178959312",
        "nombre": "mar",
        "edad": 22,
    }
  ]); */
  return (
    <View>
      <Text>Lista Local</Text>
      <FlatList data={datos}
      renderItem={ ( {item} ) => 
       <TarjetaComponent informacion = {item} />
      }/>
    </View>
  );
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 20
    },
    img: {
        width: 50,
        height: 50
    }
});
