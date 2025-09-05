/**
 * 1. 실행 시 컴퓨터가 숫자 하나 뽑기
 * 2. 숫자 입력 받기(node.js 사용)
 * 3. 
 */
let pickNum;
let repeat = true;
const RandomNum = (min, max) => {
    pickNum = Math.floor(Math.random()* (max - min + 1) + min);
    console.log(pickNum);
    return pickNum;
};

const handlebreak = () => {
    repeat = false;
    pickNum = null;
    alert("숫자 맞추기를 끝냅니다.");
};

const handleStart = () => {
    repeat = true;
    pickNum = RandomNum(1, 10);
};
const handleInputNum = (inputValue) => {
    const numberValue = Number(inputValue)

    while(repeat) {
        if(numberValue == pickNum) {
            alert('정답! 숫자를 섞습니다.');
            RandomNum(1, 10);
        }
        else if(numberValue != pickNum) {
            alert('땡! 다른 숫자를 입력해주세요.');
        }
        break;
    }

    if(pickNum == null || pickNum == undefined) {
        comparison();
    }
};


const comparison = () => {
        alert("click -> start!!");
};

comparison();