import { clientPromise } from "$lib/server/db"


export async function get({ params }) {
    const { batch } = params
    const client = await clientPromise;
    const db = client.db("runfree")
    const col = db.collection(`${batch}_students`)
    try {

        const students = await col.find().toArray()
        return {
            body:
                students
        }
    } catch (e) {
        return {
            body: e
        }
    }
}