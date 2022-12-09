import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { gameInterface } from "../../interfaces/gameInterface";

export function DetailGame(props: gameInterface | any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.name}</Text>
      <Image source={{ uri: props.cover }} style={styles.card} />
      <Text style={styles.gameLabel}>Descrição {props.description}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#fff",
    backgroundColor: "#191919",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 20,
  },
  img: {
    borderWidth: 3,
    borderColor: "#fff",
    borderRadius: 30,
    marginBottom: 40,
  },
  title: {
    color: "#fff",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  gameLabel: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
  },
  winnerLabel: {
    backgroundColor: "#0EC244",
    borderRadius: 4,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    paddingTop: 10,
    width: "80%",
    marginTop: 10,
  },
  card: {
    borderRadius: 10,
    width: 200,
    height: 300,
  },
});
