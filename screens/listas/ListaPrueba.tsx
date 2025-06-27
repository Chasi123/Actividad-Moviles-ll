import { FlatList, SectionList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Tarjeta3Component from "../../components/Tarjeta3Component";

export default function ListaLocalExterna() {
  const [datos, setdatos] = useState([]);

  async function leer() {
    const resp = await fetch(
      "https://jritsqmet.github.io/web-api/peliculas3.json"
    );
    const json = await resp.json();
    setdatos(json.peliculas);
  }

  useEffect(() => {
    leer();
    console.log(datos);
  }, []);
  return (
    <View>
      <Text>ListaLocalExterna</Text>
      <FlatList
        data={datos}
        renderItem={({ item }) => (
          <View>
            <Tarjeta3Component informacion ={item}/>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 20,
  },
});
