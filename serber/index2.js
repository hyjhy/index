const container = document.querySelector("#container");
// 이미지 경로는 이미지 이름만 입력하기
const pics = [`https://cdn.imweb.me/upload/S20220318b8271c9a37983/b9b91ea49442b.jpg`,
 `https://cdn.imweb.me/upload/S20220318b8271c9a37983/6db828c763204.jpg`,
  `https://cdn.imweb.me/upload/S20220318b8271c9a37983/4b635052ae2bc.jpg`,
   `https://cdn.imweb.me/upload/S20220318b8271c9a37983/236d2ecb475f6.jpg`   ]
// 이미지 경로 확인 잘하기 / ./넣기
container.style.backgroundImage = `url(${pics[0]})`;
const arrows = document.querySelectorAll(".arrow"); // 모든 화살표 가져오기

let i=0; // 배열 인덱스
arrows.forEach(arrow => {
    arrow.addEventListener("click", (e) => {
        if(e.target.id === "left"){ // 왼쪽인지 확인
            i--; //이전 이미지로 이동
            if (i<0){ // 첫번째 이미지
                i = pics.length -1; // 맨 마지막 사진 이동
            }
        } else if (e.target.id === "right"){ // 오른쪽인지 확인
            i++; // 다음 이미지로 이동
            if(i === pics.length){ // 마지막 이미지
                i = 0; //첫번째 이미지로 이동
            }
        }
        container.style.backgroundImage = `url(${pics[i]})`;
    })
})
