# `Learn React With Harshi` Series 
   Documenting my learning journey of [Namaste React Live Course](https://learn.namastedev.com/) conducted by Akshay Saini

## Coding Assignment: `Chapter - 05 Let's get hooked` (08/01/2023)

### Build a Food Ordering App 

In this chapter, we implemented few more features and enhancements to the app :

  1. File reorganised
  2. Import/Export modules
  3. Search text and modify the restaurant card view accordingly.

Last chapter was the starting point of the application where all the components were created in the same file (app.js). It's high time to re-organise teh file structure and move components to a separate file each serving a single responsibility.

All the components are placed under th folder `src` -> `components`. Since there are jsx codes in all those files, it can be renamed with extension `.jsx`. But I prefer `.js` extension over the other. Once components are moved, there must be a way to call those  components into App.js 

For that, we need to export and import components into one another. I have documented about all ways of imports/exports in [`theory-assignment.md`](https://github.com/Learn-React-With-Harshi/chapter-05-lets-get-hooked/blob/main/theory-assignment.md) and implemented the same in the app. 

After all the cleaning & restructuring, we created the search feature.

 Layout : 
1. Search input box and Search button is placed just below the header under `search-container`
2. It is placed in the center of the page
3. In mobile view, the size of the input box and button must be reduced to fit the mobile screen.
4. Below the search box, all the restaurants will be displayed in restaurant-list
5. restaurant-list will be consisting of restaurant cards with card-img, card-title, card-tags, rating and delivery time.
6. if rating > 3, then rating bg must be green and if rating < 3, rating bg must be orange

 Functionalities :
1. Search for a restaurant and if found display only the matched restaurants 
2. If no matches found, display error message `no matches found`


In last chapter, we covered first two steps of [Thinking in React](https://beta.reactjs.org/learn/thinking-in-react). Now, let's continue with that approach and see how many steps we can cover in this chapter.
To recap, we divided the UI into component hierarchy and created static version of the app (one-way binding, just displayed the list of restaurants). In this chapter, we tried to implement `two-way binding` where user can communicate with app through a search input box and display only list of restaurants that matched the search.
### Step 3: Identify The Minimal (but complete) Representation Of UI State
 - Think of set of mutable state that your app needs (DRY - Don't repeat yourself)

Mutable state (changable) in InstaFood till now is `search box`, `restaurant data` and `error mesage` to be displayed under the input box if no results are matched.

### Step 4: Identify where your state should live 
  - Identify every component that renders something based on that state.
  - Find a common owner component (a single component above all the components that need the state in the hierarchy). - this should own the state 

The common owner component in our app is `Body` since it contains both search box and restaurant list view. So, we must create states in Body level for it to be accessed and rendered in both components.
### Step : 5 Add Inverse data-flow 

  - Till now , React is one-way binding ( data flow in one direction only and whatever typed in the input box will be ignored intentionally )
  - Two-way data binding can be done - whenever the input is changed, setState() is called to update the state 
  
We know all the states we need and where they need to be placed. Now, we can create three states using `React Hooks` - find explanation in the theory assignment and code for reference. 

In short, useState() is a basic hook which creates a state and assigns a initial value to it. Whenever, the state is to be modified, setState() is used to set the new state. 

In our case, `searchText` is a state since its value is changed by the user by typing for some restaurant name to search. 
Once its value is changed, state is updated and function is called on click of search button to search for the restaurants that match. 

Once we receive the matched restaurants, the state of restautant view must be updated and hence `restaurants` is also a state which updates. 

If no matched restaurants are found, the error msg is displayed and it must be updated (removed) when some match is found. Hence `errorMsg` is also a state.


This is my intrepretation of `Thinking in React` that I was able to decode from `Namaste React Course`.





