import { db } from "../database/connection.database.js";

export async function postClass (name) {
	return db.query('INSERT INTO classes (name) VALUES ($1);', [name]);
};

export async function getClass(){
    return db.query(`SELECT name FROM classes;`);
};

export async function changeClasses(previousClass, newClass, id) {
		const previousClassId = await db.query(`SELECT * FROM classes WHERE name=$1`, [previousClass]);

		const previousClassInfo = await db.query(`SELECT * FROM "studentClass" WHERE "studentId"=$1 AND
		"classId"=$2;`, 
		[id, previousClassId.rows[0].id]);

		await db.query(`UPDATE "studentClass" SET "dateEnd"=NOW() WHERE id=$1;`, 
		[previousClassInfo.rows[0].classId]);

		const newClassId = await db.query(`SELECT * FROM classes WHERE name=$1;`, [newClass]);

		return db.query(`INSERT INTO "studentClass" ("studentId", "classId", "dateStart", "dateEnd")
		VALUES ($1, $2, NOW(), NULL)`, [previousClassInfo.rows[0].studentId, newClassId.rows[0].id]);
};

export async function getClassById(id) {
	return db.query(`SELECT * FROM "studentClass" where "studentId"=$1`, [id]);
};