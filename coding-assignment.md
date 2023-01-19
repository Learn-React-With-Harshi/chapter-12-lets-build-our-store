# `Learn React With Harshi` Series 
   Documenting my learning journey of [Namaste React Live Course](https://learn.namastedev.com/) conducted by Akshay Saini

## Coding Assignment: `Chapter-07 Finding the path` (15/01/2023)

### Build a Food Ordering App - Chapter-07 features

1. Install a npm package -> React Router using command  npm i react-router-dom
2. Create appRouter and provide the path ans teh components to load 
3. Provide the router and render it in root 
4. Use <Link /> to make link on the nav items 
5. Implement nested routing (put about, contact, body inside Outlet of Applayout)
6. Implement Dynamic Routing - On click of a restaurant in the restaurant list, the corresponding restaurant menu must be displayed inside Outlet.

  - Provide a path "/restaurant/:resId" and element restaurantMenu in child  of the AppLayout 
  - Create restaurantMenu component 
  - import {UseParams} from 'react-router-dom' to read the url param 
  - create a state and store this url param value 
  - Create Restaurant Menu Page 

```
  Restaurant Summary 
   -> res-image 
   -> name 
   -> cuisines
   -> avgRating
   -> delivery time 
   -> cost for two 

  restaurant-menu-content
   -> title
   -> item-card 
      -> item-name 
      -> item-img
      -> cost 
      -> desc
```    


7. Make use of useRouteError hook to load error page when the url doesnot match with the path that we have configured in appRouter 
8. Build a dummy login page (always true) using Formik npm package
 