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

// 3. Create a Function to Identify Top and Bottom Performers

function findTopAndBottomPerformers(salesPeople) {
	var topPerformer;
  var bottomPerformer;
  
  var max = -1;
  var min = 99999999;
  for (let i = 0; i < salesPeople.length; i++) {  	
    if (salesPeople[i].totalSales > max) {
    	topPerformer = salesPeople[i];
      max = salesPeople[i].totalSales ;
    }
    if (salesPeople[i].totalSales < min) {
    	bottomPerformer = salesPeople[i];
      min = salesPeople[i].totalSales;
    }
  }
  return {topPerformer: Object.assign({}, topPerformer), bottomPerformer: Object.assign({}, bottomPerformer)};
}

// 4. Combine Functions to Generate a Performance Report

function generatePerformanceReport(salesData) {
	var salesPeople = [];
  for (let i = 0; i < salesData.length; i++) {  
  	let avgSales = calculateAverageSales(salesData[i].sales);
    let perfRating = determinePerformanceRating(avgSales);   
    let totalSales = 0;
    for (let j = 0; j < salesData[i].sales.length; j++) {
    	totalSales += salesData[i].sales[j];
    }
    salesPeople.push({name: salesData[i].name, sales: salesData[i].sales, totalSales: totalSales, avgSales: avgSales, perfRating: perfRating});
  }
  var performers = findTopAndBottomPerformers(salesPeople);
  return {salesPeople: salesPeople, topPerformer: performers.topPerformer, bottomPerformer: performers.bottomPerformer}; 
}