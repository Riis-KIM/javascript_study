function solution(code) {
    var answer = '';
    let mode = 0;
    for (let idx = 0; idx < code.length; idx++){    // 인덱스 길이
        if (mode === 0){                // mode가 0 일때
            if (code[idx] === '1'){     // code가 1이면
                mode = 1                // mode 변경
            } else {
                if (idx % 2 === 0){     // 짝수일때 문자 추가
                    answer += code[idx]
                }
            }
        } else if (mode === 1){
            if (code[idx] === '1'){
                mode = 0
            } else{
                if (idx % 2 !== 0){     // 홀수일때 문자 추가
                    answer += code[idx]
                }
            }
        }
    }
    if (answer.length === 0){           // answer 비어있으면 EMPTY 추가
        answer = "EMPTY"
    }
    
    return answer;
}