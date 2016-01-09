$(document).ready(function() {
    for (var i = 1; i <= 100; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            $('#fizzbuzz').append('FizzBuzz<br />');
        } else if (i % 3 == 0) {
            $('#fizzbuzz').append('Fizz<br />');
        } else if (i % 5 == 0) {
            $('#fizzbuzz').append('Buzz<br />');
        } else {
            $('#fizzbuzz').append(i + '<br />');
        }
    }
});