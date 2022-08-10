const inputs = document.querySelectorAll(".icount");
const count = document.getElementById("count");
const errorinput = document.getElementById("errorinput");
let countl = [15, 15];

for (let i = 0; i < 2; i++){
    let elm = inputs[i];
    elm.addEventListener("change", () => {
        countl[i] = parseInt(elm.value);
        let total = countl[0] + countl[1];
        if (total > 100) errorinput.textContent = "عدد اسئلة الاختبار لا يمكن ان يكون اكثر من 100";
        else {
            count.textContent = `عدد الاسئلة الكلي: ${total}`;
            errorinput.textContent = "";
        }
    })
}


function start_test(){
    if (errorinput.textContent.length === 0){
        localStorage.setItem("inputs", JSON.stringify([inputs[0].value, inputs[1].value]))
        localStorage.removeItem("list_ques");
        const mins = document.getElementById("mins").value;
        localStorage.setItem("mins", mins);
        window.location = "./start"
    }
}