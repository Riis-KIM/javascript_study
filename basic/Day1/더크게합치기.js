function solution(a, b) {
    let t1 = ''
    let t2 = ''
    t1 += String(a) + String(b)
    t2 += String(b) + String(a)
    if (Number(t1) > Number(t2)){
        return (Number(t1))
    } else {
        return (Number(t2))
    }
}

function solution(a, b) {
    const t1 = String(a) + String(b);
    const t2 = String(b) + String(a);
    return Math.max(Number(t1), Number(t2));
}