import { of, from, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { MOCK_CARS, MOCK_USERS } from './mock-data';

console.clear();

/* Task 1  **/
// Data Source
const dataSource = [3, 1, '939', null, 3, { numb: 3 }, undefined, 'number'];

const source$ = from(dataSource);

// create variable result$ that sums all numbers in array
// extend with pipe operators, so that you will get expected result
// for example for array [1, 'a', 4, null, '8']
// you should get 1 + 4 + 8 = 13

// const result$ = source$.pipe()
// result$.subscribe((value) => console.log(value))
// expected result: 3 + 1 + 939 + 3 = 946

/* Task 2 **/
// Data Source
const fetchUsers = {
  users: MOCK_USERS
};
const fetchData$ = of(fetchUsers);

// lets imagine that it is some kind of http call
// that returns us some users

// you should create variable countUsers$
// it will return us number of users which name starts with 'a' or 'A' or 'c' or 'C'

// const countUsers$ = fetchData$.pipe()
// countUsers$.subscribe((numberOfUsers) => console.log(numberOfUsers))

/* Task 3 **/
const cars$ = from(MOCK_CARS);

// lets imagine that you have web application that sells cars
// some user want to buy a car which price is less than 22000 (if its price is 22000 - it is ok for user)
// and not older than 4 years old (if its age is 4 - it is ok for user)
// so we need to filter all cars that are older or more expensive
// and also you should return cars as string
// '#model - #age: #price $'
// for example
// {
//   "age": 14,
//   "model": "Oldsmobile",
//   "price": 32966
// }
// this car you should return as 'Oldsmobile - 14: 32966 $'

// const filteredCars$ = cars$.pipe()
// filteredCars$.subscribe((car) => console.log(car))

/* Task 4 **/
// Last one will be easy

// const valueAEl = document.getElementById('valueA');
// const valueBEl = document.getElementById('valueB');
// fromEvent(valueAEl, 'input')
// fromEvent(valueBEl, 'input')

// you need to calculate sum of values from both inputs
// only if they are both numbers and both are present

// const sum$ = ...

// Tip: look for operators that somehow merge or combine streams
