
export default class Ques{
    // This a class where all the question and questions numbers will be stored at
    constructor(){
        this.apis = ["https://api.nabeedu.com/api/exams/type/1", "https://api.nabeedu.com/api/exams/type/8"];
        this.api_q = "https://api.nabeedu.com/api/exams/questions/";
        this.list_ques = [];
        this.inputs = JSON.parse(localStorage.getItem("inputs"));
        this.qnumber = 0;
    }

    async getLastList(){
        // if there is an existing list of questions, use it.
        if (localStorage.getItem("list_ques")){
            this.list_ques = JSON.parse(localStorage.getItem("list_ques"));
            return true;
        }
        return false;
    }

    async setTestQs(){
        if (await this.getLastList()) return;
        const arabic_skills = ["الخطأ السياقي", "التناظر اللفظي", "استيعاب المقروء", "إكمال الجمل"];
        for (let i = 0; i < this.apis.length; i++){
            let randomID = await this.sendRequest(this.apis[i]);
            randomID = randomID.data[Math.floor(Math.random() * randomID.data.length)].id;
            const qs = await this.sendRequest(this.api_q + randomID);
            for (let j = 0; this.inputs[i] > 0; this.inputs[i]--){
                let q = qs.data[j];
                if (i === 0){
                    const random_skill = arabic_skills[Math.floor(Math.random() * arabic_skills.length)];
                    let l = 0;
                    while (q.skill !== random_skill){
                        if (!this.list_ques.includes(qs.data[l])) q = qs.data[l];
                        l++;
                    }
                }
                q.checked_answer = null;
                this.list_ques.push(q);
                j++;
            }
        }
        localStorage.setItem("list_ques", JSON.stringify(this.list_ques));
    }

    async sendRequest(url){
      const response = await fetch(url);
      const js = await response.json();
      return js;
    }
}