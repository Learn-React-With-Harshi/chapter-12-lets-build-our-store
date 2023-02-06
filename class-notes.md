### Class notes `Chapter-12 Let's build our store` (04/02/2023)

Today's session will be on more efficient & complex ways of handling data in our application. -> Redux

Small apllication -> Context API is sufficient

When application grows bigger -> Use Redux 

Redux -> external library for state management

Concerns with Redux :

1. Huge learning curve 
2. Complex configuration 
3. Too much boilerplate code  

So, Redux Toolkit was introduced

Redux vs Redux-Toolkit 


At the end of the day -> Redux is an Object which can be accessed by all components 

State variable 's scope -> Only within the component 

Only single Redux store -> for the whole app -> with logical separation -> with each store having different slices 

cart 

user 

auth 

.
.
.
slices 



Today's feature that we are building -> Cart Workflow 

Restaurant Menu Click on ADD button -> Item added to Cart -> 


Steps :

Writing into the Store 

1. When we need to make a modification in the store, we must first dispatch an action that calls a reducer function which updates the slice of the store.
Eg : Click Add button -> addItem -> reducer -> cart in store 

Jargons : Dispatch, action, reducer, slice, store


Reading from the Store 
2. When we want to read from the store, we must call a Selector Hook (function) (selecting a slice of store), which updated the cart component. 

Cart component is subscribed to the store using the Selector 

Eg: Store (Collection of slices) -> Selector -> subscribe -> Cart component  

Jargons : Selector, slice, store 


-----
Toolkit -> Core of Redux 
React-redux 0> bridge between redux & React 

Install 
npm install @reduxjs/toolkit  
npm install react-redux

Steps :
1. Create store.js file in utils and import configureStore() from rtk
2. Create store using configureStore() and export it.
3. Import { Provider } from react-redux in root component
4. Import store from utils in root component
5. Enclose the components that need Store using <Provider>
6. Send props store={store}
7. Create cartSlice.js in utils and import createSlice() from rtk
8. Create a cartSlice using createSlice with name, initialState (items :[]) and reducers funtion 
8. reducers funtion contains actions that is dispatched - addItem with state & action params 
9. state contains the states of the slice and action
10. modifications are done to state inside action of reducers -> addItem, removeItem, cLearCart
11. export the reducer cartSlice.reducer  (default export)
12. export cartSlice.actions with all the action functions (destructured named exporte)
13. import the cartSlice into the store 


reducers is the function name -> but exported as reducer  -> confusing 


How createSlice is stored in background ?

cartSlice = {
  actions : {
    addItem,
    removeItem,
    clearCart 
  },
  reducer : reducers 
}


useSelector -> what it is subscribing to 




-------------------------
chapter - 13 

How to test react applications ? Jest & React Testing Library (alternative to enzyme)

How to setup test for our app ? 



Why test cases ? 

1. New code should not old code 
2. Not breaking existing code - Maintainability 
3. 

TDD - test Driven Development ? Test cases even before writing code, development becomes very slow. 

Types of tesing : 
1. Manual testing -> human testing the code
2. Automated testing -> code testing the code  Eg: Selenium 

3. E2E tetsing -> test the whole flow by stimulating . Eg:cypress 
This is offloaded to QA team. 
Headless browser -> browser does not have to do teh work of laoding UI in browser. It makes testing faster. 

4. Unit testing -> core job of developers -> testing small unit of code 

5. Integration testing -> Data flow between components 

6. Performance, Regression and Smoke testing 


React-Testing-library
1. Install React Testing library
2. Install Jest 
3. Configure Jest -> npx jest --init 
4. Typescript -> N
5. environment -> jsdom (broswer-like)
6. code coverage -> y
7. provider for coverage -> babel 
8. automatically clear before test -> y 
9. Creates jest.config.js 
10. scripts -> test : jest 
11. npm install -D test-environment-jsdom
12. jest is trying to find test cases in the app under __tests__ folder 
13. Create first test -> sum.test.js under __tests__ folder
14. test("testcase name ", () => { })
15. Every test case should have some assertion -  `expect` to return - `toBe`  expeect(sum(2,3)).toBe(5) 
16. import sum.js (component) inside sum.test.js 
17. install babel-jest @babel/core @babel/preset-env
18. to configure babel -> babelrc file or babel.config.js
19. 
 










