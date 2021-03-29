
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {

    const user = this.usersRepository.findByEmail(email)

    if(user){
      throw new Error("User already exists.")
    }
    if(this.usersRepository.findByEmail(email)){
      throw new Error("Email already exists.")
    }
    this.usersRepository.create({ email, name })
  
    return this.usersRepository.findByEmail(email)
  }
}

export { CreateUserUseCase };
