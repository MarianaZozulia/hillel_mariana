import {GetUser} from "./GetUser.js";
import {GetTodo} from "./GetTodo.js";
import axios from 'axios';

//Task 1

const ms=1000;
const text="Abcde";
function displayText(text,ms){
    setTimeout(()=>{
        console.log(text)
    }, ms);

}

displayText(text,ms);

//Task 2

function getTodos() {
    return new Promise((resolve, reject) => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

function getUser() {
    return new Promise((resolve, reject) => {
        axios.get('https://jsonplaceholder.typicode.com/users/1')
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

/*getTodos()
    .then(todo => {
        console.log('Received object',todo);
    })
    .catch(error => {
        console.error('Error while executing the request', error);
    });

*/

const promiseAll = Promise.all([getTodos(),getUser()]);
const promiseRace = Promise.race([getTodos(), getUser()]);

promiseAll
    .then(([todo, user]) => {
        console.log('Promise all');
        console.log('Task:', todo);
        console.log('User:', user);
    })
    .catch(error => {
        console.error('Error is performed', error);
    });

promiseRace
    .then(result => {
        console.log('Promise race:', result);
    })
    .catch(error => {
        console.error('Error is performed', error);
    });

//Task 3

async function getAsyncTodo() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        return response.data;
    } catch (error) {
        throw error;
    }
}
async function getAsyncUser() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        return response.data;
    } catch (error) {
        throw error;
    }
}

const asyncPromiseAll = Promise.all([getAsyncTodo(), getAsyncUser()]);
const asyncPromiseRace = Promise.race([getAsyncTodo(), getAsyncUser()]);

asyncPromiseAll
    .then(([user, todo]) => {
        console.log('Promise all:');
        console.log('Task:', todo);
        console.log('User:', user);

    })
    .catch(error => {
        console.error('Error is performed:', error);
    });

asyncPromiseRace
    .then(result => {
        console.log('Promise race:', result);
    })
    .catch(error => {
        console.error('Error is performed:', error);
    });

//Task 4

const getClassUser=new GetUser();
const getClassTodo=new GetTodo();

getClassTodo.getAsyncTodoFromClass()
    .then(user => {
        console.log('User:', user);
    })
    .catch(error => {
        console.error('Error is performed', error);
    });

getClassUser.getAsyncUserFromClass()
    .then(todo => {
        console.log('Task:', todo);
    })
    .catch(error => {
        console.error('Error is performed', error);
    });