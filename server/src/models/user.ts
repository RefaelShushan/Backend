interface UserInterface {
    _id?: string;
    isAdmin?: boolean;
    name?:string;
    email: string;
    password: string;
    cart: []
  }
  interface cart{
    a:string
    b:number
  }
  export type LoginInterface = Pick<UserInterface, "email" | "password">;
  
  export default UserInterface;
  