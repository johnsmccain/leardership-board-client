import { IGdData } from "./interface";

export function sumFunc(grades:IGdData[]){
    let sum = 0;
    for(let i = 0; i < grades.length; i++){
        sum += grades[i].score
    }
    return sum
}