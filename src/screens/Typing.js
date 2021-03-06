import React, { useState, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { loggout, notes } from "../redux/actions";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import colors from "../colors-config/colors";

const Typing = ({ navigation, route })=> {
  const [note, setNote] = useState("");
  const [alert, setAlert] = useState("");

  const dispatch = useDispatch();

  let flag = true;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => dispatch(loggout(navigation))}>
          <Text style={styles.logout}>Logout</Text>
        </Pressable>
      ),
    });
  }, [navigation]);

  const handleChange = (name, value) => {
    setNote(value);
    setAlert("");
  };

  if (note && /\S/.test(note)) {
    flag = false;
  } else {
    flag = true;
  }
  const onSubmit = () => {
    if (flag) {
      setAlert("Please Type Your Note Before Saving.");
    } else {
      const date = new Date();

      dispatch(
        notes(
          note,
          `${date.getHours()}:${date.getMinutes()} ${date.toLocaleDateString(
            "en-US"
          )}. `
        )
      );

      setNote("");

      navigation.navigate({
        name: "Result",
        merge: true,
        params: route.params
      });
    }
  };

  const goToNotes = () => {
    navigation.navigate({
      name: "Result",
      merge: true,
      params: route.params
    });
  };

  return (
    <View style={styles.container}>
      {route.params.auth.value ? (
        <View>
          <View style={styles.header}>
            <Image
              style={styles.image}
              source={require("../images/idea.png")}
            />
            <View style={styles.insideHeader}>
              <Text style={styles.headerText}>
                Hello {route.params.auth.value?.username}
              </Text>
              <Text>Write notes, ideas, todos, and save!</Text>
            </View>
          </View>

          <Text style={styles.alert}>{alert}</Text>

          <ScrollView style={styles.scroll}>
            <TextInput
              style={styles.input}
              placeholder="Type ..."
              autoCapitalize="none"
              multiline={true}
              selectionColor={colors.yellow}
              value={note}
              onChangeText={(value) => handleChange("typing", value)}
            />
          </ScrollView>

          <Pressable
            style={note && /\S/.test(note) ? styles.save : styles.disable}
            onPress={onSubmit}
          >
            <Text style={styles.saveText}>Save</Text>
          </Pressable>

          <Pressable style={styles.save} onPress={goToNotes}>
            <Text style={styles.saveText}>Go To Notes</Text>
          </Pressable>
        </View>
      ) : (
        navigation.navigate({
          name: "Login",
          merge: true,
        })
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
  },
  header: {
    paddingTop: 120,
    flexDirection: "row",
    alignItems: "center",
    width: 300,
  },
  image: {
    height: 100,
    width: 100,
  },
  insideHeader: {
    padding: 10,
    width: 200,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  alert: {
    color: colors.darkPink,
    marginTop: 10,
    marginBottom: 5,
    height: 20,
  },
  scroll: {
    height: 250,
  },
  input: {
    backgroundColor: colors.lighterBlue,
    borderRadius: 5,
    height: 250,
    padding: 15,
    textAlignVertical: "top",
  },
  save: {
    alignItems: "center",
    backgroundColor: colors.blue,
    borderRadius: 3,
    marginTop: 20,
    padding: 8,
  },
  disable: {
    alignItems: "center",
    backgroundColor: colors.lighterBlue,
    borderRadius: 3,
    marginTop: 20,
    padding: 8,
  },
  saveText: {
    color: colors.white,
    fontSize: 18,
    lineHeight: 35,
    fontWeight: "bold",
  },
  logout: {
    color: colors.yellow,
    fontSize: 18,
  },
});

export default Typing;
