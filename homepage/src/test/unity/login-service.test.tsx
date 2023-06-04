import LoginService from "../../services/login-service"

describe('LoginService', () => {
    describe('login', () => {
        const mockLoginErrorEmail = {email: 'error@example.com', password:'password'}
        const mockLoginErrorPassword = {email: 'test@example.com', password:'error'}
        const mockLogin = {email: 'test@example.com', password:'password'}
        it('should return an error by invalid email', async() => {
            const response = await LoginService.login(mockLoginErrorEmail)
            expect(response).toBeFalsy()
        })
        it('should return an error by invalid password', async() => {
            const response = await LoginService.login(mockLoginErrorPassword)
            expect(response).toBeFalsy()
        })
        it('should return true', async() => {
            const response = await LoginService.login(mockLogin)
            expect(response).toBeTruthy()
        })
    })

    describe('isValidEmail', () => {
        it('should return false', () => {
            const response = LoginService.isValidEmail('error')
            expect(response).toBeFalsy()
        })
        it('should return true', () => {
            const response = LoginService.isValidEmail('test@example.com')
            expect(response).toBeTruthy()
        })
    })
    
})