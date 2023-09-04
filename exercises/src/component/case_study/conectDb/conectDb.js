import axios from "axios";

export const getServices = async () => {
    try {
        const result = await axios.get("http://localhost:8080/service");
        return result.data;
    } catch (e) {
        console.log(e)
    }
};

export const addNewService = async(value) => {
    try {
        const result = await axios.post("http://localhost:8080/service", value);
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