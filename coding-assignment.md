# `Learn React With Harshi` Series 
   Documenting my learning journey of [Namaste React Live Course](https://learn.namastedev.com/) conducted by Akshay Saini

## Coding Assignment: `Chapter-12 Let's build our store` (04/02/2023)

## Build a Food Ordering App - Chapter-12 features

### 1. Build the Cart Workflow for our App

<ans>Features built during class</ans>
  - When the user clicks on ADD button of menu item in RestaurantMenu Component
  - that item must be added to Cart 
  - Count of items added must be displayed in Header near Cart Nav button
  - The added items must be displayed in the Cart Section of Cart Page.
  - Button to clear cart must be provided, which on click clears the cart 
  - All these must be done with the help of Redux Store.

<ans>Additional Features that I implemented</ans>

  - Change the Add button to - and + and item quantity inbetween 
  - Implement Remove Item  from cart in Restaurant Menu Page & Cart Page 
  - Implement Add Item to cart in Restaurant Menu Page & Cart Page
  - Update item quantity in in Restaurant Menu Page & total item quantity (all items quantities) Cart Page


### WORK IN PROGRESS 

<ans>Checkout Workflow :</ans> 

  - Create Cart Page with Checkout Workflow, Auth -> Cart -> Delivery -> Payment -> Order Confirmation Summary
  - In Cart page, check if the user is logged in, by checking AuthContext (Context API) . If loggedin, show options to select delivery adress and payment.
  - If not loggedin, request the user to login/signup and after log in, show options to select delivery adress and payment.
  - On click of proceed to payment button, take to dummy payment page 
  - dummy successful payment 
  - show order summary 

  - In RestaurantMenu Page, show the add cart items and allow the user to remove/add items in that cart
  - On click of Checkout button, navigate to Cart page.



<ans>Authentication</ans>

### SignIn With Google - Authentication using Firebase 

Reference : https://www.youtube.com/watch?v=cZAnibwI9u8&list=PLaPfwr_iF3CarlXMRMsgF6w4htzDg5tvh&index=2

1. Install SignIn with Google button -  npm install react-google-button 
2. Create Firebase project for our app - Instafood 
3. Click </ans> button - register app
4. Install firebase : npm install firebase
5. Initialize firebase by copying the given config into firebase.js
6. Open Authentication card in Firbase -> Sign-in method -> Choose Google as provider -> give your gmail id and enable 
7. Import getAuth into firebase.js
```
import { getAuth } from "firebase/auth";

```
8. export auth from firbase.js
```
export const auth = getAuth(app);
```

9. Create AuthContext.js 

10. Handle the google signin in SignIn.js 

11. Provider the UserAuthProvider in App.js 


### SignIn/SignUp using email and password - Firebase 

Reference : https://www.youtube.com/watch?v=x62aBvnRCKw&list=PLaPfwr_iF3CarlXMRMsgF6w4htzDg5tvh&index=2

1. In Firebase console, Authentication -> SignIn method -> Add new provider -> Enable Email.passord

2. Handle the email/password signin in SignIn.js 

3. Handle email/paasword signup in SignUp.js

4. Provide them in AuthContext Provider


### Authentication feature : 

1. On click of Login button in header, show signin page 
2. User can sign in using email/password or Google 
3. If the user does not have an account, user can signup using email/password
4. After signup, take to home page
5. After signin, take to home page.

### API Key - .Env file 

npm install --save-dev dotenv
