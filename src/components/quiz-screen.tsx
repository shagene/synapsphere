'use client'

import React, { useState, useEffect } from 'react'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, XCircle } from 'lucide-react'

interface Word {
  id: string
  answer: string
  question: string
  quizName: string
}

const initialWords: Word[] = [
  { id: 'uuid1', answer: '40', question: 'What is 20 + 20?', quizName: 'Week 1 Lesson 2 Math' },
  { id: 'uuid2', answer: '20', question: 'What is 10 + 10?', quizName: 'Week 1 Lesson 2 Math' },
  { id: 'uuid3', answer: '15', question: 'What is 3 x 5?', quizName: 'Week 1 Lesson 2 Math' },
  { id: 'uuid4', answer: '50', question: 'How many states are in the United States of America?', quizName: 'Week 2 Lesson 1 Social Studies' },
  { id: 'uuid5', answer: 'Atlantic Ocean', question: 'What ocean is on the East Coast of America?', quizName: 'Week 2 Lesson 1 Social Studies' },
]

const AnswerItem: React.FC<{ word: Word; onDrop: (id: string, targetId: string) => void }> = ({ word, onDrop }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'answer',
    item: { id: word.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div
      ref={drag}
      className={`p-2 mb-2 bg-navy-100 dark:bg-navy-700 rounded-md cursor-move ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
    >
      {word.answer}
    </div>
  )
}

const QuestionItem: React.FC<{ word: Word; userAnswer: string | null; isCorrect: boolean | null; onDrop: (id: string) => void }> = ({ word, userAnswer, isCorrect, onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'answer',
    drop: (item: { id: string }) => onDrop(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  return (
    <Card className={`p-4 mb-4 ${isOver ? 'bg-navy-200 dark:bg-navy-600' : 'bg-white dark:bg-navy-800'}`} ref={drop}>
      <div className="font-semibold mb-2">{word.question}</div>
      {userAnswer && (
        <div className={`p-2 rounded-md ${isCorrect === null ? 'bg-navy-100 dark:bg-navy-700' : isCorrect ? 'bg-green-100 dark:bg-green-800' : 'bg-red-100 dark:bg-red-800'}`}>
          {userAnswer}
          {isCorrect !== null && (
            <span className="ml-2">
              {isCorrect ? (
                <CheckCircle className="inline-block w-5 h-5 text-green-500" />
              ) : (
                <XCircle className="inline-block w-5 h-5 text-red-500" />
              )}
            </span>
          )}
        </div>
      )}
    </Card>
  )
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

interface QuizScreenProps {
  selectedQuizName: string
}

export function QuizScreen({ selectedQuizName }: QuizScreenProps) {
  const [words, setWords] = useState<Word[]>([])
  const [shuffledAnswers, setShuffledAnswers] = useState<Word[]>([])
  const [answers, setAnswers] = useState<{ [key: string]: string | null }>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const filteredWords = initialWords.filter(word => word.quizName === selectedQuizName)
    const shuffledWords = shuffleArray(filteredWords)
    setWords(shuffledWords)
    setShuffledAnswers(shuffleArray(shuffledWords))
    const initialAnswers = shuffledWords.reduce((acc, word) => ({ ...acc, [word.id]: null }), {})
    setAnswers(initialAnswers)
  }, [selectedQuizName])

  const handleDrop = (answerId: string, questionId: string) => {
    const answerWord = shuffledAnswers.find(w => w.id === answerId)
    if (answerWord) {
      setAnswers(prev => ({ ...prev, [questionId]: answerWord.answer }))
    }
  }

  const handleSubmit = () => {
    setIsSubmitted(true)
  }

  const getIsCorrect = (word: Word): boolean | null => {
    if (!isSubmitted) return null
    return answers[word.id] === word.answer
  }

  const handleReset = () => {
    const filteredWords = initialWords.filter(word => word.quizName === selectedQuizName)
    const shuffledWords = shuffleArray(filteredWords)
    setWords(shuffledWords)
    setShuffledAnswers(shuffleArray(shuffledWords))
    const initialAnswers = shuffledWords.reduce((acc, word) => ({ ...acc, [word.id]: null }), {})
    setAnswers(initialAnswers)
    setIsSubmitted(false)
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-white dark:bg-navy-900 text-gray-900 dark:text-gray-100 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-navy-600 dark:text-gold-400 mb-8">{selectedQuizName}</h1>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <h2 className="text-2xl font-semibold text-navy-600 dark:text-gold-400 mb-4">Answers</h2>
              {shuffledAnswers.map(word => (
                <AnswerItem key={word.id} word={word} onDrop={(id) => handleDrop(id, word.id)} />
              ))}
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold text-navy-600 dark:text-gold-400 mb-4">Questions</h2>
              {words.map(word => (
                <QuestionItem
                  key={word.id}
                  word={word}
                  userAnswer={answers[word.id]}
                  isCorrect={getIsCorrect(word)}
                  onDrop={(id) => handleDrop(id, word.id)}
                />
              ))}
              {!isSubmitted ? (
                <Button
                  onClick={handleSubmit}
                  disabled={Object.values(answers).some(a => a === null)}
                  className="mt-4 bg-scarlet-600 hover:bg-scarlet-700 text-white"
                >
                  Submit
                </Button>
              ) : (
                <Button
                  onClick={handleReset}
                  className="mt-4 bg-navy-600 hover:bg-navy-700 text-white"
                >
                  Reset Quiz
                </Button>
              )}
              {isSubmitted && (
                <div className="mt-4 text-lg font-semibold text-navy-600 dark:text-gold-400">
                  Score: {words.filter(w => answers[w.id] === w.answer).length} / {words.length}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  )
}