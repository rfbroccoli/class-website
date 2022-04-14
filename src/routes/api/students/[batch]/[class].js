
export async function get({ params }) {


    return {
        body: {
            route : "/api/students/[batch]/[class]",
            batch: params.batch,
            class: params.class
        }
    }
}