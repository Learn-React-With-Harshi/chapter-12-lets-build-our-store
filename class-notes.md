### Class notes `Chapter-10 What is seen is sold` (28/01/2023)

The look part of the app - CSS

Why frameworks  - optimized css, consistent UI and saves time.

Eg : MaterialUI, Bootstrap, Base Web UI, Ant design, chakra UI

Can we use more than one framework ? - It's all package can use any number of frameworks, not consistent way.
### Ways to write css :

1. Native CSS - all components's styles in a single file index.css
2. SCSS - Syntactical CSS - it is then converted to css 
3. Inline - style attribute - pass object - {{backgroundColor : "red"}}
4. Component Library - MaterialUI, Bootstrap, Base Web UI, Ant design, chakra UI
5. CSS Framework - Tailwind 
6. styled-components 

Pros : 
consistent UI
save time 

Cons : 
Bundle size - 
Loose control over design 
personal customizition is hard 

Tailwind CSS: 
- css on the go  (in the same file )
- reusablity 
- less bundle size (minimal css) only includes the css classes that we have used 
- Flexible UI (Customize)




------------\

Data is the new oil

UI layer & Data layer

Data layer -> states & props 

state -> local variable/ scope is only within a component

props -> values passed from one component to another component


Props Drilling :- Passing props from one component to another which inturn passes to another component 

AppLayout -> state (user) 
 pass as prop to Body
  Body -> 
  pass as prop to Body
    RestaurantCard -> 

React Developer tool -> important extension -> debugging data layer 
Component & Profiler in console dev 

Data layer:

props 
State 
Hooks 
rendered by 
source 

Data from child to parent ? 

state lifting 

Context -> for storing a data that we can used throughout application 

why not global variable -> react will not be able to track and trigger reconciliation 

Create Context in utils

useContext -> hook 

Context Provider -> displayName for debugging in React Dev Tools 