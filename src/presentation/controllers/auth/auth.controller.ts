import { Request, Response } from "express";

export class AuthController {
  public get = (req: Request, res: Response) => {
    res.send("Get Auth");
  }
}