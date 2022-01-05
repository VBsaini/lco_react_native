import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import diceOne from './assets/dice1.png';
import diceTwo from './assets/dice2.png';
import diceThree from './assets/dice3.png';
import diceFour from './assets/dice4.png';
import diceFive from './assets/dice5.png';
import diceSix from './assets/dice6.png';

const App = () => {
  const [uri, setUri] = useState(diceFive);
  const [uri2, setUri2] = useState(diceFive);
  const playOne = () => {
    let ranNum = Math.floor(Math.random() * 6) + 1;
    switch (ranNum) {
      case 1:
        setUri(diceOne);
        break;
      case 2:
        setUri(diceTwo);
        break;
      case 3:
        setUri(diceThree);
        break;
      case 4:
        setUri(diceFour);
        break;
      case 5:
        setUri(diceFive);
        break;
      case 6:
        setUri(diceSix);
        break;
      default:
        setUri(diceOne);
        break;
    }
  };
  const playTwo = () => {
    let ranNum = Math.floor(Math.random() * 6) + 1;
    switch (ranNum) {
      case 1:
        setUri2(diceOne);
        break;
      case 2:
        setUri2(diceTwo);
        break;
      case 3:
        setUri2(diceThree);
        break;
      case 4:
        setUri2(diceFour);
        break;
      case 5:
        setUri2(diceFive);
        break;
      case 6:
        setUri2(diceSix);
        break;
      default:
        setUri(diceOne);
        break;
    }
  };
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={playOne}>
          <Image source={uri} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={playTwo}>
          <Image source={uri2} style={[styles.image, {marginTop: 20}]} />
          {/* <TouchableOpacity onPress={play}> */}
          {/* <Text style={styles.text}>Play Game</Text> */}
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    color: '#f2a365',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderWidth: 3,
    borderColor: '#30475E',
    borderRadius: 5,
  },
});
export default App;
