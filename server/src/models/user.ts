interface UserInterface {
    _id?: string;
    isAdmin?: boolean;
    name?:string;
    email: string;
    password: string;
  }
  
  export type LoginInterface = Pick<UserInterface, "email" | "password">;
  
  export default UserInterface;
  