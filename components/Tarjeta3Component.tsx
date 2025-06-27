import { Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Tarjeta3Component(props : any) {

const [visible, setvisible] = useState(false)
  return (
    <View>
        <TouchableOpacity  style={styles.btn}
        onPress={() => setvisible(!visible)}>
        <Image style={styles.img} source={{uri: props.informacion.imagen}}/>
      <Text style={styles.txt}>{props.informacion.titulo}</Text>

      </TouchableOpacity>

      <Modal style={styles.modal} visible={visible}>
        <View >
            <Text style={styles.txt}>{props.informacion.titulo}</Text>
            <Image style={styles.img} source={{uri: props.informacion.imagen}}/>
            <Text>{props.informacion.descripcion}</Text>

             <Button title="Cerrar"
                    onPress={() => setvisible(!visible)}/>  
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    img: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  modal:{
    
  },
  txt:{

    fontSize: 20

  },

    btn:{
        backgroundColor: "#313f59",
        margin:5,
        borderRadius: 30,
        flexDirection: 'row'
  }
})