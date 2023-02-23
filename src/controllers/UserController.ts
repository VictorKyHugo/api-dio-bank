import { Request, Response } from 'express'
import { UserService } from '../services/UserService'

export class UserController {

    userService: UserService

    constructor(
        userService = new UserService()
    ){
        this.userService = userService
    }

    createUser = (req: Request, res: Response) => {
        const { name, email } = req.body

        if(!name){
            return res.status(400).json({message: 'Bad Request! Param name is required'})
        }

        if(!email){
            return res.status(400).json({message: 'Bad Request! Param email is required'})
        }

        this.userService.createUser(name, email)
        return res.status(201).json({message: 'Usuário Criado'})
    }

    getAllUsers = (req: Request, res: Response) => {
        const users = this.userService.getAllUsers()
        return res.status(200).json( users )
    }

    deleteUser = (req: Request, res: Response) => {
        const { user } = req.body

        this.userService.deleteUser(user)
        return res.status(202).json({message: 'Usuário Deletado'})
    }
}