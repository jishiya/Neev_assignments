"use strict"

const ages_of_employee = [25,32,31,22,39,40,42,36,45,24,54];

const employee_details =[
  {name: "employee_1", category: "Finance", start: 2019},
  {name: "employee_2", category: "Retail", start: 2000},
  {name: "employee_3", category: "Auto", start: 2003},
  {name : "employee_4", category: "Technology", start:2015},
  {name: "employee_5", category: "Retail", start: 2013},
  {name: "employee_6", category: "Technology", start: 2020}
];

//----------------------------------------------------------------------------//

//map with inbuilt function with arrow operator

const ageSquare = ages_of_employee.map(age => age*age);

console.log(ageSquare);

//map with implementation and not using inbuilt function

//declaring the function

function mapFunction(arr, mapFunc){
  const mapArr = [];
  for(let i=0;i<arr.length;i++){
    const result = mapFunc(arr[i],i,arr);
    mapArr.push(result);
  }
  return mapArr;
}

//calling mapFunction

const ageSquareWithoutInbuiltFunction = mapFunction(ages_of_employee, num => num **2);

console.log(ageSquareWithoutInbuiltFunction);


//----------------------------------------------------------------------------//


//filter with inbuilt function

const ageGreaterThanTirty = ages_of_employee.filter(function(age){
  if (age > 30){
    return true;
  }
});

console.log(ageGreaterThanTirty);


//filter with inbuilt function and arrow operator

const employeeWorksForRetailCompany = employee_details.filter(company => company.category == "Retail");

console.log(employeeWorksForRetailCompany);


//filter with implementation and not using inbuilt function

function filterFunction(arr, filterFunc){
  const filterArr = [];
  for (let i = 0; i <arr.length; i++) {
    const result = filterFunc(arr[i],i,arr);
    if (result){
      filterArr.push(arr[i]);
    }
  }

  return filterArr;
}

//calling the filter function

const ageGreaterThanTirtyWithoutInbuiltFuntion = filterFunction(ages_of_employee, num=>num>30);
console.log(ageGreaterThanTirtyWithoutInbuiltFuntion);


//----------------------------------------------------------------------------//


//reduce with inbuilt function

const ageSum = ages_of_employee.reduce(function(total,age){
  return total + age;
});

console.log(ageSum);  //prints 390



//reduce with implementation and not using inbuilt function

function reduceFunction(arr, reduceFunc, initialValue=0) {
  let result = initialValue;
  for (let i = 0; i < arr.length; i++) {
    result = reduceFunc(result,arr[i],i,arr)
  }
  return result;
}

const ageSumWithoutInbuiltFunction = reduceFunction(ages_of_employee, (total,age)=>total+age);

console.log(ageSumWithoutInbuiltFunction); //prints 390


//----------------------------------------------------------------------------//


//forEach with inbuilt function

ages_of_employee.forEach(function(age){
  console.log(age);
});


//foreach without inbuilt function

for(let i=0; i<ages_of_employee.length; i++){
  console.log(ages_of_employee[i]);
}
