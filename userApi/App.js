import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Button, Spinner} from 'native-base';
import Axios from 'axios';

import User from './components/User';

const App = () => {
  const [details, setDetails] = useState(null);

  const fetchDetails = async () => {
    try {
      const {data} = await Axios.get('https://randomuser.me/api');
      const details = data.results[0];
      setDetails(details);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);
  if (!details) {
    return (
      <View style={styles.container}>
        <Spinner size="large" color="white"></Spinner>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View>
          <User details={details}></User>
          <Button rounded style={styles.button} onPress={() => fetchDetails()}>
            <Text style={{paddingHorizontal: 30}}>New user</Text>
          </Button>
        </View>
      </View>
    );
  }
};
export default App;

const styles = StyleSheet.create({
  container: {
    height: 500,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222831',
  },
  button: {
    marginTop: 30,
    alignSelf: 'center',
  },
});
