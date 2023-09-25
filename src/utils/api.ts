export async function getAllSubmits() {
    const res = await fetch("http://localhost:5000/submits", {
        method: "GET",
    });
    const data = await res.json();
    return data;
}