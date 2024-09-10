'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Trash2, Save } from "lucide-react"

interface Word {
  id: string
  answer: string
  question: string
  quizName: string
}

export function QuizCreationForm() {
  const [quizName, setQuizName] = useState('')
  const [questions, setQuestions] = useState<Word[]>([])

  const addQuestion = () => {
    const newQuestion: Word = {
      id: `uuid${Date.now()}`,
      answer: '',
      question: '',
      quizName: quizName,
    }
    setQuestions([...questions, newQuestion])
  }

  const updateQuestion = (id: string, field: 'question' | 'answer', value: string) => {
    setQuestions(questions.map(q => q.id === id ? { ...q, [field]: value } : q))
  }

  const removeQuestion = (id: string) => {
    setQuestions(questions.filter(q => q.id !== id))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Quiz data:', { quizName, questions })
    // Here you would typically send this data to your backend
  }

  return (
    <div className="min-h-screen bg-white dark:bg-navy-900 text-gray-900 dark:text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-navy-600 dark:text-gold-400 mb-8">Create New Quiz</h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <Label htmlFor="quizName" className="text-lg font-semibold mb-2 block">Quiz Name</Label>
            <Input
              id="quizName"
              value={quizName}
              onChange={(e) => setQuizName(e.target.value)}
              className="w-full border-2 border-navy-300 dark:border-navy-700 rounded-md p-2"
              placeholder="Enter quiz name"
              required
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-navy-600 dark:text-gold-400">Questions</h2>
              <Button
                type="button"
                onClick={addQuestion}
                className="bg-scarlet-600 hover:bg-scarlet-700 text-white"
              >
                <Plus className="mr-2 h-4 w-4" /> Add Question
              </Button>
            </div>

            {questions.map((q, index) => (
              <div key={q.id} className="bg-navy-100 dark:bg-navy-800 p-4 rounded-lg space-y-4">
                <div>
                  <Label htmlFor={`question-${q.id}`} className="font-semibold mb-2 block">Question {index + 1}</Label>
                  <Textarea
                    id={`question-${q.id}`}
                    value={q.question}
                    onChange={(e) => updateQuestion(q.id, 'question', e.target.value)}
                    className="w-full border-2 border-navy-300 dark:border-navy-700 rounded-md p-2"
                    placeholder="Enter question"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor={`answer-${q.id}`} className="font-semibold mb-2 block">Answer</Label>
                  <Input
                    id={`answer-${q.id}`}
                    value={q.answer}
                    onChange={(e) => updateQuestion(q.id, 'answer', e.target.value)}
                    className="w-full border-2 border-navy-300 dark:border-navy-700 rounded-md p-2"
                    placeholder="Enter answer"
                    required
                  />
                </div>
                <Button
                  type="button"
                  onClick={() => removeQuestion(q.id)}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  <Trash2 className="mr-2 h-4 w-4" /> Remove
                </Button>
              </div>
            ))}
          </div>

          <Button type="submit" className="bg-navy-600 hover:bg-navy-700 text-white w-full">
            <Save className="mr-2 h-4 w-4" /> Save Quiz
          </Button>
        </form>
      </div>
    </div>
  )
}