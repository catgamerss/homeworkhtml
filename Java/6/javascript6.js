let arr = ['hello', 'world', 23, '23', null];
function filterBy( [])
{
    let typeOf = typeof(arr[1]); 
    let new_arr = arr.filter(function(CurrentValue){
    return typeof(CurrentValue) != typeOf;});
    return new_arr;
}

console.log(filterBy(arr));