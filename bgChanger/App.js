import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const App = () => {
  // const ranColor = 'rgb(32, 0, 162)';
  const [ranColor, setRanColor] = useState('rgb(32, 0, 162)');
  const changeBG = () => {
    let color = `rgb(
      ${Math.floor(Math.random() * 256)}, 
      ${Math.floor(Math.random() * 256)}, 
      ${Math.floor(Math.random() * 256)}
      )`;
    console.log(color);
    setRanColor(color);
  };
  const reset = () => {
    setRanColor('rgb(0, 0, 0)');
  };
  return (
    <>
      <StatusBar backgroundColor={ranColor} />
      <View style={[styles.container, {backgroundColor: ranColor}]}>
        <TouchableOpacity onPress={changeBG}>
          <Text style={styles.text}>Tap me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={reset}>
          <Text style={[styles.text, {marginTop: 30}]}> Reset</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    backgroundColor: '#BB2cd9',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: '#ffffff',
    textTransform: 'uppercase',
  },
});
