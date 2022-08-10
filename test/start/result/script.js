const qs = JSON.parse(localStorage.getItem("list_que"));
const math_total  = [0, 0], arabic_total = [0, 0]; // Total question, Total questions answered correctly
qs.forEach(q => {
   let answered = 0;
   if (q.checked_answer !== null){if (q.checked_answer.replace("a", "") == q.correct_answer) answered++;}
   // Arabic questions paragraph is not null
   if (q.skill !== "كمي محوسب") {
        arabic_total[0]++;
        arabic_total[1] += answered;
        return;
   }
   math_total[0]++;
   math_total[1] += answered;
});

const math = math_total[1] / math_total[0] * 100;
const arabic = arabic_total[1] / arabic_total[0] * 100;
const sub = (math_total[1] + arabic_total[1]) / (arabic_total[0] + math_total[0]) * 100;

document.getElementById("percentage").textContent = "%" + Math.round(sub);
document.getElementById("math").textContent = "%" + Math.round(math);
document.getElementById("arabic").textContent = "%" + Math.round(arabic);

localStorage.clear()