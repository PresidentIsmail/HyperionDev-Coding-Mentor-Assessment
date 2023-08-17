import { validateAndConvertISBN } from './isbn';

// Test validateAndConvertISBN
console.log(validateAndConvertISBN("0306406152")); // Expected: 9780306406157
console.log(validateAndConvertISBN("9780306406157")); // Expected: Valid
console.log(validateAndConvertISBN("1234567890")); // Expected: Invalid

// Additional test cases
console.log(validateAndConvertISBN("0132350882")); // Expected: 9780132350884
console.log(validateAndConvertISBN("0312577222")); // Expected: 9780312577226
console.log(validateAndConvertISBN("0765326353")); // Expected: 9780765326355
console.log(validateAndConvertISBN("9780316769174")); // Expected: Valid
console.log(validateAndConvertISBN("9780451457998")); // Expected: Valid
console.log(validateAndConvertISBN("0470624564")); // Expected: Invalid
console.log(validateAndConvertISBN("")); // Expected: Invalid (empty string)