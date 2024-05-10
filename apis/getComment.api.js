export const fetchComment = async () => {
    try {
        const res = await fetch("./data.json");
        return res.json();
    } catch (error) {
        console.log(error);
    }
}