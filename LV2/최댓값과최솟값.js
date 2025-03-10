// 자바스크립트도 split과 map 사용 가능

function solution(s) {
    const arr = s.split(' ').map(Number);
    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }

    return `${min} ${max}`;
}