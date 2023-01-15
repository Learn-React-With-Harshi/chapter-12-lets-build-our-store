### Class notes `Chapter-07 Finding the path` (15/01/2023)

If empty [] is passed in useEffect() -> only once

no [] is passed -> after every render

if passed with [serachText] -> Then useEffact() is called during first render, then afetr every time searchText state changes 

Never create a component inside a component. You can compose a component inside a component because the component will be created after every render. 



Never use useState() inside if...else -> because it leads to inconsistency 

Never write useState() inside for loop 


React gives useState() to create a local state variable inside a functional component 




