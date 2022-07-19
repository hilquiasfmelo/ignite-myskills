import React, {Fragment, useState} from 'react';
import {View, Text, StyleSheet, TextInput, FlatList} from 'react-native';
import {Button} from '../../components/Button';
import {SkillCard} from '../../components/SkillCard';

export default function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills([...mySkills, newSkill]);
    console.log(mySkills)
  }

  return (
    <Fragment>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Hilquias</Text>

        <TextInput
          style={styles.input}
          placeholder="New Skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
        />

        <Button onPress={handleAddNewSkill} />

        <Text style={[styles.title, {marginVertical: 40}]}>My Skills</Text>

        <FlatList
          data={mySkills}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <SkillCard skill={item} />
          )}
        />
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7,
  },
});
