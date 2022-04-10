import { clientPromise } from "$lib/server/db"


export async function get() {
    const client = await clientPromise;
    const db = client.db("runfree")
    const col = db.collection("b13_students")
    const students = await col.find().toArray()
    return {
        body:
            students
    }
}