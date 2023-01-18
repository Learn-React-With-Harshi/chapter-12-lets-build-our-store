
# `Learn React With Harshi` Series 
   Documenting my learning journey of [Namaste React Live Course](https://learn.namastedev.com/) conducted by Akshay Saini

## Theory Assignment: `Chapter - 07 Finding the path` (15/01/2023)

### 1. What are various ways to add images into our App? Explain with code examples

- Using the full URL of the image for the web (CDN) or any public images.

Example : `<img src="https://reactjs.org/logo-og.png" alt="React Image" />`

- Adding the image into the project 
Drag your image into your project and import it into the desired component

```
import reactLogo from "./reactLogo.png";

export default function App() {
  
  return <img src={reactLogo} alt="react logo" />
}
```

- The correct way to structure images in your project is to add them in an `images` folder. If you are using other `assets` than just images, you might want to add all the `assets` folders. 

```
import reactLogo from "../../assets/images/reactLogo.png";

export default function App() {
  
  return <img src={reactLogo} alt="react logo" />
}
```

### 2. What would happen if we do console.log(useState())?
  If we do `console.log(useState())`, we get an array `[undefined, f]`  where first element `state` is undefined and the `setState` function is `bound dispatchSetState`.

### 3. How will useEffect behave if we don't add a dependency array ?

Syntax : useEffect(setup,[dependencies]? )

Case 1 : useEffect(setup) 
  When the dependency array is not included in the arguments of useEffect() hook, the setup function will be executed `every time` the component is rendered and re-rendered.

Case 2 : useEffect(setup,[])
 When the dependency array is empty in the arguments of useEffect() hook, the setup function will be executed `only one time` during the initial render of the component.

Case 3 : useEffect(setup, [state])
 When the dependency array contains an array of states,  the setup function will be executed  `one time` during the initial render of the component and also `whenever` there is a `change in the state`.

### 4. What is SPA?

Single Page Application (SPA) is a web application that dynamically updates the webpage with data from web server without reloading/refreshing the entire page. All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required. Example : Facebook is a Single Page Application which loads lot of components and refreshes only the required component.


### 5. What is difference between Client Side Routing and Server Side Routing?

In Server-side routing or rendering (SSR), every change in URL, http request is made to server to fetch the webpage, and replace the current webpage with the older one. 

In Client-side routing or rendering (CSR), during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to backend. All Single Page Applications uses client-side routing. 