import User from '../model/user.model.js';
import bcrypt from 'bcryptjs';
import { createAccessToken } from '../libs/jwt.js';
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';



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


export const updateProfile = async (req, res) => {
    const { companyName, description, location } = req.body;
    const profileImage = req.file ? `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}` : null;

    try {
        console.log('Datos recibidos:', { companyName, description, location, profileImage });

        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

        user.companyName = companyName || user.companyName;
        user.description = description || user.description;
        user.location = location || user.location;
        if (profileImage) {
            user.profileImage = profileImage;
            
        }

        await user.save();

        res.json({
            id: user._id,
            username: user.username,
            email: user.email,
            companyName: user.companyName,
            description: user.description,
            location: user.location,
            profileImage: user.profileImage,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        });
    } catch (error) {
        console.error('Error actualizando el perfil:', error);
        res.status(500).json({ message: 'Error del servidor' });
    }
};

export const verifyToken = async (req, res) => {
   const { token } = req.cookies
    if (!token) return res.status(401).json({ message: 'No autorizado' })
    
    jwt.verify(token, TOKEN_SECRET, async (err, user) => {
        if (err) return res.status(401).json({ message: 'No autorizado' })

        const userFound = await User.findById(user.id)
        if (!userFound) return res.status(401).json({ message: 'No autorizado' })

        return res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
        });
    })}