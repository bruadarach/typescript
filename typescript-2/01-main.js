"use strict";
exports.__esModule = true;
var message = "Hello World";
console.log(message);
/* Error Messsage !
let message: string
Cannot redeclare block-scoped variable 'message'.ts(2451)

Why?
: Because the file is treated as a script file, rather than a module file.
: A Module has its own scope, whereas a script file shares the global scope.

Solution?
: To get rid of the error, we need to tell the compiler that the file is a module file.
: We need to add an export statement at the top of the file, which exports nothing.
: export {}; statement is used to tell the compiler that the file is a module file.

Useful
:
*/
function logName(name) {
    console.log(name);
}
logName("Sujeong Ji");
