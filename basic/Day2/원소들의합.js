function solution(num_list) {
    var answer = 0;
    let sum = 0;
    let mult = 1;
    for (let i = 0; i<num_list.length; i++){
        sum += num_list[i]
        mult *= num_list[i]
    }

    answer = sum*sum >= mult ? 1 : 0
    return answer;
}