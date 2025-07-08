const icons = document.querySelectorAll(".icon");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const fileList = document.getElementById("file-list");
const closeModal = document.querySelector(".close");

const files = {
    1: ["http://eform.hailedu.gov.sa/night/tsgn.pdf", "http://eform.hailedu.gov.sa/night/estq.doc", "http://eform.hailedu.gov.sa/night/stmn.docx" , "http://eform.hailedu.gov.sa/night/stmn.docx"],
    2: ["https://eform.hailedu.gov.sa/storeage/1.docx", "https://eform.hailedu.gov.sa/storeage/2.docx", "https://eform.hailedu.gov.sa/storeage/3.docx","https://eform.hailedu.gov.sa/storeage/4.docx","https://eform.hailedu.gov.sa/storeage/5.docx","https://eform.hailedu.gov.sa/storeage/6.docx","https://eform.hailedu.gov.sa/storeage/7.pdf","https://eform.hailedu.gov.sa/storeage/7.pdf"],
    3: ["https://eform.hailedu.gov.sa/etisal/ktbs.pdf", "https://eform.hailedu.gov.sa/etisal/bemb.pdf"],
    4: ["file7.pdf", "file8.pdf", "file9.pdf"],
    5: ["file7.pdf", "file8.pdf", "file9.pdf"],
    6: ["file7.pdf", "file8.pdf", "file9.pdf"],
    7: ["file7.pdf", "file8.pdf", "file9.pdf"],
    8: ["file7.pdf", "file8.pdf", "file9.pdf"],
    9: ["file7.pdf", "file8.pdf", "file9.pdf"],
    10: ["file7.pdf", "file8.pdf", "file9.pdf"],
    11: ["file7.pdf", "file8.pdf", "file9.pdf"],
    12: ["file7.pdf", "file8.pdf", "file9.pdf"],
    13: ["file7.pdf", "file8.pdf", "file9.pdf"],
    14: ["file7.pdf", "file8.pdf", "file9.pdf"],
    15: ["file7.pdf", "file8.pdf", "file9.pdf"],
    16: ["file7.pdf", "file8.pdf", "file9.pdf"],
    17: ["file7.pdf", "file8.pdf", "file9.pdf"],
    18: ["file7.pdf", "file8.pdf", "file9.pdf"],
    19: ["file7.pdf", "file8.pdf", "file9.pdf"],
    20: ["file7.pdf", "file8.pdf", "file9.pdf"],
    21: ["file7.pdf", "file8.pdf", "file9.pdf"],
    22: ["file7.pdf", "file8.pdf", "file9.pdf"],
    23: ["file7.pdf", "file8.pdf", "file9.pdf"],
    24: ["file7.pdf", "file8.pdf", "file9.pdf"],
    25: ["file7.pdf", "file8.pdf", "file9.pdf"],
    26: ["file7.pdf", "file8.pdf", "file9.pdf"],
    27: ["file7.pdf", "file8.pdf", "file9.pdf"],
    28: ["file7.pdf", "file8.pdf", "file9.pdf"],
    29: ["file7.pdf", "file8.pdf", "file9.pdf"],
    30: ["file7.pdf", "file8.pdf", "file9.pdf"],
    31: ["file7.pdf", "file8.pdf", "file9.pdf"],
    32: ["file7.pdf", "file8.pdf", "file9.pdf"],
    33: ["file7.pdf", "file8.pdf", "file9.pdf"]
};

const fileNames = {
    "http://eform.hailedu.gov.sa/night/tsgn.pdf": " إستمارة طلب تحويل طالبة من تعليم عام الى مراكز تعليم كبيرات",
    "http://eform.hailedu.gov.sa/night/estq.doc": "استمارة دراسة وضع طالبة منقطع عن الدراسة",
    "http://eform.hailedu.gov.sa/night/stmn.docx": "موذج 3 بيانات طالبات انتساب المكتب",
    "http://eform.hailedu.gov.sa/night/tsmn.doc": "استمارة طلب تحويل طالبة من الانتظام إلى الدراسة عن طريق الانتساب",
    "https://eform.hailedu.gov.sa/storeage/1.docx":"استمارة الجرد" ,
    "https://eform.hailedu.gov.sa/storeage/2.docx":"اشعار استلام مؤقت لاصناف تحت الفحص",
    "https://eform.hailedu.gov.sa/storeage/3.docx":"بطاقة صنف",
     "https://eform.hailedu.gov.sa/storeage/4.docx":"طلب صرف مواد",
     "https://eform.hailedu.gov.sa/storeage/5.docx":"محضر استلام",
     "https://eform.hailedu.gov.sa/storeage/6.docx":"مذكرة استلام",
     "https://eform.hailedu.gov.sa/storeage/7.pdf":"مستند ارجاع",
     "https://eform.hailedu.gov.sa/storeage/7.pdf":"مستند صرف اصناف رجيع",
     "https://eform.hailedu.gov.sa/etisal/ktbs.pdf":"نموذج كشف تسليم البريد الرسمي",
   "https://eform.hailedu.gov.sa/etisal/bemb.pdf":"بيان باستلام المعاملات الواردة من البريد",

};

function searchFunction() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
        const title = icon.querySelector('h6').textContent.toLowerCase();
        if (title.includes(searchQuery)) {
            icon.style.display = "block";
        } else {
            icon.style.display = "none";
        }
    });
}

icons.forEach(icon => {
    icon.addEventListener("click", function () {
        const id = this.getAttribute("data-id");
        const fileLinks = files[id] || [];

        
        fileList.innerHTML = "";

        fileLinks.forEach(file => {
            let listItem = document.createElement("li");
            let link = document.createElement("a");

            link.href = file;   
            link.textContent = fileNames[file] || file; 
            link.target = "_blank";     
            
            listItem.appendChild(link);
            fileList.appendChild(listItem);
        });

        modal.style.display = "flex";
    });
});

closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

