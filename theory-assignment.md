
# `Learn React With Harshi` Series 
   Documenting my learning journey of [Namaste React Live Course](https://learn.namastedev.com/) conducted by Akshay Saini

## Theory Assignment: `Chapter - 09 Optimizing our app` (22/01/2023)

### 1. When and why do we need lazy()?

  React.lazy is used to dynamically import a component when it is first rendered, instead of importing at the beginning when the file loads. This is called Code Splitting/ On-demading loading. 

  In our example : In App.js, Instamart component and about component are lazy loaded, which means only when the user clicks on the navigation button, those components are imported and rendered. This improves the performance of the application. So, lazy is used when that component might not be used by all users, instead of loaded in the beginning, only when the user really needs it, its loaded.

### 2. What is suspense?

### 3. Why we got this error : A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?


### 4. Advantages and disadvantages of using this code splitting pattern?

Code splitting is the feature supported by bundlers which can create multiple bundles that can be loaded dynamically at the runtime. Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, which can improve the performance of your app. While you haven’t reduced the overall amount of code in your app, you’ve avoided loading code that the user may never need, and reduced the amount of code needed during the initial load.
### 5. When do we and why do we need suspense?


