import axios from "axios";

export const getServices = async () => {
    try {
        const result = await axios.get("http://localhost:8080/service");
        return result.data;
    } catch (e) {
        console.log(e)
    }
};

export const getNameService = async () => {
    try {
        const result = await axios.get("http://localhost:8080/nameService");
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

export const getService = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/service/${id}`);
        return result.data;
    } catch (e) {
        console.log(e)
    }
};

export const deleteService = async (id) => {
    try {
        const result = await axios.delete(`http://localhost:8080/service/${id}`);
        return result.data;
    } catch (e) {
        console.log(e)
    }
};

export const updateService = async(id, value) => {
    try {
        const result = await axios.patch(`http://localhost:8080/service/${id}`, value);
        return result.data;
    } catch (e) {
        console.log(e)
    }
}

//CUSTOMER

export const getCustomers = async () => {
    try {
        const result = await axios.get("http://localhost:8080/customer");
        return result.data;
    } catch (e) {
        console.log(e)
    }
};

export const addNewCustomer = async(value) => {
    try {
        const result = await axios.post("http://localhost:8080/customer", value);
        return result.data;
    } catch (e) {
        console.log(e)
    }
}

export const getCustomer = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/customer/${id}`);
        return result.data;
    } catch (e) {
        console.log(e)
    }
};

export const updateCustomer = async(id, value) => {
    try {
        const result = await axios.patch(`http://localhost:8080/customer/${id}`, value);
        return result.data;
    } catch (e) {
        console.log(e)
    }
}

//CONTACT
export const getContracts = async () => {
    try {
        const result = await axios.get("http://localhost:8080/contract");
        return result.data;
    } catch (e) {
        console.log(e)
    }
};

export const addNewContract = async(value) => {
    try {
        const result = await axios.post("http://localhost:8080/contract", value);
        return result.data;
    } catch (e) {
        console.log(e)
    }
}