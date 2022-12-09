import React from "react";
import { View, Text, StyleSheet, Image, Button, Alert } from "react-native";

import { clientDeleteGame } from "../../api/api";

import { gameInterface } from "../../interfaces/gameInterface";

const deletingGame = (id:number) => {
    Alert.alert(
        "Delete game", 
        "thanks for delete game",
    [
        { text: 'OK', onPress:()=> clientDeleteGame(id)}
    ]
    )
}

export function GameCardDelete(props: gameInterface | any){
    return(
        <View style={styles.Cardcontainer}>
            <View>
                <Image 
                 source={{uri: props.cover}}
                 style={styles.card}
                />
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.label}>{props.name}</Text>
                <Button
                onPress={() => deletingGame(props.id)}
                title="Delete"
                color="#9AC33C"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Cardcontainer:{
        borderWidth: 2,
        padding: 10,
        borderBottomColor: '#FFF',
        width: '100%',
        borderRadius: 8,
        flexDirection: 'row',
        backgroundColor: '#404040'
    },
    card: {
        borderRadius:10,
        width: 200,
        height: 300,
    },
    label:{
        fontSize: 22,
        color: 'white',
        paddingBottom: 15,
        textAlign: 'center'
    },
    infoContainer:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: 20,
    }
})