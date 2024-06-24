import User from '../model/user.model.js';
import bcrypt from 'bcryptjs';
import { createAccessToken } from '../libs/jwt.js';


export const register = async (req, res) => {
    const { username, email, password, number } = req.body;

    try {

       const userFound = await User.findOne({ email })
       if (userFound) return res.status(400).json(['El correo ya esta en uso'])


        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: passwordHash,
            number
        });

        const userSaved = await newUser.save();

        const token = await createAccessToken({ id: userSaved._id });

        res.cookie('token', token);
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            number: userSaved.number,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt
        });

    } catch (error) {
        console.log(error)

    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {

        const userFound = await User.findOne({ email })
            if (!userFound) return res.status(400).json({ message: 'Usuario no encontrado' })

        const isMatch = await bcrypt.compare(password, userFound.password);
            if (!isMatch) return res.status(400).json({ message: 'Contraseña Incorrecta' });


        const token = await createAccessToken({ id: userFound._id });

        res.cookie('token', token);
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
        });

    } catch (error) {
        console.log(error)

    }
};

export const logout = (req, res) => {
    res.cookie('token', "",{
        expires: new Date(0)
    })
    return res.sendStatus(200);
};

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id)
    if (!userFound) return res.status(400).json({ message: 'Usuario no encontrado' })

    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt
    });

};

