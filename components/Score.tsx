import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

type ScoreProps = {
    reset: () => void,
    score: number,
    questionsCount: number
}

const Score = ({ reset, score, questionsCount }: ScoreProps) => {
    return (
        <View style={styles.scoreSection}>
        <Text style={[styles.text, { fontSize: 25, marginBottom: 15 }]}>
            You scored {score} out of {questionsCount}
        </Text>
        <TouchableOpacity style={styles.btn} onPress={reset}>
            <Text style={[styles.btnText, styles.text]}>reset</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    scoreSection: {
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 25
    },
    btn: {
        width: "100%",
        backgroundColor: "#252d4a",
        borderRadius: 15,
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 5,
        borderColor: "#234668",
        marginBottom: 10
    },
    btnText: {
        fontSize: 16
    },
    text: {
        color: "white"
    }
})

export default Score