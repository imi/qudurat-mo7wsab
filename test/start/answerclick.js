export default function check(target, testSet){
    target.addEventListener("click", () => {
        const tid = target.id;
        testSet.list_ques[testSet.qnumber].checked_answer = tid;
        // Passing the whole testSet class because it'll be a refrence
            for (let id = 1; id <= 4; id++){
            if ("a" + id !== tid) document.getElementById("a" + id).checked = false;
        }
    })
}