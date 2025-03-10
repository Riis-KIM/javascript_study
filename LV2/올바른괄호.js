// 간단한 스택을 구현했음
// 배열 연산에 좀 더 익숙해질 필요가 있음, 아직 push pop 적응안됨

function solution(s){
    let a = []
    
    for (let i = 0; i<s.length; i++){
        if(s[i] === '('){
            a.push('(')
        }
        else{
            if(a.length > 0){
                a.pop()
            } else{
                return false
            }
        }
    }
    
    if (a.length === 0){
        return true
    } else {
        return false
    }
}