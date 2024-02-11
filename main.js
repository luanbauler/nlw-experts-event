const questions = [
    {
      question:
        'Qual é a palavra-chave utilizada para declarar uma variável em JavaScript?',
      answer: ['var', 'let', 'const'],
      correct: 1
    },
    {
      question:
        'Em JavaScript, qual função é usada para imprimir algo no console?',
      answer: ['console.log()', 'print()', 'log.console()'],
      correct: 0
    },
    {
      question:
        'Como se verifica se duas variáveis têm o mesmo valor e tipo em JavaScript?',
      answer: ['==', '===', '='],
      correct: 1
    },
    {
      question: 'O que o operador "typeof" faz em JavaScript?',
      answer: [
        'Verifica se uma variável é definida',
        'Retorna o tipo de dados de uma variável',
        'Compara dois valores'
      ],
      correct: 1
    },
    {
      question:
        'Qual é a maneira correta de comentar uma única linha em JavaScript?',
      answer: ['// Comentário', '/* Comentário */', '<!-- Comentário -->'],
      correct: 0
    },
    {
      question: 'O que o código `NaN === NaN` retorna em JavaScript?',
      answer: ['true', 'false', 'undefined'],
      correct: 1
    },
    {
      question: 'Como você declara uma função em JavaScript?',
      answer: [
        'function minhaFuncao() {}',
        'var minhaFuncao = function() {}',
        'Ambas as opções anteriores estão corretas'
      ],
      correct: 2
    },
    {
      question: 'O que o operador "%" faz em JavaScript?',
      answer: [
        'Divide dois números e retorna o quociente',
        'Retorna o resto da divisão entre dois números',
        'Multiplica dois números'
      ],
      correct: 1
    },
    {
      question: 'Qual é o resultado da expressão `5 + "5"` em JavaScript?',
      answer: ['10', '"55"', '55'],
      correct: 1
    },
    {
      question:
        'Em JavaScript, como você cria um loop que se repete enquanto uma condição for verdadeira?',
      answer: ['for', 'while', 'loop'],
      correct: 1
    }
  ]
  
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
  
const corrects = new Set()
  
const totalQuestions = questions.length
  
const showTotal = document.querySelector('#hits span')
  
for (const item of questions) {
    const quizItem = template.content.cloneNode(true)
  
    quizItem.querySelector('h3').textContent = item.question
  
    for (let answer of item.answer) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
  
      dt.querySelector('span').textContent = answer
  
      dt.querySelector('input').setAttribute(
        'name',
        'pergunta-' + questions.indexOf(item)
      )
  
      dt.querySelector('input').value = item.answer.indexOf(answer)
  
      dt.querySelector('input').onchange = event => {
        const itsRight = event.target.value == item.correct
  
        corrects.delete(item)
  
        if (itsRight) {
          corrects.add(item)
        }
  
        showTotal.textContent = corrects.size + ' de ' + totalQuestions
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
}
  