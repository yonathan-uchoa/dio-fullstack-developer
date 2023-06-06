import { UserController } from "./UserController";
import { UserService } from '../services/UserService'
import { Request } from 'express'
import { makeMockResponse } from "../__mocks__/mockResponse.mock";

describe('UserController', () => {
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn(),
        getAllUsers: jest.fn(() => [{ name: 'Nath', email: 'nath@test.com'}])
    }
    
    const userController = new UserController(mockUserService as UserService);

    it('Deve adicionar um novo usuário', () => {
        const mockRequest = {
            body: {
                name: 'Nath',
                email: 'nath@test.com'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({ message: 'Usuário criado' })
    })

    it('Deve falhar a criação por falta de nome', () => {
        const mockRequest = {
            body: {
                email: 'nath@test.com'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Name obrigatório'})
    })

    it('Deve falhar a criação por falta de email', () => {
        const mockRequest = {
            body: {
                name: 'Nath',
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Email obrigatório'})
    })

    it('Deve trazer todos os usuários', () => {
        const mockRequest = {} as Request
        const mockResponse = makeMockResponse()
        userController.getAllUsers(mockRequest, mockResponse)
        
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toMatchObject([{ name: 'Nath', email: 'nath@test.com'}])
    })
})
