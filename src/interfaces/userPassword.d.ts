interface;

import { User } from "../db/models/user";

export interface UserNewPassword extends User {
  newPassword: string;
}
