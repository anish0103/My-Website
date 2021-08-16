import Basic from './images/basic.png';
import Notes from './images/notes.png';
import Timer from './images/timer.png';
import Todowebsite from './images/todowebsite.png';
import Calculator from './images/calculator.png';
import CRUD from './images/crudoperation.png'
import ChatApplication from './images/chatapplication.png'
import ToDoApp from './images/ToDoApp.jpeg';
import RegistrationApp from './images/RegistrationApp.jpeg';

export const Data = [
    {
        id: Math.random(),
        title: 'First Demo website',
        langauges: ['HTML', 'CSS', 'JS'],
        imageurl: Basic,
        link: 'https://anish-myfirstwebsite.netlify.app/'
    },
    {
        id: Math.random(),
        title: 'Note Taking Website',
        langauges: ['HTML', 'CSS', 'JS', 'BOOTSTRAP'],
        imageurl: Notes,
        link: 'https://anish-notes.netlify.app/'
    },
    {
        id: Math.random(),
        title: 'Timer Clock Website',
        langauges: ['HTML', 'CSS', 'JS'],
        imageurl: Timer,
        link: 'https://anish-timer.netlify.app/'
    },
    {
        id: Math.random(),
        title: 'Calculator',
        langauges: ['REACT JS'],
        imageurl: Calculator,
        link: 'https://anish-react-calculator.netlify.app/'
    },
    {
        id: Math.random(),
        title: 'CRUD Operation',
        langauges: ['MONGODB', 'EXPRESS JS', 'REACT JS', 'NODE JS'],
        imageurl: CRUD,
        link: 'https://anish-mern-crud-operation.netlify.app/'
    },
    {
        id: Math.random(),
        title: 'Chat Application',
        langauges: ['MONGODB', 'EXPRESS JS', 'REACT JS', 'NODE JS'],
        imageurl: ChatApplication,
        link: 'https://anish-mern-chat-application.netlify.app/'
    },
    {
        id: Math.random(),
        title: 'ToDo Application',
        langauges: ['REACT JS'],
        imageurl: Todowebsite,
        link: 'https://anish-react-todo.netlify.app/'
    },
    {
        id: Math.random(),
        title: 'ToDo App',
        langauges: ['REACT NATIVE'],
        imageurl: ToDoApp,
        link: 'https://drive.google.com/file/d/1H-O9MAROy6PbytWW52vBIqVriQPbvxKn/view?usp=sharing'
    },
    {
        id: Math.random(),
        title: 'Registration App',
        langauges: ['REACT NATIVE'],
        imageurl: RegistrationApp,
        link: 'https://drive.google.com/file/d/1OFRE6hp_nkJjD8TaoSAX3abDkKqo60Me/view?usp=sharing'
    },
]

export const LanguagesKnown = ["HTML", "CSS", "JS", "REACT JS", "REACT NATIVE", "NODE JS", "EXPRESS JS", "MONGO DB"]