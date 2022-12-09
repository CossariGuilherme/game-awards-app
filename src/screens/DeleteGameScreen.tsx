import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { clientGetGames } from "../api/api";

import { GameCardDelete } from "../components/DeleteGame/GameCardDelete";
import { Header } from "../components/Header/Header";

export function DeleteGameScreen(){
    const [gameList, setGameList] = useState([])
    useEffect(() => {
        (async () => {
            const response = await clientGetGames()
            setGameList(response)
        })()
    })

    return (
        <View style={styles.container}>
            <Header />

            <ScrollView style={styles.gameArea}>
                {gameList.map(game => GameCardDelete(game))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#191919',
      alignItems: 'center',
      justifyContent: 'center',
    },
    gameArea:{
        flex: 1,
        paddingTop: 10,
        paddingBottom: 20,
        width: '100%',
    }
  });
  