"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { Navbar } from "@/components/Navbar"

const topics = [
  { name: "Arrays", questions: ["Merge 2 Arrays", "Remove Duplicates", "Find Maximum Subarray"] },
  { name: "2 Pointer", questions: ["Reverse String", "Container With Most Water", "3Sum"] },
  { name: "Trees", questions: ["Inorder Traversal", "Level Order Traversal", "Validate BST"] },
  { name: "Graph", questions: ["DFS", "BFS", "Dijkstra's Algorithm"] },
  { name: "Linked List", questions: ["Reverse Linked List", "Detect Cycle", "Merge K Sorted Lists"] },
  {
    name: "Dynamic Programming",
    questions: ["Fibonacci Number", "Longest Increasing Subsequence", "Knapsack Problem"],
  },
]

export default function AlgoMap() {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null)
  const [progress, setProgress] = useState<{ [key: string]: number }>(
    Object.fromEntries(topics.map((topic) => [topic.name, 0])),
  )

  const toggleTopic = (topicName: string) => {
    setExpandedTopic(expandedTopic === topicName ? null : topicName)
  }

  const toggleQuestion = (topicName: string, questionIndex: number) => {
    setProgress((prev) => {
      const topicProgress = prev[topicName]
      const questionCount = topics.find((t) => t.name === topicName)?.questions.length || 1
      const newProgress =
        topicProgress === 100
          ? ((questionCount - 1) * 100) / questionCount
          : ((Math.floor(topicProgress / (100 / questionCount)) + 1) * 100) / questionCount
      return { ...prev, [topicName]: newProgress }
    })
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 dark:text-white text-center">Algo Map</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <motion.div
              key={topic.name}
              className={`bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden ${
                expandedTopic === topic.name ? "col-span-full" : ""
              }`}
              layout
              onClick={() => toggleTopic(topic.name)}
            >
              <div className="p-6">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2 dark:text-white text-center">{topic.name}</h2>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mr-2">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress[topic.name]}%` }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {Math.round(progress[topic.name])}%
                  </span>
                </div>
                {expandedTopic === topic.name && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-4">
                    {topic.questions.map((question, index) => (
                      <div key={index} className="flex items-center mt-2">
                        <input
                          type="checkbox"
                          id={`${topic.name}-${index}`}
                          className="hidden"
                          checked={progress[topic.name] > (index * 100) / topic.questions.length}
                          onChange={() => toggleQuestion(topic.name, index)}
                        />
                        <label htmlFor={`${topic.name}-${index}`} className="flex items-center cursor-pointer">
                          <div className="w-6 h-6 border-2 border-gray-400 dark:border-gray-600 rounded-full mr-2 flex items-center justify-center">
                            {progress[topic.name] > (index * 100) / topic.questions.length && (
                              <CheckCircle2 className="w-5 h-5 text-green-500" />
                            )}
                          </div>
                          <span className="dark:text-white text-sm">{`${index + 1}. ${question}`}</span>
                        </label>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="w-full py-4 px-4 md:px-6 border-t z-10">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center sm:text-left">
            © 2025 Jayanth Studios. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link className="text-xs hover:underline underline-offset-4" href="#contact">
              Contact Me
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Twitter
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              GitHub
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

