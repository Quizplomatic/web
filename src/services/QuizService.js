import http from "./BaseService";

export const getQuestions = () => http.get('/quiz')
export const createQuestion = (data) => http.post('/new', data)
//edit question
//delete question