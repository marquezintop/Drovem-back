import { getClass, getClassById, postClass } from "../repositories/classes.repository.js";

export async function addClass (req, res) {
    const { name } = req.body;
    try {
        await postClass(name);
        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export async function getClasses (req, res) {
    try {
        const classes = await getClass();
        return res.status(200).send(classes.rows);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export async function getClassesById (req, res) {
    const { id } = req.params;

    try {
        const classes = await getClassById(id);
        
        return res.status(200).send(classes.rows);
    } catch (error) {
        return res.status(500).send(error.message);
    }


}