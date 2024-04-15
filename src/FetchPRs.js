import axios from 'axios';

const getAllPRs = (setPR) => {
    axios.get("https://payment-reminder-backend.onrender.com")
    .then(({data}) => {
        console.log(data)
        setPR(data);
    })
}

const addPR = (title, setTitle, setPR) => {
    axios.post("https://payment-reminder-backend.onrender.com/savePRs", { title })
    .then((data) => {
        console.log(data);
        setTitle("");
        getAllPRs(setPR)
    })
}

const editPR = (PRId, title, setTitle, setPR, setEditing) => {
    axios.put("https://payment-reminder-backend.onrender.com/editPR", {_id: PRId, title })
    .then((data) => {
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllPRs(setPR)
    })
}

const deletePR = (_id, setPR) => {
    axios.post("https://payment-reminder-backend.onrender.com/deletePR", { _id })
    .then((data) => {
        console.log(data)
        getAllPRs(setPR)
    })
}

export { getAllPRs, addPR, editPR, deletePR };