import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function WelcomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bienvenido a MiApp</Text>
      <Text style={styles.subtitulo}>
        Christopher Chasiloa
      </Text>
      <Text style={styles.subtitulo}>
        Chasi123
      </Text>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3e5f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#6a1b9a",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 18,
    color: "#555",
    marginBottom: 40,
    textAlign: "center",
    paddingHorizontal: 20,
  },

});
