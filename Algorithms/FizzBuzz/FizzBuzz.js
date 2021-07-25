const FIZZ = 'FIZZ';
const BUZZ = 'BUZZ';

function fizzBuzz(number) {
    for (let i = 0; i <= number; i++) {
        if (i % 15 === 0) {
            console.log(`${FIZZ}${BUZZ}`);
        } else if (i % 5 === 0) {
            console.log(BUZZ);
        } else if (i % 3 === 0) {
            console.log(FIZZ);
        } else {
            console.log(i);
        }
    }
}
