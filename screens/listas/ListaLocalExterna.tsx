import { SectionList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Tarjeta2Component from "../../components/Tarjeta2Component";

export default function ListaLocalExterna() {
  const [datos, setdatos] = useState([]);

  async function leer() {
    const resp = await fetch(
      "https://jritsqmet.github.io/web-api/assets/data/api2/sections/crash-s.json"
    );
    const json = await resp.json();
    setdatos(json);
  }

  useEffect(() => {
    leer();
    console.log(datos);
  }, []);
  return (
    <View>
      <Text>ListaLocalExterna</Text>
      <SectionList
        sections={datos}
        renderItem={({ item }) => (
          <View>
            <Tarjeta2Component informacion ={item}/>
          </View>
        )}
        renderSectionHeader={({ section :  {title}} : any) => 
        <Text style={{fontSize: 30}}>{title}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 20,
  },
});
