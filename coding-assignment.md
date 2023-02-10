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

In Javascript, I would like something like 
```javascript
createOrder(cart)
.then((orderId) =>  orderId)
.then((orderId)=> proceedToPayment(orderId))
.then((paymentInfo) => showOrderSummary(paymentInfo))
.then((summary) => updateWallet(summary.payment))
.catch((errMsg) => {console.log(errMsg.message)});
```

  - Create Cart Page with Checkout Workflow, Auth -> Cart -> Delivery -> Payment -> Order Confirmation
  - In Cart page, check if the user is logged in by checking user info stored in Redux. If loggedin, link that selected items to that user
  - If not loggedin, request the user to login and after log in, link the selected items to that user
  - On click on proceed to pay, take to dummy payment page 
  - dummy successful payment 
  - show order summary 



