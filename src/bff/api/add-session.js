export const addSession = async (session) => {
    await fetch("http://localhost:3001/sessions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(session),
    })
}
