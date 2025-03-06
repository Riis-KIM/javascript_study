function solution(name, yearning, photo) {
    var answer = [];
    for (let i = 0; i<photo.length; i++){
        let score = 0;
        for (let t = 0; t<name.length; t++){
            if(photo[i].includes(name[t])){
                score += yearning[t]
            }
        }
        answer.push(score)
    }
    return answer;
}