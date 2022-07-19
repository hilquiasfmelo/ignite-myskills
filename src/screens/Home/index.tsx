import React, {Fragment, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, FlatList} from 'react-native';
import {Button} from '../../components/Button';
import {SkillCard} from '../../components/SkillCard';

type SkillData = {
  id: string;
  name: string;
};

export default function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    } as SkillData;

    setMySkills([...mySkills, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkills(state => state.filter(skill => skill.id !== id));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Good morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good night');
    }
  }, []);

  return (
    <Fragment>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Hilquias</Text>
        <Text style={{color: '#fff'}}>{greeting}</Text>

        <TextInput
          style={styles.input}
          placeholder="New Skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
          keyboardAppearance='dark'
          keyboardType='web-search'
        />

        <Button onPress={handleAddNewSkill} title="Add" activeOpacity={0.7} />

        <Text style={[styles.title, {marginVertical: 40}]}>My Skills</Text>

        <FlatList
          data={mySkills}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <SkillCard
              onPress={() => handleRemoveSkill(item.id)}
              skill={item.name}
            />
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
    paddingHorizontal: 30,
    paddingVertical: 20,
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
