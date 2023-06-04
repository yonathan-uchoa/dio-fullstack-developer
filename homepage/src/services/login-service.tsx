import { api } from "../test/mock/api";
interface ILogin {
    email: string,
    password: string
}

class LoginService {
    static isValidEmail(email: string): boolean {
        return /\S+@\S+\.\S+/.test(email);
    }
    static async login({email, password}: ILogin) {
        const data: any = await api
        if(email !== data.email || password !== data.password)
            return false
        
        return data
    }
}

export default LoginService