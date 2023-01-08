### Class notes `Chapter-05 Let's get hooked` (08/01/2023)

1. File structure in React 

2 types -> based on features & type of file 

Created fodler structure => src -> components 

src -> all code 

components -> all components 


export default Component - only one component can be exported in default - default import 

export by name - then in import use named import 

But, there can be many components in the same file 

Named export : 
import {Title, Header} from './components/Header';

Default export : 
import Header, {Title} from './components/Header';

Defaukt : 

name can be different
export default Header ;
import NewHeader from './components/Header';


file name can be .js or .jsx but i prefer .js 

Best convention : 

export default ComponentName 
import Component from '/Path' 

Create config.js file -> put all hard coded and export 

Search box -> cant change input nox

One way binding 

If we need to change the value , 


Every componenet in react maintains a state 
. U can put all variables in the state. Everytime u use local variable u put state in it 


Hook -> just like normal function -> called using useState() - to create state variable 

HOOKS -> provides a direct API to teh React concepts 

Why hooks ? 

- Hooks allow you to `reuse stateful logic` without changing your component hierarchy.
- Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data)

- returns as array and first element is a variable, which is local state variable and value is passed through useState(value)

- second arg is function to modify the state variable 


get { useState() } from 'react';

const [searchText] = useState(value); 


const [searchText, setSearchText] = useState(value); 

const searchVariable = useState(value); 
const [searchText, setSearchText] = searchVariable;

setSearchText(e.target.value)
value = { searchText } 

Why do we need state ?

Two - way binding => updating state (reading and writing )

Syntactic events 


when useState() is used React re-renders (reconciliation)


const [restaurants, setRestaurants] = useState(restaurantList);

onclick()
const data = filterData(searchText, restaurants)

setRestaurants(data);

funciton filterData(searchText, restaurants) {
  restaurants.filter (res => {
    res.data.name 
  })
}