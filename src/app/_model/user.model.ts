import {RoleModel} from './role.model';

export class UserModel
{
  id: number;
  username: string;
  email: string;
  password: string;
  roles: RoleModel[];
  firstname: string;
  lastname: string;
  locality: string;
  street: string;
  zipCode: string;
  phone: string;
  active: number;
}
