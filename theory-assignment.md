
# `Learn React With Harshi` Series 
   Documenting my learning journey of [Namaste React Live Course](https://learn.namastedev.com/) conducted by Akshay Saini

## Theory Assignment: `Chapter-11 Data is the new oil` (29/01/2023)

### 1. What is prop drilling?

`Prop drilling` is a technique where data is passed from one component through multiple components until it gets to the component where the data is needed.

<ans>Example : </ans>
I have already implemented `props drilling` in our app InstaFood without knowing its actually name. So, I wanted to pass user info like name, email and isAuthenticated values that I get in landing page (`AppLayout`) component to `NavComponent` in `Header` where based on isAuthenticated value, display Login or Logout button.

Check App.js & Header.js to see how the props is passed from `AppLayout` to `NavComponent` of previous chapter to see the props drilling implementation. Because, in this chapter we will be modifying that with React Context. More about that in React context section below.

### 2. What is lifting the state up?
When we want to pass some props from child component to parent or its siblings, we can use `lifting up state` technique. It can be thought as if the control is handed over to the parent and let the child modify the data through the function that is passed to child as props. There is a `single sourace of truth` maintained by the parent. 

<ans>Example : </ans>

1. Child -> Parent  : I have implemented this in my app for passing marked favourite restaurant card data to Body Component. Check code for implementation & coding-assignment.md for explanation.

2. Child -> Siblings : I have implemented this in my app for displaying FAQ sections under Help.js for letting child know about the state of its siblings by lifting up the state to the closest ancestor parent.
Check code for implementation & coding-assignment.md for explanation.

### 3. What is Context Provider and Context Consumer?
React Context API provides a way to pass data through multiple nested levels of components without having to manually pass that data to each level. It is a way of global state management. 

Three steps of working with Conext :
1.  Create the Context -> Create using createContext() & Export context from a file (in utils folder)
2.  Provide Context -> Wrap teh required components with a context provider
3.  Use the Context -> Import useContext hook & the created context and create variable to store and use this context


   <ans>Context Provider</ans>

     Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.

     The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.


   <ans>Context Consumer</ans>
    
     Before `useContext` existed, there was an older way to read context : `Context.Consumer`

   ```javascript
   function Button() {
    // 🟡 Legacy way (not recommended)
   return (
    <ThemeContext.Consumer>
      {theme => (
        <button className={theme} />
      )}
    </ThemeContext.Consumer>
   );
   }
   ``` 

### 4. If you don’t pass a value to the provider does it take the default value?

No, default value is not passed as value to components when we don't pass a value to the provider. React throws an error in that case. If we don't need to pass value then value={undefined} must be mentioned in provider.

The `defaultValue` argument is *only* used when a component does not have a matching Provider above it in the tree


