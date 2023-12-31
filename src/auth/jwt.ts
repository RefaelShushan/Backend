import UserInterface from "../../src/models/user";
import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "config";
// import { handleError } from "../../utils/handleErrors";

// const KEY = config.get<string | null>("JWT_KEY");
const KEY="1234"

export const generateAuthToken = (user: UserInterface) => {
  const { _id, isAdmin, email } = user;
  if (!KEY) throw new Error("no secret key provided!");

  const expiresIn = 60 * 60 * 24 * 7;

  const token = jwt.sign({ _id, isAdmin, email }, KEY, { expiresIn });
  return token;
};

type UserPayloadType = { _id: string; isAdmin: boolean };

export interface UserRequest extends Request {
  user: UserPayloadType;
}

export const verifyToken = (tokenFromClient: string) => {
  try {
    if (!KEY) throw new Error("no secret key provided!");
    const userPayload = jwt.verify(tokenFromClient, KEY) as UserPayloadType;
    return userPayload;
  } catch {
    return null;
  }
};

export const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const tokenFromClient = req.header("x-auth-token");
    if (!tokenFromClient) throw new Error("Authentication Error: Please Login");

    const userInfo = verifyToken(tokenFromClient);
    if (!userInfo) throw new Error("Authentication Error: Unauthorize user");
    const reqUser = req as UserRequest;
    reqUser.user = userInfo;
    return next();
  } catch (error) {
    // if (error instanceof Error) return handleError(res, error, 401);
  }
};
