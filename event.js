

let box = document.querySelector("#box");
/*
박스라는 변수에 document즉 body안쪽에 작성된
문서의 내용 중에서 queryselector로 아이디가 box인
대상을 찾아달아는 내용을 담는것
*/
function clicked() {
    alert("인라인 방식으로 이벤트를 부여하였습니다")

};
/* 
1.이벤트를 인라인 형식으로 호출하는 방법
+>js파일에 함수를 작성합니다
+>html에 적용될 요소 안에 on이벤트명으로
해당함수를 호출 합니다
단점 :유지보수를 하려면 2개의 파일이나 열어야 
하므로 매우 불편하다
*/
box.onmouseenter = function () {
    box.style.backgroundColor = "pink"
};



box.onmouseleave = function () {
    box.style.backgroundColor = "aqua";
};
//이벤트 핸들러를 사용하는 방법
//단점은 없습니다 취양의 차이 입니다

/*
**표기법**
2개 이상의 단어들이 하나로 조합될때 표기하는 방법
1.카멜 표기법=onclick<= 추천하는 표기법
2.스네이크 표기법=on_click
*/
let btnplus = docoment.querySelector(".btnplus");
let btnMinus = docoment.querySelector(".btnMinus");
let num = 0;
//btnplus.addEventListener("이벤트이름",함수);

btnplus.addEventListener("click", function (e) {
    e.preventDefault()
    console.log(num);
    num++;
    console.log(num);
});