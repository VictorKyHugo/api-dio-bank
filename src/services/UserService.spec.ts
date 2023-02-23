import { IUser, UserService } from "./UserService"

describe('UserService', () => {
    const mockDb: IUser[] = []
    const userService = new UserService(mockDb)
    userService.getAllUsers = jest.fn()

    it('deve adicionar um novo usuário', () => {
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.createUser('NATH', 'nath@gmail.com')
        userService.createUser('vitao', 'vitao@gmail.com')
        userService.createUser('leia', 'gosts@gmail.com')

        expect(mockConsole).toHaveBeenCalledWith('DB atualizado', mockDb)
    })

    it('deve pegar todos os usuarios', () => {
        userService.getAllUsers()
        expect(userService.getAllUsers).toHaveBeenCalled()
    })

    it('deve deletar um usuario', () => {
        const mockConsole = jest.spyOn(global.console, 'log')
        var userToDelete = mockDb.filter(function(user) { return user.email === 'vitao@gmail.com' })

        expect(userToDelete[0].email).toBe('vitao@gmail.com')
        userService.deleteUser("gostoso@gmail.com")
    })
}) 