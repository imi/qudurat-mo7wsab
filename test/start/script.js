import Ques from "./ques.js";
import {renderQues, renderResult} from "./render.js";
const testSet = new Ques();

async function change_q(event){
    if (event.target.id === "next") {
        if (testSet.qnumber > testSet.list_ques.length - 2){
            document.getElementById("modal").classList.remove("d-none");
            return;
        }
        testSet.qnumber++
    }
    else {
        if (testSet.qnumber !== 0) testSet.qnumber--;
    }
    await renderQues(testSet);
}

async function start(){
    while (true){
        try{
            await testSet.setTestQs();
            break;
        } catch {}
    }
    await renderQues(testSet);
    document.getElementById("qremain").innerHTML = testSet.list_ques.length;
    document.getElementById("testview").classList.remove("d-none");
    document.querySelector("main").removeChild(document.getElementById("spinner"));
    // Timer
    const timer_h = document.getElementById("timer");
    let sec = 0;
    timer_h.textContent = mins + ":" + sec;
    const timer = setInterval(() => {
        if (sec - 1 < 0) {
            if (mins === 0){
                clearInterval(timer);
                return;
            }
            mins -= 1;
            sec = 59;
        } else sec -= 1;
        timer_h.textContent = mins + ":" + sec;
    }, 1000);
}
start();

document.getElementById("next").onclick = change_q;
document.getElementById("before").onclick = change_q;
document.getElementById("closeModal").onclick = () => {document.getElementById("modal").classList.toggle("d-none")}
document.getElementById("showResult").onclick = () => {renderResult(testSet)};