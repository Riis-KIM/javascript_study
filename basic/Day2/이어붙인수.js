function solution(num_list) {
    var answer = 0;
    let od = ""
    let ev = ""
    for (let i = 0; i<num_list.length;i++){
        if (num_list[i] % 2 === 0){
          ev += String(num_list[i])  
        } else {
            od += String(num_list[i])
        }
    }
    answer = Number(ev) + Number(od)
    return answer;
}