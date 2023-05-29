import { db } from "../database/connection.database.js";

export async function verifyEmail (email) {
	return db.query('SELECT * FROM students WHERE email = $1', [email]);
};

export async function register(name, cpf, photo, email) {
	return db.query(`INSERT INTO students(name, cpf, photo, email) VALUES ($1, $2, $3, $4)`, 
	[name, cpf, photo, email]);
};

export async function registerStudentClass(classChosen, email) {
		const studentId = await db.query('SELECT * FROM students WHERE email = $1', [email]);

		const classId = await db.query(`SELECT * FROM classes where name=$1`, [classChosen]);

		return db.query(`INSERT INTO "studentClass"("studentId", "classId", "dateStart")
		 VALUES ($1, $2, NOW())`, [studentId.rows[0].id, classId.rows[0].id]);
};

export async function getStudentById(id) {
	return db.query(`SELECT * FROM students where id=$1`, [id]);
};