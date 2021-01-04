/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const CallApiVanilla = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  const [dataPost, setDataPost] = useState({
    name: '',
    job: '',
  });
  useEffect(() => {
    // Call Api MEthod GET
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
    //Call Api Method POST https://reqres.in/api/users
    // const dataForAPI = {
    //   name: 'morpheus',
    //   job: 'leader',
    // };
    // console.log('data object', dataForAPI);
    // console.log('data stringify', JSON.stringify(dataForAPI));
    // fetch('https://reqres.in/api/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(dataForAPI),
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log('post response', json));
  }, []);

  const getData = () => {
    fetch('https://reqres.in/api/users/2')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setDataUser(json.data);
      });
  };

  const postData = () => {
    const dataForAPI = {
      name: 'morpheus',
      job: 'leader',
    };
    // console.log('data object', dataForAPI);
    // console.log('data stringify', JSON.stringify(dataForAPI));
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForAPI),
    })
      .then((response) => response.json())
      .then((json) => {
        setDataPost(json);
        // console.log('post response', json);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>CAll Api Vanilla Js</Text>
      <Button onPress={getData} title="GET DATA" />
      <Text>Response GET DATA</Text>
      <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>

      <View style={styles.line} />
      <Button title="POST DATA" onPress={postData} />
      <Text>Response POST DATA</Text>
      <Text>{dataPost.name}</Text>
      <Text>{dataPost.job}</Text>
    </View>
  );
};

export default CallApiVanilla;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  avatar: {width: 100, height: 100, borderRadius: 100},
});
