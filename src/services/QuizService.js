import http from "./BaseService";

export const getQuestions = () => http.get('/quiz')
export const createQuestion = (data) => http.post('/new', data)
export const updateQuestion = (data) => http.patch('/update', data)
//delete question