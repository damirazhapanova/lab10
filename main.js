let lab1 = [5, 5, 5, 5, 5, 0, 0, 0];
let lab2 = [5, 5, 5, 5, 5, 5, 5, 5];
let lab3 = [5, 5, 5, 5, 5, 5, 5, 5];
let lab4 = [10];
let lab5 = [10, 10, 10, 10, 5, 5, 5, 5, 5, 4];
let lab6 = [10, 10, 5, 5, 5, 4];
let quiz = [30];
let lab8 = [5, 8, 10, 10, 5];

function get_sum(A) { let final_sum=0;
	for ( let i=0; i < A.length; i = i+1){
		final_sum += A[i]
	}
	return final_sum; }

obj = main(lab1,lab2,lab3,lab4,lab5,lab6,quiz,lab8)

function main (lab1, lab2, lab3, lab4, lab5, lab6, quiz, lab8){
sum1=get_sum(lab1);
sum2=get_sum(lab2);
sum3=get_sum(lab3);
sum4=get_sum(lab4);
sum5=get_sum(lab5);
sum6=get_sum(lab6);
sum7=get_sum(quiz);
sum8=get_sum(lab8);
const obj = {
lab1: [5, 5, 5, 5, 5, 0, 0, 0],
lab2: [5, 5, 5, 5, 5, 5, 5, 5],
lab3: [5, 5, 5, 5, 5, 5, 5, 5],
lab4: [10],
lab5: [10, 10, 10, 10, 5, 5, 5, 5, 5, 4],
lab6: [10, 10, 5, 5, 5, 4],
quiz: [30],
lab8: [5, 8, 10, 10, 5],
sums: [sum1, sum2, sum3, sum4, sum5, sum6, sum8],
total_score: ((sum1 + sum2 +sum3 +sum4 + sum5 + sum6 + sum8)/7) * 0.6 + (quiz * 0.4),
}
return obj
}
console.log(obj)
