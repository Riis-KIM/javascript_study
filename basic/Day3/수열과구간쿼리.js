function solution(arr, queries) {
    for (let i = 0; i<queries.length; i++){
        let s = queries[i][0]
        let e = queries[i][1]
        let k = queries[i][2]
        for (let t = s; t <= e; t++){
            if ((t % k) === 0){
                arr[t] ++
            }
        }
    }
    return arr;
}