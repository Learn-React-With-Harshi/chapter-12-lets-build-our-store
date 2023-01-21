# `Learn React With Harshi 👩🏻‍💻 Series`
   Documenting my learning journey of [Namaste React Live Course](https://learn.namastedev.com/) conducted by Akshay Saini

## Class Summary `Chapter - 08 Let's get Classy` (21/01/2023)
  
  Chapter-08 was all about understanding the creating class-based component, it's different lifecycle methods, whats happening under the hood. It was an amazing session as we can easily grasp the concept since we already know how component are rendered in react using functional components. We even discussed about various possible interview questions. Find my version of detailed explanation of these concepts in [theory-assignment.md](https://github.com/Learn-React-With-Harshi/chapter-08-lets-get-classy/blob/main/theory-assignment.md). Check [coding-assignment.md](https://github.com/Learn-React-With-Harshi/chapter-08-lets-get-classy/blob/main/coding-assignment.md) for all the features that I implemented in this chapter.
 
Definitely this chapter deserves two lines :

Two lines about this chapter : 

`There are 2 types of data in a component, one is coming from parent through props and accessed using this.props and another is local state that is created in constructor() and accessed using this.state and modified using this.setState()`


`Whenever a component is called, first constructor() is called, followed by render(), if any children are present in render(), then those children's constructor & render() method is called, after which componentDidMount() of children (in order) is called before parent's componentDidMount, followed by componentDidUpdate() and componentWillUnmount of children followed by parent`


Check out [Chapter-08 Live](https://learn-react-with-harshi-chapter-08.netlify.app/) for the live demo of this chapter's coding assignment `(InstaFood Version 4.0)`. Also check out the following chapters to see how InstaFood has progressed. Happy Reacting !!!


If you are interested in other chapters of this series, please browse through the [my repositories](https://github.com/orgs/Learn-React-With-Harshi/repositories)

If you want to quickly see a short summary and live demo of all chapters, please have a look at [Table of contents](https://github.com/Learn-React-With-Harshi/table-of-contents)