// Given a and b, your function should return the value of a^b
// Example:
// Input: power(2,3) ––> Output: 8

function power(a, b)
{
    var result = 1;
    for (let i = 1; i <= b; i++) {
        var result = result * a;
    }
    return result;
}

console.log(power(2,3))

