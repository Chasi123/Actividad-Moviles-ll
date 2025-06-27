import {
    Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

export default function Tarjeta2Component(props: any) {
  //console.log(props.informacion);

    const [visible, setvisible] = useState(false)



  return (
    <View>
      <TouchableOpacity onPress={() => setvisible(!visible)}>
        <Text>{props.informacion.name}</Text>
        <Image style={styles.img} source={{ uri: props.informacion.image }} />
      </TouchableOpacity>
      <Modal visible={visible} transparent animationType="slide">
        <View style={styles.modal}>
            <Image style={styles.img} source={{ uri: props.informacion.image }} />
            <Text>{props.informacion.id}</Text>
            <Text>{props.informacion.name}</Text>
            <Text>{props.informacion.description}</Text>

            <Button title="Cerrar"
        onPress={() => setvisible(!visible)}/>  
        </View>

      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({

    
     modal: {
        backgroundColor: "#f1c6fb",
        flex: 1
    },
  img: {
    width: 200,
    height: 200,
  },
});
