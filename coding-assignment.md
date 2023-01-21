# `Learn React With Harshi` Series 
   Documenting my learning journey of [Namaste React Live Course](https://learn.namastedev.com/) conducted by Akshay Saini

## Coding Assignment: `Chapter-08 Let's get Classy` (21/01/2023)

## Build a Food Ordering App - Chapter-08 features

### 1. Create Class Based Component 
  - About page 

### 2. Create 2 class based child components
  - Created two class-based child components (Profile & Blog) inside parent (About) Component 

### 3. Pass props from Parent to child
  - props `name` is passed from prent to child component 

### 4. Create a constructor
  - In Profile Component, a constructor is created 
  - In Blog component, a constructor is created

### 5. Create a state variable inside child
  - In Profile Component, State variable `userInfo` is created inside `constructor`
  - In Blog Component, State variables `userInfo` and  `repoList` are created inside `constructor`

### 6. Use this.setState to update it
 
  - In Profile Component - After fetching the data from API, the state of `userInfo` is updated using `this.setState()`
  - In Blog Component - After fetching the data from API, the state of `repoList` is updated using `this.setState()`

### 7. What if there are multiple state variables?

-  There are two states for Blog Components - userInfo & repoList, updating the state can happen separately in two this.setState() or together in the same this.setState()

### 8. Write a console.log for each lifecycle method</li>
- In both the components, console.log() statements are written in each lifecycle methods like `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`

### 9. Play with the console logs to find out the correct order of their execution.

Component Hierarchy 


```
About 
  - Profile
  - Blog 
```

Order of their execution is as follows :

----- During Render Phase ---------

About - constructor
About - render 
  Profile - constructor
  Profile - render 
  Blog - costructor 
  Blog - render 

---- During Commit Phase -------

  Profile - componentDidMount
  Blog - componentDidMount
  About - componentDidMount

  Profile - componentDidUpdate
  Blog - componentDidUpdate
  Blog - componentDidUpdate
  About - componentDidMount

