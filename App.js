import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Image, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBolt, faTint, faFire, faLeaf } from '@fortawesome/free-solid-svg-icons';

const datasource = [
  {
    title: "ELECTRIC",
    bgcolor: '#FFD700',
    textColor: '#CC9900',
    icon: faBolt,
    data: [
      { key: 'Pikachu', cardNumber: 25 },
      { key: 'Voltorb', cardNumber: 100 },
    ]
  },
  {
    title: "FIRE",
    bgcolor: '#FF4500',
    textColor: '#B33D00',
    icon: faFire,
    data: [
      { key: 'Charmander', cardNumber: 4 },
      { key: 'Growlithe', cardNumber: 58 },
    ]
  },
  {
    title: "WATER",
    bgcolor: '#1E90FF',
    textColor: '#1A75D1',
    icon: faTint,
    data: [
      { key: 'Squirtle', cardNumber: 7 },
      { key: 'Psyduck', cardNumber: 54 },
    ]
  },
  {
    title: "GRASS",
    bgcolor: '#32CD32',
    textColor: '#2B7F2B',
    icon: faLeaf,
    data: [
      { key: 'Bulbasaur', cardNumber: 1 },
      { key: 'Oddish', cardNumber: 43 },
    ]
  },
];

const renderItem = ({ item }) => {
  // Generate the image URL dynamically based on the cardNumber
  const updatedImage = `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${item.cardNumber}.png`;

  return (
      <TouchableOpacity style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>{item.key}</Text>
          </View>
          <Image source={{ uri: updatedImage }} style={styles.imageStyle} />
        </View>
      </TouchableOpacity>
  );
};

const renderSectionHeader = ({ section: { title, bgcolor, icon, textColor } }) => {
  return (
      <View style={[styles.headerContainer, { backgroundColor: bgcolor }]}>
        <FontAwesomeIcon icon={icon} size={30} color="black" />
        <Text style={[styles.headerText, { color: textColor }]}>{title}</Text>
      </View>
  );
};

export default function App() {
  return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.buttonContainer}>
          <Button title="ADD POKEMON" onPress={() => alert('Add Pokémon!')} />
        </View>
        <SectionList
            sections={datasource}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            keyExtractor={(item) => item.key}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#F0F0F0',
  },
  buttonContainer: {
    marginHorizontal: 10,
    marginVertical: 15,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 5,
    overflow: 'hidden',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 5,
  },
  headerText: {
    fontSize: 24,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#CBC3E3',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageStyle: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
