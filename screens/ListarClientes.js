import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Alert, TouchableOpacity, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function ListarClientes({ navigation }) {
  const [clientes, setClientes] = useState([
    {
      nuevacedula: '001-230498-0001X',
      nuevosnombres: 'Carlos Andrés',
      nuevosapellidos: 'Ramirez López',
      nuevafechanac: '1998-04-23',
      nuevosexo: 'Masculino',
    },
    {
      nuevacedula: '002-150692-0002K',
      nuevosnombres: 'María Fernanda',
      nuevosapellidos: 'González Martínez',
      nuevafechanac: '1992-06-15',
      nuevosexo: 'Femenino',
    },
    {
      nuevacedula: '003-310100-0003L',
      nuevosnombres: 'Luis Enrique',
      nuevosapellidos: 'Pérez Gutiérrez',
      nuevafechanac: '2000-01-31',
      nuevosexo: 'Masculino',
    },
    {
      nuevacedula: '004-080385-0004M',
      nuevosnombres: 'Ana Lucía',
      nuevosapellidos: 'Vargas Muñoz',
      nuevafechanac: '1985-03-08',
      nuevosexo: 'Femenino',
    },
  ]);

  const guardarNuevo = (nuevoCliente) => {
    setClientes([
      ...clientes,
      {
        nuevacedula: nuevoCliente.cedula,
        nuevosnombres: nuevoCliente.nombres,
        nuevosapellidos: nuevoCliente.apellidos,
        nuevafechanac: nuevoCliente.fechanac,
        nuevosexo: nuevoCliente.sexo,
      },
    ]);
  };

  const eliminarCliente = (index) => {
    Alert.alert(
      'Confirmar eliminación',
      '¿Está seguro de que desea eliminar este cliente?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          onPress: () => {
            const nuevaLista = [...clientes];
            nuevaLista.splice(index, 1);
            setClientes(nuevaLista);
          },
          style: 'destructive',
        },
      ]
    );
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.item}>
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>
          <Text style={styles.label}>Cédula:</Text> {item.nuevacedula}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.label}>Nombres:</Text> {item.nuevosnombres}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.label}>Apellidos:</Text> {item.nuevosapellidos}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.label}>Fecha de nacimiento:</Text> {item.nuevafechanac}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.label}>Sexo:</Text> {item.nuevosexo}
        </Text>
      </View>
      <TouchableOpacity onPress={() => eliminarCliente(index)}>
        <MaterialCommunityIcons name="trash-can-outline" size={26} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Lista de Clientes</Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegistrarCliente', { guardarNuevo })}>
          <MaterialCommunityIcons name="account-plus-outline" size={30} color="green" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={clientes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f3e3',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green',
  },
  item: {
    backgroundColor: '#c6e8c6',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 15,
    marginBottom: 4,
  },
  label: {
    fontWeight: 'bold',
  },
});
