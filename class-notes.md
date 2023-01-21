### Class notes `Chapter-07 Let's get Classy` (21/01/2023)

Class-based Components 

React started with components with class-based components and there was no functional components. Functional components became popular after the introduction of Hooks. 

- less maintainable 
- little confusing
- more code 
- difficult for new developer to understand 

This is the right time to understand class-based components where you already know how React works and developed an app.

Why class-based components now ? It's asked in interviews & already lot of projects are using it. 

Recap to routing : Read about all recommended routers. 

profile component inside about page -> children of children 

for children of children path is just "profile" not "/profile" 

Create Profile component 

Wil it work ? No 

Outlet must be used in About page 

How to tell React it's a class based componen tand not a normal class

class ProfileClass extends React.Component {

}

Important : render () -> without this we can't create class based component 

---
render () method returns a jsx 

in functional components, the function () itself returns a jsx 
----
in fc => function parameters 

How to pass props from parent to child => while receiving in this use {this.props.name}

React will collect all props and attach to 'this' and props 
-----

`How to create state ?` 

in fc, useState() hook to create a state 

In CC, this.state in constructor method of class 


Why super(props) in constructor ? 

constructor -> initialized the class instance  

this.state = {
  stateName : value
}

-----

`How to use state ?`
in FC, {stateName}
IN cc, {this.state.stateName}

----

`How to create multiple states ? `
in FC, const [state1] = usestate(0);
const [state2] = useState(0)


in CC, 
this.state = {
  state1 : 0,
  state2 : 0
}

-----

`How to mutate state ?`

in FC, setStateName(newValue)

in CC, this.setState({
  stateName: newValue
})

----

`How to mutate multiple state ?`

in FC, setCount1(newValue)
 setCount2(newvalue)

in CC, this.setState({
  count1: newValue,
  count2 : newValue
})

------

Life style : constructor() is called and then render (), then componentDidMount () 


---- 
`How is API called made` 

in FC, in useEffect () 

-> render whatever we can with default state before API call 

after update, re-renders again 

in CC, componentDidMount() { }

-> first constructor will set default state, render () then, componentDidMount() for API call 


----
Prent - Child

Parent constructor -> Parent render -> Child constructor -> child render ->  child componentDidMount -> parent componentDidMount 


----

Prent - Child 1 - Child 2 

Parent constructor 
Parent render 
  -> Child1 constructor
  -> child1 render 
  -> child2 constructor
  -> child2 render 
  
  -> child1 componentDidMount 
  -> child2 componentDidMount
Parent componentDidMount 

----- 
Lifecycle phases 

Render phase & Commit phase 

render phase : contructor & render () 


commit phase : (modify dom) componentDidMount() 


-----

why async can be used in componentDidMount() but not in useEffect() 

Make API call in componentDidMount() 

if async componentDidMount -> it takes time 

this.setState()  -> re-renders component 

Lifecycle :
child constructor 
child render 
child componentDidMount 
  
API call 
setState() 

render 
componentDidUpdate
 
componentWillUnmount
