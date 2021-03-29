import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

/* interface IRequest {
  user_id: string;
}
*/

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }) : User[] {
    const adminPermission = this.usersRepository.findById(user_id);

    if (!adminPermission.admin) {
      throw new Error("You are not a user with administrator permission.")
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
