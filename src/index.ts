import { of, from, fromEvent, combineLatest} from 'rxjs';
import { map, filter, reduce, pluck, mergeMap, count,  debounceTime} from 'rxjs/operators';
import { MOCK_CARS, MOCK_USERS } from './mock-data';


//-----Task1
function isNumber(n: any) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }

const dataSource = [3, 1, '939', null, 3, 1.7, { numb: 3 }, undefined, 'number'];

const source$ = from(dataSource);

const result$ = source$.pipe(
  filter(val =>  isNumber(val)), 
  reduce((acc, val) => acc + +val!, 0)
  );
result$.subscribe(value => console.log("Sum = ", value));


//-----Task2
const fetchUsers = {
  users: MOCK_USERS
};
const fetchData$ = of(fetchUsers);
const countUsers$ = fetchData$.pipe(
  map(users => users.users),
  mergeMap(arr => arr),
  pluck('first_name'),
  count(name => /^[acAC]/.test(name))
);
countUsers$.subscribe(value => console.log("Number of users = ", value));


//-----Task3
const cars$ = from(MOCK_CARS);

const filteredCars$ = cars$.pipe(
  filter(car => car.age <= 4 && car.price <= 22000),
  map(car => `${car.model} - ${car.age}: ${car.price} $\n`),
  reduce((acc, val) => acc + val, '')
);
filteredCars$.subscribe(console.log);

//-----Task4

const valueAEl = document.getElementById('valueA')!;
const valueBEl = document.getElementById('valueB')!;

const inputElement = ( elem: Element)=>
  fromEvent(elem, 'input')
  .pipe(
    map(event => (event.target as any).value),
    filter(val => /^[0-9]+$/.test(val)),
    debounceTime(800)
  );


const sum$ = combineLatest(inputElement(valueAEl), inputElement(valueBEl));

sum$.subscribe(([valueA, valueB]: any) => {
  console.log(+valueA + +valueB)
});





// you need to calculate sum of values from both inputs
// only if they are both numbers and both are present

// const sum$ = ...

// Tip: look for operators that somehow merge or combine streams
