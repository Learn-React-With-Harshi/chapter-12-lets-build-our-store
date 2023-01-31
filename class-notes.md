### Class notes `Chapter-11 Data is the new oil` (29/01/2023)

Data is the new oil

UI layer & Data layer

Data layer -> states & props 

state -> local variable/ scope is only within a component

props -> values passed from one component to another component


Props Drilling :- Passing props from one component to another which inturn passes to another component 

AppLayout -> state (user) 
 pass as prop to Body
  Body -> 
  pass as prop to Body
    RestaurantCard -> 

React Developer tool -> important extension -> debugging data layer 
Component & Profiler in console dev 

Data layer:

props 
State 
Hooks 
rendered by 
source 

Data from child to parent ? 

state lifting 

Context -> for storing a data that we can used throughout application 

why not global variable -> react will not be able to track and trigger reconciliation 

Create Context in utils

useContext -> hook 

Context Provider -> displayName for debugging in React Dev Tools 