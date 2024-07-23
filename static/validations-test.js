import { isValid } from "./isValid.js";

console.log(isValid.username('asd'));
console.log(isValid.username('    '));

const emailValidationrez = isValid.email('');
if (emailValidationrez === true) {
    return 'OK'
} else {
    return
}
