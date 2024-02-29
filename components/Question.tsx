import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type QuestionProps = {
    questionCount: number,
    handleAnswer: (isCorrect: boolean) => void,
    currentIndex: number,
    question: {
        questionText: string;
        answerOptions: {
        answerText: string;
        isCorrect: boolean;
        }[]
    }
}

const Question = ({ handleAnswer, currentIndex, question, questionCount }: QuestionProps) => {
    return (
        <>
        <View style={styles.questionSection}>
            <View style={styles.questionCount}>
            <Text style={styles.text}>
                <Text style={styles.questionNumber}>Question {currentIndex + 1}</Text>/{questionCount}
            </Text>
            <Text style={[styles.questionText, styles.text]}>- {question.questionText}</Text>
            </View>
        </View>
        <View style={styles.answerSection}>
            {question.answerOptions.map(ao => (
            <TouchableOpacity style={styles.btn} onPress={() => handleAnswer(ao.isCorrect)} key={ao.answerText}>
                <Text style={[styles.text, styles.btnText]}>{ao.answerText}</Text>
            </TouchableOpacity>
            ))}
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    questionSection: {
        width: "100%"
    },
    questionCount: {
        marginBottom: 20
    },
    questionNumber: {
        fontSize: 28
    },
    questionText: {
        marginVertical: 12,
        fontSize: 20
    },
    answerSection: {
        width: "100%",
        justifyContent: "space-between"
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

export default Question