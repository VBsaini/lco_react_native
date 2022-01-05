import React, {useState} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import {Container, Form, Item, Input, H1, Button} from 'native-base';
import shortid from 'shortid';
import AsyncStorage from '@react-native-community/async-storage';
import Snackbar from 'react-native-snackbar';
const Add = ({navigation}) => {
  const [name, setName] = useState('');
  const [totalSeasons, setTotalSeasons] = useState('');

  const addToList = async () => {
    try {
      if (!name && !totalSeasons) {
        return Snackbar.show({
          text: 'Pleas enter show name and seasons ',
        });
      }
      const seasonToAdd = {
        id: shortid.generate(),
        name: name,
        totalSeasons: totalSeasons,
        isWatched: false,
      };
      const storedValue = await AsyncStorage.getItem('@season_list');
      const prevList = await JSON.parse(storedValue);
      if (!prevList) {
        const newList = [seasonToAdd];
        await AsyncStorage.setItem('@season_list', JSON.stringify(newList));
      } else {
        prevList.push(seasonToAdd);
        await AsyncStorage.setItem('@season_list', JSON.stringify(prevList));
      }
      setName('');
      setTotalSeasons('');
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <H1 style={styles.heading}>Add to watch list</H1>
        <Form>
          <Item rounded style={styles.formItem}>
            <Input
              placeholder="Show Name"
              style={{color: '#eee'}}
              value={name}
              onChangeText={text => {
                setName(text);
              }}
            />
          </Item>
          <Item rounded style={styles.formItem}>
            <Input
              placeholder="Total Number of Seasons"
              style={{color: '#eee'}}
              keyboardType="number-pad"
              value={totalSeasons}
              onChangeText={text => {
                setTotalSeasons(text);
              }}
            />
          </Item>
          <Button rounded block onPress={addToList}>
            <Text style={{color: '#eee', fontSize: 20}}>Add</Text>
          </Button>
        </Form>
      </ScrollView>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b262c',
    flex: 1,
    justifyContent: 'flex-start',
  },
  heading: {
    textAlign: 'center',
    color: '#00b7c2',
    marginHorizontal: 5,
    marginTop: 50,
    marginBottom: 20,
  },
  formItem: {
    marginBottom: 20,
  },
});
export default Add;
