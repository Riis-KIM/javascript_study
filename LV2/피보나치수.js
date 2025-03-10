// 평범한 피보나치 문제
// 자바스크립트에서는 큰 수를 계산할 때 BigInt 사용
// BigInt 사용 시 Number로 표현 못하는 큰 수도 정수 형태를 잃지 않음
// 대신 BigInt는 BigInt끼리만 연산 가능

function solution(n) {
    let fib = [0,1]
    for (let i = 2; i<n+1; i++){
        fib.push(BigInt(fib[i-1]) + BigInt(fib[i-2]))
    }
    return fib[n] % BigInt(1234567);
}