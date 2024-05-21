import axios from 'axios';
class GetTodo {
    async getAsyncTodoFromClass() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            return response.data;
        } catch (error) {
            throw error;
        }
    }

}
export {GetTodo};
