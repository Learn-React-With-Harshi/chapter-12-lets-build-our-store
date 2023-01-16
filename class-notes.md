### Class notes `Chapter-07 Finding the path` (15/01/2023)

## useEffect(callback, [dependencies])
If empty [] is passed in useEffect() -> only once
no [] is passed -> after every render
if passed with [serachText] -> Then useEffact() is called during first render, then afetr every time searchText state changes 

## NEVER DO THIS
Never create a component inside a component. You can compose a component inside a component because the component will be created after every render. 

Never use useState() inside if...else -> because it leads to inconsistency 

Never write useState() inside for loop 


React gives useState() to create a local state variable inside a functional component 


When to use npm library -> When the process of creating the actual code is difficult. Eg : Formik 
Homework : Login page with formik 

Finding the path -> create route to different pages of the application. 

Install a npm package -> React Router using command  npm i react-router-dom

Emmet for creating a functional component -> rafce 

import { createBrowserRouter } from "react-router-dom"; into App.js for enabling router in App.js

<RouterProvider router ={appRouter} /> to render in root where router is the props passed to RouterProvider Component 

SPA - Single Page Application

Types of routing ->
client side routing - load a different compoenent for each page without reloading 
server side routing - network call to fetch every page

react router dom -> keep track of all anchor tags using <Link /> but its converted to <a></a> which is understandable by browser


Why Nested routing ? Only load parts of the page (components) without reloading the page 

Create children of routes : [] inside the parent 

All children component will go into the Outlet of the parent component  


Dynamic Routing 

Read dynamic URL param 



Object.values() -> Convert Object into array of values 


In initial render, if the useState is initialised to {}, the map will throw error -> no data to loop through

Fix : initialise to null and if condition to early return

useRouteError -> to show error status and statusText 


