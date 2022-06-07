import Basic from './images/Basic.jpg';
import Notes from './images/notes.jpg';
import Timer from './images/Timer.jpg';
import Todowebsite from './images/todowebsite.jpg';
import Calculator from './images/Calculator.jpg';
import CRUD from './images/crudoperation.jpg'
import ChatApplication from './images/chatapplication.jpg'
import QRCodeGenerator from './images/qrcodegenerator.jpg';
import ToDoApp from './images/ToDoApp.jpg';
import RegistrationApp from './images/RegistrationApp.jpg';

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
        title: 'QR Code Generator',
        langauges: ['REACT JS'],
        imageurl: QRCodeGenerator,
        link: 'https://anish-react-qrcodegenerator.netlify.app/'
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

export const LanguagesKnown = ["HTML", "CSS", "JS", "REACT JS", "REACT NATIVE", "NODE JS", "EXPRESS JS", "TAILWIND CSS", "MONGO DB"]