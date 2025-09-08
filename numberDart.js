/**
 * 1. 실행 시 컴퓨터가 숫자 하나 뽑기
 */
let pickNum;
let repeat = true;
var input = document.getElementById('random-num');

const RandomNum = (min, max) => {
    pickNum = Math.floor(Math.random()* (max - min + 1) + min);
    console.log(pickNum);
    return pickNum;
};

const handlebreak = () => {
    repeat = false;
    pickNum = null;
    input.value = null;
    alert("숫자 맞추기를 끝냅니다.");
};

const handleStart = () => {
    repeat = true;
    input.value = null;
    pickNum = RandomNum(1, 10);
};

const handleInputNum = (inputValue) => {
    const numberValue = Number(inputValue)
    input.value = null;
    if(repeat != true) {
        comparison();
    }
    else {
        while(repeat) {
            if(numberValue == pickNum) {
                alert('정답! 숫자를 섞습니다.');
                input.value = null;
                RandomNum(1, 10);
            }
            else if((pickNum != null || pickNum != undefined) &&numberValue != pickNum) {
                alert('땡! 다른 숫자를 입력해주세요.');
            }
            break;
        }

        if(pickNum == null || pickNum == undefined) {
            comparison();
        }
    }
};


const comparison = () => {
    alert("click -> start!!");
};
