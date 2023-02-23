import { UserService } from "../services/UserService"
import { UserController } from "./UserController"
import { Request } from 'express'
import { makeMockResponse } from "../_mocks_/mockResponse.mock"

    describe('UserController', () => {
        const mockUserService: Partial<UserService> = {
            createUser: jest.fn(),
            getAllUsers: jest.fn(),
            deleteUser: jest.fn()
        }
        const userController = new UserController(mockUserService as UserService)

        it('Adicionar um novo usuário', () => {
            const mockRequest ={
                body: {
                    name: 'Paulo',
                    email: 'teste@fma.com'
                } 
            } as Request
            const mockResponse = makeMockResponse()
            userController.createUser(mockRequest, mockResponse)
            expect(mockResponse.state.status).toBe(201)
            expect(mockResponse.state.json).toMatchObject({message: 'Usuário Criado'})
        })

        it('Mensagem de erro caso não tenha nome', () => {
            const mockRequest ={
                body: {
                    name: '',
                    email: 'victorkyhugo@gmail.com'
                } 
            } as Request

            const mockResponse = makeMockResponse()
            userController.createUser(mockRequest, mockResponse)
            expect(mockResponse.state.status).toBe(400)
            expect(mockResponse.state.json).toMatchObject({message: 'Bad Request! Param name is required'})
        })

        it('Mensagem de erro caso não tenha email', () => {
            const mockRequest ={
                body: {
                    name: 'Victor',
                    email: ''
                } 
            } as Request

            const mockResponse = makeMockResponse()
            userController.createUser(mockRequest, mockResponse)
            expect(mockResponse.state.status).toBe(400)
            expect(mockResponse.state.json).toMatchObject({message: 'Bad Request! Param email is required'})
        })

        it('Mensagem de úsuario deletado com sucesso', () => {
            const mockRequest ={
                body: {
                    name: 'Paulo',
                    email: 'victor@gmail.com'
                } 
            } as Request
            const mockResponse = makeMockResponse()
            userController.deleteUser(mockRequest, mockResponse)
            expect(mockResponse.state.status).toBe(202)
            expect(mockResponse.state.json).toMatchObject({message: 'Usuário Deletado'})
        })
    })