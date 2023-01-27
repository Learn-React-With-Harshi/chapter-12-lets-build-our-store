# `Learn React With Harshi` Series 
   Documenting my learning journey of [Namaste React Live Course](https://learn.namastedev.com/) conducted by Akshay Saini

## Coding Assignment: `Chapter - 09 Optimizing our app` (22/01/2023)

## Build a Food Ordering App - Chapter-08 features

### 1. Create your custom hooks.

  `Custom Hooks` are utility/helper functions that can be reused. When you have some logic in a component that needs to be used by multiple components, we can extract that logic to a custom Hook. Custom Hooks start with `use` followed by the hook name. 

  ### Local Storage 
  One good example of custom hook is to access `Local Storage`. Say, we fetched some data from server through API call. We can use local storage to store some data in browser and retrieve from it whenever we need without fetching from backend everytime. Or some configurations required throughout the app can be stored in Local Storage. `Local Storage` is a web storage `object` that stores `key/value pairs` in the browser.
  
  ### Main features of localStorage are:
  - Shared between all tabs and windows from the same origin.
  - The data does not expire. It remains after the browser restart and even OS reboot.
 
  Data from any component can be stored in Local Storage. So, it is very sensible to create a Custom Hook for Local Storage. 

  ### Steps to create a custom hook from scratch: 
  1. Create a file `useLocalStorage.js` under utils folder.
  2. Create a function `useLocalStorage` inside `useLocalStorage.js` and default export it.
  3. Now, think about the functionalities that we need to implement with this hook. 

  Let's see what methods/properties Local Storage has : 
  - setItem(key, value) – store key/value pair.
  - getItem(key) – get the value by key.

  <ans>Creating & getting the value for the given key </ans>
  Let's create a `useLocalStorage` function which takes one parameter `key` which is the key of the local storage object that we need to store. For any given key, our useLocalStorage hook will maintain a `state` for its `value` so that whenever value is updated in the code, its state can also be updated. For creating state `value`, let's use `useState` hook and `setValue` function can be used to update state anytime.
  
  Let's create state `value` with initialState as [] if `key` is not present in local storage. If `key` is already present in local storage, then get that value and set that as initial state. 

  ```javascript
  const [value, setValue] = useState(() => {
    const value_string = window.localStorage.getItem(key);
    return JSON.parse(value_string) || []; // default value is [] if there is no such key 
  });
  ```

  Note : All the values are stored in local storage as `strings`. So, we have to convert it to json object before use using JSON.parse()

  ```javascript
  return [value, setValue]
  ```

  Creation is done. Return the value and function to the code. Whenever we need to use this value in code, use the `value` name with which it is created. 

  ```javascript
  For example : [favRestaurants, setFavRestaurants] =  useState("fav")

  console.log(favRestaurants); -> This will get the `value` stored in local storage for the key `fav`
  ```

  <ans>Updating the value for the given key </ans>
  Use `setValue` function (In example : setFavRestaurants()) to update the state `value` in the code. Now, this updated `value` must be put into local storage as well. Use `useEffect` hook to set the value of local storage for the given key. This must be done for every change in key or value. 

  ```javascript
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  ```

  Note : Any JSON must be convert to string before setting in local storage.



  ### Usage : 
  This custom hook can be used in many scenarios. I have used it to store Favourite Restaurants. 

  1. Create a local storage key as "fav" and store its value in favRestaurants. This must be done in Body (Parent component). Initially, there will be no such key in local storage, so a new key fav is created and [] is set as its value.

  2.When user clicks on heart button in restaurant card, that restaurant is marked as favourite and added to fav array in local storage using `setFavRestaurants`.

  3. If user clicks on one more restaurant card, then it must be adding to a `new array` along with already available value. State must be updated only through this way. Used `spread operator` to do this. 

  4. If user unmarks the favourite, then that value object is removed from the array. Used `filter` function to do this because it returns new array. 

  5. Show all the favourite restaurants, when Show favourites button in clicked and when its clicked again show all restaurants.


 
### 2. Try out lazy and suspense

Loading About & Instamart components on demand, that is when that component is called .

### 3. Make your code clean.