import { Request, Response } from "express";
import { mockUsers } from "../data/mockUsers";
import { User } from "../models/User";

export const getUsers = (req: Request, res: Response ): void => {
    res.json(mockUsers);
}

export const getUserById = (req: Request, res: Response ): void => {
    const id = parseInt(req.params.id);
    const user = mockUsers.find(u => u.id === id);

    if(!user) {
        res.status(404).json({ message: "Usuário não encontrado "});
        return;
    }

    res.json(user);
}

export const createUser = (req: Request, res: Response ): void => {
    const newUser: User = {
        id: mockUsers.length + 1,
        ...req.body
    };
    mockUsers.push(newUser);
    res.status(201).json(newUser);
};