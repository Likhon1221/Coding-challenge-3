// 1. Create a Function to Calculate Average Sales

function calculateAverageSales(sales) {
	var sum = 0;  
  for (let i = 0; i < sales.length; i++) {
  	sum += sales[i];
  }
  return sum / sales.length;
}
