function solution(arr, queries) {
    var answer = [];
    queries.map((query) => {
        let [s, e, k] = query
        let tmp = 1000001
        for (let i = s; i <= e; i ++){
            if (arr[i] > k){
                if (arr[i] < tmp){
                    console.log("여기까지옴", arr[i])
                    tmp = arr[i]
                }
            }
        }
        if (tmp === 1000001){
            answer.push(-1)
        } else{
        answer.push(tmp)}
    });
    return answer;
}