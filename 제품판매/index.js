let big = document.querySelector("#big");
let smallPics = document.querySelectorAll(".small");
const originalSrc = big.src;

for (let i = 0; i < smallPics.length; i++) {
    smallPics[i].addEventListener("click", changePic);
}

function changePic() {
    let newPic = this.src;
    big.setAttribute("src", newPic);

    setTimeout(() => {
        big.setAttribute("src", originalSrc);
    }, 3000);
}
// 제품------------------------------------------------
let big1 = document.querySelector("#big1");
let smallPics1 = document.querySelectorAll(".small1");
const originalSrc1 = big1.src;

for (let i = 0; i < smallPics1.length; i++) {
    smallPics1[i].addEventListener("click", changePic1);
}

function changePic1() {
    let newPic1 = this.src;
    big1.setAttribute("src", newPic1);

    setTimeout(() => {
        big1.setAttribute("src", originalSrc1);
    }, 3000);
}
// 제품------------------------------------------------
let big2 = document.querySelector("#big2");
let smallPics2 = document.querySelectorAll(".small2");
const originalSrc2 = big2.src;

for (let i = 0; i < smallPics2.length; i++) {
    smallPics2[i].addEventListener("click", changePic2);
}

function changePic2() {
    let newPic2 = this.src;
    big2.setAttribute("src", newPic2);

    setTimeout(() => {
        big2.setAttribute("src", originalSrc2);
    }, 3000);
}

// 장바구니 리스트 ---------------------------------------

const shoppingList = document.querySelector("#shoppingList");
const addButtons = document.querySelectorAll(".container button");
// 각 "주문하기" 버튼을 반복적으로 실행해준다.
addButtons.forEach(addButton => {
    // 클릭 시 내부 함수가 실행
    addButton.addEventListener("click", (e) => {
        let productTitle = e.target.closest(".eco800").querySelector(".eco").innerText;
        let newP = document.createElement("p");
        let textNode = document.createTextNode(productTitle);
        newP.appendChild(textNode);
        shoppingList.appendChild(newP);

        newP.style.fontSize = "20px";
        newP.style.color = "palegreen";
        newP.style.margin = "10px";
    });
});

