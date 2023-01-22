### Class notes `Chapter - 09 Optimizing our app` (22/01/2023)

We use hooks everyday in our code in functional component 

Basic hooks -> useState() and useEffect() 

Advanced concepts today -> Custom Hooks

Why ? How ? When ? 

Why ? Readability, Resuability, SoC and maintainability 

Why we use functions ? to perform some task that can be reused 

there should be a common where we can keep our utility functions and use in our code 

utils folder -> reusable functions could be placed 

This makes our code `testable` 


### Custom Hooks 

RestaurantMenu Component is doing 2 things : fetching data & displaying data 

So simply to do only one job : dispay data and moving fetching logic to custom hook

Whenever creating a custom hook -> create in a new file -> use keyword before hookname 

component name -> captilise first letter 
function (custom hook) -> camelCase 

why export default for custom hook -> since there is one separate hook js for each hook function 
why named export for config file -> many functions and variables 


update state using custom hook 

Inside custom hook => state & useEffect and async API call 

Custom hook for checking internet connection : to use only once 

How to fake offline -> network tab -> offline

Cleanup eventListener while moving out of that component 



Assigment : 

Local Storage : Get and Set local variables 


Code Splittling 
Dynamic bundling
Lazy loading 
Chunking 
On Demand loading

Logical bundles of our app 


Import Instamart -> lazy load 
 This is a promise 
Initially, on demand loaded components, will not be laoded 

React suspends the loading using Suspense 



Don't lazy load inside component -> it will reload during everytime it re-renders 
 