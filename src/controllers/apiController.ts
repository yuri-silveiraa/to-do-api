import { Request, Response } from "express"
import { Todo } from "../models/Todo"
import { Sequelize } from "sequelize"

export const all = async (req: Request, res: Response) => {
    let todos = await Todo.findAll()
    res.json({ todos })
}

export const add = async (req: Request, res: Response) => {
    let title = req.body

    if(!title){
        return res.json({error: "Dados não enviados"})
    }
    await Todo.create(title)
    return res.status(201), res.json({item: title})
}

export const update = async (req: Request, res: Response) => {
    let id = req.params.id

    let todo = await Todo.findByPk(id)

    if(todo){
        if(req.body.title){
            todo.title = req.body.title
        }
        if(req.body.done){
            switch(req.body.done.toLowerCase()) {
                case 'true':
                case '1':
                    todo.done = true
                    break
                case 'false':
                case '0':
                    todo.done = false
                    break
            }
        }
        await todo.save()
        return res.json({item: todo})
    }
    return res.json({ error: 'Item não encontrado' })
}

export const remove = async (req: Request, res: Response) => {
    let id = req.params.id
    let todo = await Todo.findByPk(id)
    if(todo){
        await todo.destroy()
    }
    return res.json({})
}