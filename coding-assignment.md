# `Learn React With Harshi` Series 
   Documenting my learning journey of [Namaste React Live Course](https://learn.namastedev.com/) conducted by Akshay Saini

## Coding Assignment: `Chapter-11 Data is the new oil` (29/01/2023)

## Build a Food Ordering App - Chapter-11 features


### Props Drilling 

`Props Drilling` is the technique by which props are passed from one component to another, which in turn passes to another component and so on to reach the component which needs this props.

I have already implemented `props drilling` in our app InstaFood without knowing its actually name. So, I wanted to pass user info like name, email and isAuthenticated values that I get in landing page (`AppLayout`) component to `NavComponent` in `Header` where based on isAuthenticated value, display Login or Logout button.

Check App.js & Header.js to see how the props is passed from `AppLayout` to `NavComponent` of previous chapter to see the props drilling implementation. Because, in this chapter we will be modifying that with React Context. More about that in React context section below.

### Lifting up state

When we want to pass some props from child component to parent or its siblings, we can use `lifting up state` technique. It can be thought as if the control is handed over to the parent and let the child modify the data through the function that is passed to child as props.

<ans>Child -> Parent </ans>

Again, I have already implemented this in InstaFood without knowing its actually name. On click of Favourites button in Body Component, only the restaurants that are marked favourite (enabled/disabled by toggling heart button on restaurant card component). For this, I wanted my marked restaurant data in Body to update the Body to show the favourite restaurant ie child's props must be passed to parent. For this, I moved the adding/removing favourites logic to Body and passed that function to child, where the child can update through that function. This is one way of `lifting up state`. 

<ans> Child -> Siblings</ans>

I am implementing sharing data between Siblings feature in this chapter. For eg: There are multiple FAQs sections in the Help Page and all the FAQ answers are initially hidden, once the user clicks on any question, its corresponding answer is visible. If user clicks on any another question, the previous visible answer must be hidden and new answer must be visible. 

All the `FAQ sections` are `Siblings` Components and `Help` is the `Parent` component. 

<ans>Static Version : </ans>
The data to display FAQ sections of Help page is mocked in config.js.Each section (faq) has an unique id, title (question) and description (answer). Loop through the FAQ array and display title and description of each FAQ in Section Components 

<ans>Show/Hide Description:</ans>

```javascript
const [visibleSection, setIsvisibleSection] = useState(
   {
      id : 1,
      status : false
   }); /* Initial Dummy value */
```

Giving the control of state `visibleSection` to the parent (Help Component) and child (Section) can modify the state only through the callback function  `setIsVisible` passed by the Parent (Help), in turn parent updates the state through `setVisibleSection`. This way the sibling components can be shown/hidden based on this state maintained by the parent. Initially description of all Section component is hidden. For this, a initial dummy value (id and status as false are set). 


```javascript
<Section key={question.id} id={question.id} title={question.title}
  description ={question.description}
  isVisible={visibleSection.status && visibleSection.id === question.id }
  setIsVisible={(obj) => setIsvisibleSection(obj)}
```

Since status is false, all section components `isVisible` will be 'false` and in Section component down arrow will be displayed. 

```javascript
{
   isVisible ? (
   <SlArrowUp onClick={() => setIsVisible({id : id, status : false})} className="cursor-pointer" />
   ) : (
   <SlArrowDown onClick={() => setIsVisible({id : id, status : true})} className="cursor-pointer" />
)}



{isVisible && <p className="text-bio text-base">{description}</p>}

```
<ans>User clicks for the first time</ans>
Once the user clicks on any section's down arrow button, the state that parent maintained is updated by the child through the callback funtion `setIsVisible` by setting status to true and id with the current section id.

Now, in Help component `isVisible` is set to true, because of which the arrow changes to up arrow and description is displayed. Note that all other sections state is still false and no changes happens there.

<ans>Subsequent User clicks on same FAQ</ans>
Now, if the user again clicks on up arrow, it's `setIsVisible` is updated with status `false` and `isVisible` in the parent will be false (check the condition at line no :50). Because of which the arrow changes to down arrow and description is hidden.  

<ans>User clicks on different FAQ</ans>
If the user clicks on another FAQ, that FAQ's `setIsVisible` is updated to true, because of which the arrow changes to up arrow and description is displayed. If any other FAQ description was visible, it's hidden because the `isVisible` state of parent now hold the newly clicked FAQ id which is different from question.id (check the condition at line no :50) and `isVisible` is set to true and all other visible descriptions are hidden.

### React Context
In the props drilling examples, we tried to pass userInfo through multiple components to reach NavComponent. Props drilling could be used when data need to be passed to a few (2-3 components) before reaching its destination component. But, what if there are lot of components in the hierarchy which needs to be crossed, it becomes tedious and inefficient. The solution to this is to store the data in Context which could be then accessed throughout the application. 

Let's try to use Context Provider to share userInfo data between Login, NavComponent & Footer . 

- Create a context `UserContext` with keys that we need in our user object and dummy values in `UserContext.js` under utils folder. 
- Import the created `UserContext` into the App.js (where we want to use)
- Create a state to maintain this user object 
- Enclose `<UserContext.Provider> </UserContext.Provider>` component around the components where the  user object must be accessible. 
- Now, pass this state as value props to the UserContext provider and use this components that needs it.

<ans>In Header</ans>
- Let's say we must to use the user object in NavComponent in Header.js. Import `UserContext` that we created into Header.js
- Create a variable user and set the UserContext using `useContext(UserContext)`
- Now use user.name in Header 

<ans>In Footer</ans>
- Import `UserContext` that we created into Footer.js
- Create a variable user and set the UserContext using `useContext(UserContext)`
- Now use user.name in Header 

<ans>Updating the Context in Login</ans>
- Import `UserContext` that we created into Footer.js
- Create a variable and set the UserContext using `useContext(UserContext)`
```javscript 
const {user, setUser} = useContext(UserContext); 
```
- After succesful login of user, set the user response object (which contains the UserContext to be set) using `setUser` 
- Check if user.isAuthenticated is true and navigate to the landing page (App.js)

<ans>Updating the Context in Header</ans>
- Once the user clicks on the Login/Logout button, set the user object to isAuthenticated to false before navigating to the login page 


### Nested Contexts