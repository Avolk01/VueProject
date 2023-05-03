const express = require('express')
const app = express()
var cors = require('cors')
const PORT = 5000;

app.use(express.json());
app.use(cors());

const data = {
    description: 'Описание вопроса с сервера',
    task: 'задание с сервера',
    answers: [
        {id: 1, message: 'ответ 1', right: true,},
        {id: 2, message: 'ответ 3', right: false,},
        {id: 3, message: 'ответ 2', right: false,},
    ],
    title: 'Title from server',
    content: [
        'content from server 1',
        'content from server 2',
        'content from server 3',
        'content from server 4',
    ],
    lessons: [
        {
            title: 'Тема 1 с сервера',
            additionalLessons: [
                {title: 'Урок 1', url: 'http://localhost:5000/lesson1-1'},
                {title: 'Урок 2', url: 'http://localhost:5000/lesson1-2'},
                {title: 'Урок 3', url: 'http://localhost:5000/lesson1-3'},
                {title: 'Урок 4', url: 'http://localhost:5000/lesson1-4'},
            ]   
        },
        {
            title: 'Тема 2 с сервера',
            additionalLessons: [
                {title: 'урок 1', url: 'http://localhost:5000/lesson2-1'},
                {title: 'урок 2', url: 'http://localhost:5000/lesson2-2'},
            ]
        },        
    ],
}

app.get('/', (req, res) => {
    res.send(data);
})

const data1_1 = {
    description: 'Описание вопроса 1-1 с сервера',
    task: 'задание с сервера 1-1',
    answers: [
        {id: 1, message: 'ответ 1', right: true,},
        {id: 2, message: 'ответ 2', right: false,},
        {id: 3, message: 'ответ 3', right: false,},
        {id: 3, message: 'ответ 4', right: false,},
        {id: 3, message: 'ответ 5', right: false,},
        {id: 3, message: 'ответ 6', right: false,},
    ],
    title: 'Title from server 1-1',
    content: [
        'content from server 1',
        'content from server 2',
    ],
}

app.get('/lesson1-1', (req, res) => {
    res.send(data1_1);
})

app.listen(PORT, () => {
    console.log(`server is working on PORT ${PORT}`);
})