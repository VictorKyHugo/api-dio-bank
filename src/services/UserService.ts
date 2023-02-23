export interface IUser {
    name: string
    email: string
}

const db = [
    {
        name: "Victor",
        email: "victor@gmail.com"
    }
]

export class UserService {

    db: IUser[]

    constructor(
        database = db
    ){
        this.db = database
    }

    createUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }

        this.db.push(user)
        console.log('DB atualizado', this.db)
    }

    getAllUsers = () => {
        return this.db
    }

    deleteUser = (email: string) => {
        this.db.filter(function(user) { return user.email !== email });
    }
}