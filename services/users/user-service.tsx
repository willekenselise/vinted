import { get } from 'http';
import getAllUsers from '../../repositories/users-repository/UserRepository'
import UserModelService from './user-model-service'

const searchUsers = async () => {
    try {
        const users = await getAllUsers();
        return users
    } catch (err) {
        throw err;
    }
}

export default searchUsers;