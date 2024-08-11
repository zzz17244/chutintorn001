let arr = [1,2,3,4,5,6,7,8,9,10]

let newarr = arr.filter( num => num % 2 === 0 ).map(num => num * 1000).reduce((sum,num)=> (sum + num),0)

console.log(newarr)


