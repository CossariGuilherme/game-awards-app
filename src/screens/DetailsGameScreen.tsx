import React, { useState, useCallback, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import { useFocusEffect } from "@react-navigation/native";

import { gameInterface } from "../interfaces/gameInterface";
import { clientGetDetailGame } from "../api/api";

import { DetailGame } from "../components/DetailGame/DetailGame";

export function DetailsGameScreen(props: number | any) {
  const [game, setGame] = useState<gameInterface>({
    id: 0,
    name: "--",
    description: "--",
    cover: "--",
    votes: 0,
  });

  useEffect(
    useCallback(() => {
      (async () => {
        const detailGame = await clientGetDetailGame(props.route.params.id);
        setGame(detailGame);
      })();
    }, [game])
  );

  return (
    <View style={styles.container}>
      <DetailGame
        name={game.name}
        description={game.description}
        cover={game.cover}
        votes={game.votes}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    alignItems: "center",
    justifyContent: "center",
  },
});
