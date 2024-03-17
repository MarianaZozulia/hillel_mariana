
'number' + 3 + 3
result: 'number33' //concatenation operation, in the addition action the all types changed to strings

null + 3
result: 3 // because null means absence of value or reference to the object, so nothing+3=3

5 && "qwerty"
result: 'qwerty' // 5 means true, qwerty is also true as not empty string, so returned as second true operand

+'40' + +'2' + "hillel";
result:'402hillel' //concatenation operation, even strings that changed to numbers become strings after addition action

'10' - 5 === 6;
result: false // the values are not accurate equal 5!=6

true + false
result:1 // false converted to 0, true converted to 1, so 0+1=1

'4px' - 3
result:NaN // can't be converted to the same data type and operate the value result

'4' - 3
result: 1 // '4' converted to the number explicitly

'6' + 3 ** 0;
result: 61 // 3**0=1, addition return the result of the concatenation operation

12 / '6'
result: 2 // string converted to the number explicitly

'10' + (5 === 6);
result: '10false' // 5 is not accurate equal to 6 that return false and the result of the concatenation operation

null == ''
result: false // null means nothing value, empty string is a value

3 ** (9 / 3);
result: 27 // all values with number type

!!'false' == !!'true'
result: true // 'false' is converted to true as not empty string, !true=false, !false=true
// 'true' is converted to true as not empty string, !true=false, !false=true
//true==true -> true

0 || '0' && 1
result:1
    // 0 means false, '0' equal to true - it's not empty, false || true -> true, so returned '0' as second true operand
    // '0' && 1, '0' equal to true as not empty, 1 equal to true
    // all statements are true, so returned the second operand that is 1

(+null == false) < 1;
result: false // +null=0, 0 equal to false, false==false -> true, true equal to 1, 1<1 -> false

false && true || true
result:true // false && true equal to false because both of the operands must be true
// false || true -> true because one of the operands is true

false && (false || true);
result: false // false || true -> true because one of the operands is true
    // false && true -> false because both of the operands must be true

(+null == false) < 1 ** 5;
result: false // +null=0, 0 equal to false, false==false -> true, 1 ** 5=1, 1<1 -> false