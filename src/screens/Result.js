import React, { useLayoutEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loggout, removeAllNotes, removeNote } from '../redux/actions';

import colors from '../colors-config/colors';

const Result = ({ navigation, route }) => {
  console.log('from Result');
  console.log(route.params.notes);
  const notes = useSelector((state) => state.notes);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => dispatch(loggout(navigation))}>
          <Text style={styles.logout}>Logout</Text>
        </Pressable>
      ),
    });
  }, [navigation]);

  const deleteNote = (note) => {
    // console.log(note);
    dispatch(removeNote(note));
  };
  
  const deleteAllNotes = () => {
    // console.log(note);
    dispatch(removeAllNotes());
  };

  const list = route.params.notes.map((e, i) => (
    <View key={i}>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{e[1]}</Text>
      </View>

      <Text style={styles.noteText}>"{e[0]}"</Text>
      {/* <Pressable >
        <Text style={styles.deleteText}>Delete</Text>
      </Pressable> */}
      <TouchableOpacity 
      style={styles.delete}
      onPress={() => deleteNote(e)}
      >
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  ));

  return (
    <View style={styles.container}>
      <View style={styles.noteContainer}>
        <ScrollView style={styles.scroll}>{list}</ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 120,
    paddingHorizontal: 30,
  },
  noteContainer: {
    borderRadius: 3,
    height: 650,
    padding: 15,
    textAlignVertical: 'top',
  },
  scroll: {
    height: 250,
  },
  dateContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lighterBlue,
  },
  date: {
    marginBottom: 0,
    color: colors.lightBlue,
  },
  delete: {
    flexDirection: 'row-reverse',
  },
  deleteText: {
    color: colors.pink,
    marginBottom: 30
  },
  noteText: {
    fontStyle: 'italic',
    fontSize: 20,
    color: colors.blue,
    padding: 10,
    paddingBottom: 25,
  },
  logout: {
    color: colors.yellow,
    fontSize: 18,
  },
});

export default Result;
