// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "What is recurrence for worst case of QuickSort and what is the time complexity in Worst case?",
    answer: "Recurrence is T(n) = T(n-1) + O(n) and time complexity is O(n^2)",
    options: [
      "Recurrence is T(n) = T(n-2) + O(n) and time complexity is O(n^2)",
      "Recurrence is T(n) = T(n/10) + T(9n/10) + O(n) and time complexity is O(nLogn)",
      "Recurrence is T(n) = T(n-1) + O(n) and time complexity is O(n^2)",
      "None of the Above"
    ]
  },
    {
    numb: 2,
    question: "Suppose we have a O(n) time algorithm that finds median of an unsorted array. Now consider a QuickSort implementation where we first find median using the above algorithm, then use median as pivot. What will be the worst case time complexity of this modified QuickSort.",
    answer: "O(nLogn)",
    options: [
      "O(n^2 Logn)",
      "O(n^2)",
      "O(nLogn)",
      "None"
    ]
  },
    {
    numb: 3,
    question: " Which of the following is not a reserved word in JavaScript?",
    answer: "program",
    options: [
      "interface",
      "throws",
      "program",
      "short"
    ]
  },
    {
    numb: 4,
    question: "How can you access the state of a component from inside of a member function??",
    answer: "Methods",
    options: [
      "Methods",
      "Injected",
      "Both 1 & 2",
      "All of the above"
    ]
  },
    {
    numb: 5,
    question: "JavaScript is a ________ Side Scripting Language.",
    answer: "Browser",
    options: [
      "Server",
      "Isp",
      "Compiler",
      "Browser"
    ]
  },
  

    {
    numb: 6,
    question: "A state in React.js is also known is ..............",
    answer: "An Internal storage of the component",
    options: [
      "A permanent storage",
      "An Internal storage of the component",
      "An External storage of the component",
      "All of the above"
    ]
  },
  {
    numb: 7,
    question: "ReactJS uses _____ to increase performance",
    answer: "Virtual DOM",
    options: [
      "Original DOM",
      "Virtual DOM",
      "Both 1 & 2",
      "None of above"
    ]
  },
  {
    numb: 8,
    question: "Which function of an Array object calls a function for each element in the array?",
    answer: "forEach()",
    options: [
      "forEach()",
      "every",
      "forEvery()",
      "None of the Above"
    ]
  },
  {
    numb: 9,
    question: "Which function is used to change the state of react component??",
    answer: "this.setState",
    options: [
      "this.State{}",
      "this.setState",
      "this.setChangeState",
      "None of the Above"
    ]
  },
  {
    numb: 10,
    question: "Which of the following is an advantage of using JavaScript?",
    answer: " All of the above.",
    options: [
      "Less server interaction. r",
      " Increased interactivity.",
      "Immediate feedback from the users",
      " All of the above."
    ]
  },
  
];