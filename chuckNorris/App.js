import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Axios from 'axios';
import {Button, Spinner, H1} from 'native-base';
const App = () => {
  const [joke, setJoke] = useState(null);
  const fetchData = async () => {
    setJoke(null);
    const {data} = await Axios.get('https://api.chucknorris.io/jokes/random');
    setJoke(data.value);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <H1 style={styles.heading}>Chuck norris Joke Generator</H1>
      {joke ? (
        <View>
          <Text style={styles.joke}>{joke}</Text>
          <Button
            style={styles.button}
            onPress={() => {
              fetchData();
            }}>
            <Text>Generate</Text>
          </Button>
        </View>
      ) : (
        <View style={styles.Spinnercontainer}>
          <Spinner></Spinner>
        </View>
      )}

      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#120E43',
  },
  Spinnercontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#120E43',
  },
  heading: {
    color: '#fff',
    marginTop: 100,
    borderBottomColor: '#6EC72D',
    paddingBottom: 10,
    borderBottomWidth: 2,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#6EC72D',

    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  joke: {
    fontSize: 18,
    color: '#fff',
    marginHorizontal: 20,
    marginBottom: 100,
  },
});
export default App;
