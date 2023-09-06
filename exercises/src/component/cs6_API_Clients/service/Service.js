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

export const getBook  = async (id) => {
    try {
        const result = await axios.get(`http://localhost:3001/books/${id}`);
        return result.data;
    } catch (e) {
        console.log(e)
    }
};

export const updateBook = async(id, value) => {
    try {
        const result = await axios.put(`http://localhost:3001/books/${id}`, value);
        return result.data;
    } catch (e) {
        console.log(e)
    }
}

export const deleteBook  = async (id) => {
    try {
        const result = await axios.delete(`http://localhost:3001/books/${id}`);
        return result.data;
    } catch (e) {
        console.log(e)
    }
};