const printSum = (n1, n2, callback) => {
    setTimeout(() => {
        const sum = n1 + n2
        callback(sum)
    }, 2000);
}

const answer = printSum(2, 3, (sum) => console.log(sum))
