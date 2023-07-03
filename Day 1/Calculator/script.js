// function calculate(operator)
// {
//     var value_one = document.getElementsByClassName('valueone')[0]
//     var value_two = document.getElementById('valuetwo').value
//     let result;
//     switch(operator)
//     {
//         case add:
//             {
//                 result = value_one + value_two;
//                 break;
//             }
//         case subtract:
//             {
//                 result = value_one - value_two;
//                 break;
//             }
//         case subtract:
//             {
//                 result = value_one * value_two;
//                 break;
//             }
//     }
//     console.log('Result:', result);
// }






function add()
{
    var value_one = document.getElementsByClassName('valueone')[0]
    var value_two = document.getElementById('valuetwo').value
    console.log(parseInt(value_one.value)+parseInt(value_two))
}

function subtract()
{
    var value_one = document.getElementsByClassName('valueone')[0]
    var value_two = document.getElementById('valuetwo').value
    console.log(parseInt(value_one.value)-parseInt(value_two))
}

function multiply()
{
    var value_one = document.getElementsByClassName('valueone')[0]
    var value_two = document.getElementById('valuetwo').value
    console.log(parseInt(value_one.value)*parseInt(value_two))
}

function divide()
{
    var value_one = document.getElementsByClassName('valueone')[0]
    var value_two = document.getElementById('valuetwo').value
    console.log(parseInt(value_one.value)/parseInt(value_two))
}

function mod()
{
    var value_one = document.getElementsByClassName('valueone')[0]
    var value_two = document.getElementById('valuetwo').value
    console.log(parseInt(value_one.value)%parseInt(value_two))
}