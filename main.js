function solve()
{
    let input = document.getElementById('number').value;
    let array= input.split(',');
    let positive_value=array.filter(item=>item>0);
    console.log(positive_value);
}