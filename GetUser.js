import axios from 'axios';
class GetUser{
    async getAsyncUserFromClass() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}
export {GetUser};