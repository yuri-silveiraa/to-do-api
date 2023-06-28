import { Request, Response } from "express"
import { Phrase } from "../models/todo"
import { Sequelize } from "sequelize"

export const ping = (req: Request, res: Response) => {
    res.json({pong: true})
}