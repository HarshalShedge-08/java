let target,sales,incentive,total;
sales=parseInt(prompt("Enter Sales Value"))
console.log("Sales: ",sales)
target=4000;

if(sales>=target){
incentive=sales*(10/100);
console.log("Incentives",incentive)
total=sales+incentive;
console.log("Total Salary :",total)
}

else
{
console.log("Sorry better luck next time")
}
