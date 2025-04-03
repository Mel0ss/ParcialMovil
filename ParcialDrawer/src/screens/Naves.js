import { View, Text,FlatList, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react';

export default function Naves(){
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch('https://swapi.dev/api/starships/')
    .then((response)=>response.json())
    .then((json) => setData(json.results))
    .catch((error)=>console.log(error));
    }, [])
  
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index)=> index.toString()}
        renderItem={({item}) => (
          <View style={styles.espacio}>
            <View style={styles.ficha}>
              <Text>Nombre: {item.name}</Text>
              <Text>Modelo: {item.model}</Text>
              <Text>Capacidad: {item.passengers}</Text>
              <Text>Tamaño: {item.length}</Text>
            </View>
          </View>
        )}
        ListHeaderComponent={() => <Text style={styles.titulo}>Naves de Star wars</Text> }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a9cce3',
    paddingTop: 20,
    alignItems: 'center',
  },
  espacio: {
    marginVertical: 10,
    alignItems: 'center',
  },
  ficha: {
    width: 320,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#5499c7',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  imagenes: {
    width: 300,
    height: 360,
    borderRadius: 20,
  },
  nombre: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
});