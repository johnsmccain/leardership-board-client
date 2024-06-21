import axios from "axios";

export const getAll = (endpoint:String) =>  axios.get(`https://guild-audit-leader-board.onrender.com/${endpoint}`);
export const getById = (endpoint:String, id:String) =>  axios.get(`https://guild-audit-leader-board.onrender.com/${endpoint}/${id}`);