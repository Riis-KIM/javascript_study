function solution(cards1, cards2, goal) {
    var answer = '';
    let a1 = 0;
    let b1 = 0;
    let end = 0;
    while (end <goal.length){
        if (cards1[a1] === goal[end]){
            a1 += 1
            end += 1
        } else if (cards2[b1] === goal[end]){
            b1 += 1
            end += 1
        } else {
            answer = "No"
            return answer
        }
    }
    answer = "Yes"
    return answer;
}