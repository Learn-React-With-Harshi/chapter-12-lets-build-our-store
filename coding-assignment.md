# `Learn React With Harshi` Series 
   Documenting my learning journey of [Namaste React Live Course](https://learn.namastedev.com/) conducted by Akshay Saini

## Coding Assignment: `Chapter-11 Data is the new oil` (29/01/2023)

## Build a Food Ordering App - Chapter-11 features


### Props Drilling 

`Prop drilling` is a technique where data is passed from one component through multiple components until it gets to the component where the data is needed.

I have already implemented `props drilling` in our app InstaFood without knowing its actually name. So, I wanted to pass user info like name, email and isAuthenticated values that I get in landing page (`AppLayout`) component to `NavComponent` in `Header` where based on isAuthenticated value, display Login or Logout button.

Check App.js & Header.js to see how the props is passed from `AppLayout` to `NavComponent` of previous chapter to see the props drilling implementation. Because, in this chapter we will be modifying that with React Context. More about that in React context section below.

### Lifting up state

When we want to pass some props from child component to parent or its siblings, we can use `lifting up state` technique. It can be thought as if the control is handed over to the parent and let the child modify the data through the function that is passed to child as props.

<ans>Child -> Parent </ans>

Again, I have already implemented this in InstaFood without knowing its actually name. On click of Favourites button in Body Component, only the restaurants that are marked favourite (enabled/disabled by toggling heart button on restaurant card component). For this, I wanted my marked restaurant data in Body to update the Body to show the favourite restaurant ie child's props must be passed to parent. For this, I moved the adding/removing favourites logic to Body and passed that function to child, where the child can update through that function. This is one way of `lifting up state`. 

<ans> Child -> Siblings</ans>

I am implementing `sharing data between Siblings` feature in this chapter. For eg: There are multiple `FAQs sections` in the `Help` Page and all the FAQ answers are initially hidden, once the user clicks on any question, its corresponding answer is visible. If user clicks on any another question, the previous visible answer must be hidden and new answer must be visible. 

All the `FAQ sections` are `Siblings` Components and `Help` is the `Parent` component. 

<ans>Static Version : </ans>
The data to display FAQ sections of Help page is mocked in config.js. Each section (faq) has an unique id, title (question) and description (answer). Loop through the FAQ array and display title and description of each FAQ in Section Components 

Normal Approach : Each section might have a state isVisible and setIsVisible funtion to update the state. If isVisible is true, then show description and if false show hide description. The problem with this approach is each section does not know the state of its sibling section (we need them to know each other because on opening one section others must hide). For them to know each other's state, `lifting up state` technique is used. By this technique, the state (visibleSection) is maintained by parent which contains the id of the visible section. 


<ans>Show/Hide Description:</ans>

```javascript
  const [visibleSection, setVisibleSection] = useState("");
   /* Initially description of all questions are hidden */

```

Giving the control of state `visibleSection` to the parent (Help Component) and child (Section) can modify the state only through the callback function  `setIsVisible` passed by the Parent (Help), in turn parent updates the state through `setVisibleSection`. This way the sibling components can be shown/hidden based on this state maintained by the parent. Initially description of all Section component is hidden. For this, " " is set as visibleSection. 


```javascript
<Section key={question.id} id={question.id} title={question.title} description={question.description}
   isVisible={visibleSection === question.id }
   setIsVisible={(display) => {
   if(display) {
      setVisibleSection(question.id);
   } else {
      setVisibleSection(" ");
   }}
} />
```

Since visibleSection is empty, visibleSection === question.id will be false and all section components `isVisible` will be 'false` and in Section component down arrow will be displayed for all components(all descriptions are hidden). 

```javascript
{
   isVisible ? (
   <SlArrowUp onClick={() => setIsVisible(false)} className="cursor-pointer" />
   ) : (
   <SlArrowDown onClick={() => setIsVisible(true)} className="cursor-pointer" />
)}



{isVisible && <p className="text-bio text-base">{description}</p>}

```
<ans>User clicks for the first time</ans>
Once the user clicks on any section's down arrow button, the state that parent maintained is updated by the child through the callback funtion `setIsVisible` by setting true. Now, this value is passed as params (display) to callback function at line no: 51. Since display is true, setVisibleSection(question.id); will be executed and `visibleSection` is set with question.id. Now, {visibleSection === question.id } becomes true and `isVisible` is set `true`, because of which the arrow changes to up arrow and description is displayed. Note that all other sections state is still false and no changes happens there.

<ans>Subsequent User clicks on same FAQ</ans>
Now, if the user again clicks on up arrow, it's `setIsVisible` is updated with `false`. Now, this value is passed as params (display) to callback function at line no: 51. Since display is `false`, setVisibleSection(" "); will be executed and `visibleSection` is set with " ". Now, {visibleSection === question.id } becomes `false` and `isVisible` is set `false`, because of which the arrow changes to down arrow and description is hidden. 

<ans>User clicks on different FAQ</ans>
If the user clicks on another FAQ, that FAQ's `setIsVisible` is updated to true, because of which the arrow changes to up arrow and description is displayed in the similar way mentioned above at line 75. If any other FAQ section's description was visible, that will hidden because the `visibleSection` state of parent now hold the newly clicked FAQ id which is different from question.id (check the condition at line no :51) and `isVisible` is set to true for current section only and all other visible descriptions are hidden because other sections `isVisible` is false.

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