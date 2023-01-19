# `Learn React With Harshi` Series 
   Documenting my learning journey of [Namaste React Live Course](https://learn.namastedev.com/) conducted by Akshay Saini

## Coding Assignment: `Chapter-07 Finding the path` (15/01/2023)

### Build a Food Ordering App - Chapter-07 features

1. Install a npm package -> React Router using command  npm i react-router-dom
2. Create appRouter and provide the path and the components to load for that path
3. Provide the router and render it in root 
4. Use <Link /> to make link on the nav items 
5. Implement nested routing (put about, contact, body inside Outlet of Applayout)
6. Implement Dynamic Routing - On click of a restaurant in the restaurant list, the corresponding restaurant menu must be displayed inside Outlet.

  - Provide a path "/restaurant/:resId" and element restaurantMenu in child  of the AppLayout 
  - Create restaurantMenu component 
  - import {UseParams} from 'react-router-dom' to read the url param 
  - Create a state and store this url param value 
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
 
 Steps for navigation between login page and landing page:
  - During initial render of the app, user is not loggedin.
  - When the user clicks on login button, user is redirected to login page using `useNavigate()` hook from react-router-dom with a state `authenticated` as false
  - On click of submit button in login page, loginUser() function is called for now if the email is equal to solaiharshitha0@gmail.com, it returns user object which contains name, email and authenticated whose value is `true` and set this object to state `user`
  - In form, a check is made to see if user.authenticated is `true`, if true the user is redirected to AppLayout component using <Navigate /> component from `react-router-dom` with a state `user` which contains the state user information.
  - In Applayout page, `useLocation()` hook from react-router-dom gets the passed state `user` and passes it to HeaderComponent and then to NavComponent. Based on this user.authenticated the button on the NavComponent is toggled as Login OR Logut and logic for redirection on click of that button is made.
