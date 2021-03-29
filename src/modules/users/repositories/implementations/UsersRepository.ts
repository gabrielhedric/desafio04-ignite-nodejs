import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const newUser = new User();

    
    Object.assign(newUser,
    {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date()
    } 
  )
   this.users.push(newUser)

   return newUser;
}

findById(id: string): User | undefined {
    const idExists = this.users.find(verify=>verify.id === id)
    
    return idExists;
}

findByEmail(email: string): User | undefined {
   const emailExists = this.users.find(verify=>verify.email === email)
    
    return emailExists;
}

turnAdmin(receivedUser: User): User {
  
  if(receivedUser.admin){
      return receivedUser;
    }
    receivedUser.admin = true;
    receivedUser.updated_at = new Date();

    return receivedUser;
}

list(): User[] {
 
  return this.users 
}
}

export { UsersRepository };
