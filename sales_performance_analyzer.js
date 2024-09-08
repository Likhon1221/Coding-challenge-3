// 1. Create a Function to Calculate Average Sales

function calculateAverageSales(sales) {
	var sum = 0;  
  for (let i = 0; i < sales.length; i++) {
  	sum += sales[i];
  }
  return sum / sales.length;
}

// 2. Create a Function to Determine Performance Rating

function determinePerformanceRating(averageSales) {
	if (averageSales > 10000) {
  	return "Excellent";
  }
  else if (averageSales >= 7000) {
  	return "Good";
  }
  else if (averageSales >= 4000) {
  	return "Satisfactory";
  }
  else {
  	return "Needs Improvement";
  }
}