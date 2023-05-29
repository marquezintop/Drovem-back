import { changeClasses } from "../repositories/classes.repository.js";
import { getStudentById, register, registerStudentClass, verifyEmail } from "../repositories/students.repository.js";


export async function registerStudent (req, res) {
    const { name, cpf, photo, email, classChosen } = req.body;

    try {
        const isEmail = await verifyEmail(email);
        if (isEmail.rowCount !== 0) return res.status(409).send("E-mail já está em uso!");

        await register(name, cpf, photo, email);

        await registerStudentClass(classChosen, email);
        
        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

export async function getStudentsById(req, res) {
    const { id } = req.params;

    try {
        const student = await getStudentById(id);
        
        return res.status(200).send(student.rows[0]);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

export async function changeClass (req, res) {
    const { previousClass, newClass } = req.body;

    const { id } = req.params;

    try {
        await changeClasses(previousClass, newClass, id);

        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).send(error.message);
    }   
};