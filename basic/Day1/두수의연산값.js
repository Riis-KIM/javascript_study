function solution(a, b) {
    const t1 = String(a) + String(b) 
    return Math.max(Number(t1), 2*a*b);
}