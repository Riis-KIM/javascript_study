function solution(num_list) {
    let tmp = num_list.length
    if (num_list[tmp-1] > num_list[tmp-2]){
        num_list.push(num_list[tmp-1] - num_list[tmp-2])
    } else{
        num_list.push(num_list[tmp-1] * 2)
    }
    return num_list;
}