import axios from "axios";

export const getAll = (endpoint) =>  axios.get(`https://guild-audit-leader-board.onrender.com/${endpoint}`);
export const getById = (endpoint, id) =>  axios.get(`https://guild-audit-leader-board.onrender.com/${endpoint}/${id}`);