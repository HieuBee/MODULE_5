import axios from "axios";

// CS6 TODO LIST
export const getAll  = async () => {
    try {
        const result = await axios.get("http://localhost:3001/posts");
        return result.data;
    } catch (e) {
        console.log(e)
    }
};

export const addNewTodo = async(value) => {
    try {
        const result = await axios.post("http://localhost:3001/posts", value);
        return result.data;
    } catch (e) {
        console.log(e)
    }
}

// CS6 MANAGE BOOK
export const getAllBook  = async () => {
    try {
        const result = await axios.get("http://localhost:3001/books");
        return result.data;
    } catch (e) {
        console.log(e)
    }
};

export const addNewBook = async(value) => {
    try {
        const result = await axios.post("http://localhost:3001/books", value);
        return result.data;
    } catch (e) {
        console.log(e)
    }
}