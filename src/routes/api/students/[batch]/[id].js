import { clientPromise } from "$lib/server/db"
import { ObjectId } from "mongodb";


export async function get({ params }) {
    const { batch, id } = params
    const client = await clientPromise;
    const db = client.db("runfree")
    const col = db.collection(`${batch}_students`)
    try {
        const filter = { _id: new ObjectId(id) }
        const student = await col.findOne(filter)
        return {
            body:
                student
        }
    } catch (e) {
        return {
            body: e
        }
    }
}

export async function put({ params, request }) {
    const { batch, id } = params
    const { first_name, last_name, github_account, reason_for_joining } = await request.json()
    const client = await clientPromise;
    const db = client.db("runfree")
    const col = db.collection(`${batch}_students`)
    try {
        const filter = { _id: new ObjectId(id) }
        const update = {
            $set: {
                first_name,
                last_name,
                github_account,
                reason_for_joining
            }
        }
        const { modifiedCount } = await col.updateOne(filter, update)
        if (modifiedCount === 1) {
            return {
                status: 201,
            }
        }
        return {
            status: 404
        }
    } catch (e) {
        return {
            body: e
        }
    }
}