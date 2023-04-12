//join())
var txt = ['바람', '비', '물'];

var result = txt.join();
console.log(result);

console.log(txt.join(''));
console.log(txt.join('+'));
/*
join은 배열의 문자열로 반환해 줍니다
매개변수 자리에 아무것도 않넣으면 ,로 구분하고
'' 빈문자열을 넣으면 모두 붙여서(띄어쓰지 없이)
반환합니다
만약 배열의 값 사이에 구분을 짓고 싶으면
매개변수 자리에 넣어줍니다
join의 장점은 배열을 문자열로 바꾸는데 의의가
있습니다
*/
var txt2 = "좋은 아침입니다";
//reverse()

// console.log(txt2.reverse());
console.log(txt.reverse());

/*reverse() 는 배열의 값을 역순으로 반환합니다
cf)베열이아닌 대상에게 배열 매소드를 사용항경우 
자바스크립트 파일에서 오류가 나지않더라도
브라우저상에서는 오류가 납니다 사용할수 없는것입니다
*/
//concat();
var txtm = ['바람', '비', '물'];
console.log(txt.concat(txtm));

var fruits = "banana apple melon";
console.log(fruits.split(" "));
//split(분리자) 분리하고자 하는 문자 (' ')를
//기준으로  분리하여 배열로 봔환해 줍니다
//배열 매소드 join()과 정반대라고 할수 있습니다

var txt3 = "Hello world world";
console.log(txt3.replace("world", "EveryOne"));
//replace()는 
//replace("무엇을","무엇으로")매개변수 자리에
//써줍니다 그리고 replace는 처음 만나는 문자
//1개만 써줍니다

console.log(txt3.toLowerCase());
//모두 소문자로 변환
console.log(txt3.toUpperCase());
//모두 대문자로 변환
var result3 = txt3.match("Hello");
console.log(result3);

alert("안녕하세요");