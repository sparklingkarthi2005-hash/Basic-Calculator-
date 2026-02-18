//Function for Addition
function add()
{
    let a=Number(document.getElementById("a").value);
    let b=Number(document.getElementById("b").value);
    let c=a+b;
    document.getElementById("c").innerHTML="Addition = " + c;
}
//Function for Subtraction
function sub()
{
    let a=Number(document.getElementById("a").value);
    let b=Number(document.getElementById("b").value);
    let c=a-b;
    document.getElementById("c").innerHTML="Subtraction = " + c;
}
//Function for Multiplication
function mul()
{
    let a=Number(document.getElementById("a").value);
    let b=Number(document.getElementById("b").value);
    let c=a*b;
    document.getElementById("c").innerHTML="Multiplication = " + c;
}
//Function for Division
function div()
{
    let a=Number(document.getElementById("a").value);
    let b=Number(document.getElementById("b").value);
    let c=a/b;
    document.getElementById("c").innerHTML="Division = " + c;
}
//Function for Modulus
function mod()
{
    let a=Number(document.getElementById("a").value);
    let b=Number(document.getElementById("b").value);
    let c=a%b;
    document.getElementById("c").innerHTML="Modulus = " + c;
}