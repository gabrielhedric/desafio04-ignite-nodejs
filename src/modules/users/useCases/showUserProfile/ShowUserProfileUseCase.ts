import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const findUserId = this.usersRepository.findById(user_id);

    if (!findUserId) {
      throw new Error("User does not exists")
    }

    return findUserId;


  }
}

export { ShowUserProfileUseCase };
