# `Learn React With Harshi` Series 
   Documenting my learning journey of [Namaste React Live Course](https://learn.namastedev.com/) conducted by Akshay Saini

## Coding Assignment: `Chapter - 05 Let's get hooked` (08/01/2023)

### Build a Food Ordering App 

  In this chapter, we implemented few more features :

  1. File reorganised
  2. Import/Export modules
  3. Search text and modify the restaurant card view accordingly.

Last chapter was the start of the application and all the components were created in the same file (app.js). It's high time to re-organise teh file structure and move components to a separate file each serving a single responsibility.

For that, we need to export and import components into one another. I have documented about all ways of imports/exports in [`theory-assignment.md`](https://github.com/Learn-React-With-Harshi/chapter-05-lets-get-hooked/blob/main/theory-assignment.md) and implemented the same in the app. 

After all the cleaning & restructuring, we created the search feature.
Functionalities :
1. Search for a restaurant and if found display matches
2. If no matches found, display error message `no matches found`

### Step 3: Identify The Minimal (but complete) Representation Of UI State
 - Think of set of mutable state that your app needs (DRY- Don't repeat yourself)

### Step 4: Identify where your state should live 
  - Identify every component that renders something based on that state.
  - Find a common owner component (a single component above all the components that need the state in the hierarchy). - this should own the state 

### Step : 5 Add Inverse data-flow 

  - Till now , React is one-way binding ( data flow in one direction only and whatever typed in the iinput box will be ignored intentionally )
  - Two-way data binding can be done - whenever the input is changed, setState() is called to update the state 
  



