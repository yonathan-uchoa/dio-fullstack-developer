import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        login('teste')
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo(a) teste!')
    })
})