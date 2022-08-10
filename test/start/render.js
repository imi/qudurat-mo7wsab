import check from "./answerclick.js";

export async function renderResult(testSet){
    const modal = document.getElementById("modal");
    modal.classList.add("d-none");
    // check if all questions are answered
    let is_completed = true; 
    testSet.list_ques.forEach(q => {
        if (q.checked_answer === null) is_completed = false;
    })
    if (!is_completed) {
        if (!confirm("بعض الاسئلة لم يتم حلها, هل انت متأكد من الاكمال ؟"))  return;
    }
    localStorage.setItem("list_que", JSON.stringify(testSet.list_ques));
    location.replace("./result")
}

export async function renderQues(testSet){
    const q = testSet.list_ques[testSet.qnumber];
    document.getElementById("qtitle").textContent = q.question;
    document.getElementById("qimg").setAttribute("src", q.question_img);
    try{
        // math questions dont have a paragraph
        if (q.paragraph.length <= 1) document.getElementById("qpara").textContent = "سؤال اختيار من متعدد";
        else document.getElementById("qpara").textContent = q.paragraph ;
    } catch {document.getElementById("qpara").textContent = "سؤال اختيار من متعدد";}
    document.getElementById("qnumber").textContent = testSet.qnumber + 1;
    const aparent = document.getElementById("qanswers");
    aparent.innerHTML = "";
    let id = 1;
    Object.keys(q).forEach(e => {
        if (e.includes("answer") && e !== "correct_answer" && e !== "checked_answer"){
            const ainput = document.createElement("input");
            ainput.type = "radio";
            ainput.id = "a" + id;
            if (ainput.id === q.checked_answer) ainput.checked = true;
            check(ainput, testSet);
            const ap = document.createElement("p");
            ap.className = "text-[18px] fw-bold";
            ap.textContent = q[e];
            const adiv = document.createElement("div");
            adiv.className = "flex flex-row-reverse gap-x-2 align-items-center";
            adiv.append(ainput, ap)
            aparent.append(adiv);
            id++;
        }
    })
}