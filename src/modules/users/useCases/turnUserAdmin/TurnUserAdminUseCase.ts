import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

/* interface IRequest {
  user_id: string;
}

*/

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id } ): User {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User does not exists.")
    }
    if(user.admin){
      throw new Error("User is already admin")
    }
    this.usersRepository.turnAdmin(user);
    return user;
  }
}

export { TurnUserAdminUseCase };
