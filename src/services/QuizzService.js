import http from "./BaseService";

export const createQuestion = (data) => http.post('/questions', data)
//edit question
//delete question