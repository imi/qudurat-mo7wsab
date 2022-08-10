
// Nav
let button = document.getElementById("btnmenu");
let menu = document.getElementById("menu");
document.addEventListener("click", () => {
    if (menu.classList.contains("show")) button.click();
})

// Cards
let c_list = [
    {title: "تشابه كبير", desc: "يمتاز الاختبار بانه مشابه للاختبار الاصلي"},
    {title: "قابل للتخصيص", desc: "بامكانك تخصيص الاختبار بناء على رغباتك"},
    {title: "نماذج متعددة", desc: "تأتي اسئلة الاختبار من عدة نماذج"}
]
let pcards = document.getElementById("cards");
c_list.forEach((e) => {
    let card = document.createElement("div");
    card.className = "card bg-blue-200 col-md";
    let header = document.createElement("div");
    header.className = "card-header";
    header.innerHTML += `<h1 class="text-center text-black text-2xl fw-bold">${e.title}</h1>`;
    card.append(header);
    let body = document.createElement("div");
    body.className = "crad-body text-center p-3";
    body.append(e.desc);
    card.append(body)
    pcards.append(card);
})

