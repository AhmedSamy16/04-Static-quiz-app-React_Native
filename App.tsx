import { StatusBar, View, StyleSheet } from 'react-native';
import questions from './utils/questions';
import { useState } from 'react';
import Score from './components/Score';
import Question from './components/Question';

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [isShowScore, setIsShowScore] = useState(false)
  const [score, setScore] = useState(0)

  const q = questions[currentQuestionIndex]

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prev => prev + 1)
    }
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(prev => prev + 1)
    } else {
      setIsShowScore(true)
    }
  }
  const reset = () => {
    setCurrentQuestionIndex(0)
    setScore(0)
    setIsShowScore(false)
  }

  return (
    <View style={styles.page}>
      <View style={styles.app}>
        {
          isShowScore ? (
            <Score 
              reset={reset} 
              score={score} 
              questionsCount={questions.length} 
            />
          ) : (
            <Question
              currentIndex={currentQuestionIndex}
              handleAnswer={handleAnswer}
              question={q}
              questionCount={questions.length}
            />
          )
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#7cc6fe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  app: {
    backgroundColor: "#252d4a",
    width: 360,
    minHeight: 200,
    borderRadius: 15,
    padding: 20,
    justifyContent: "space-evenly",
    elevation: 5,
    shadowColor: "rgba(0, 0, 0, 0.75)"
  }
});
