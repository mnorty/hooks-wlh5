// What is lazy?
// lazy is a new module in React that enables support for code splitting
// Most React apps will have their files bundled using tools like Webpack and/or Rollup
// Bundling is the proccess of following imported files and merging them into a single file
// If we are using create react app, gatsby, or nextjs they will have a webpacl setup out of the box to bundle our application
// When our applications grow this can really slow it down

// Code splitting allows us to break bundles down into smallewr bundlers and only ship what we need to the browser at the time the user needs it
// This leads into faster load times
// this also trims down the amount of content we request

// for example
// we may have a forgot password page  but if a user never forgets their password, they will never actually need this so we use code splitting to only load it when the user actually visits the page

// Lazy relies on dynamic imnports over static imports


// What are hooks?
// The next interation in the React Ecosystem
// THey are designed to use state, and lifecycle hooks inside of a functional component
// Why would we want to do this?
// It's faster
// We can avoid the bugs that come with class components
// We dont have to worry about constructor functions, prototypal inheritance, and the context of the component

// Hooks were desinged to:
// Simplify the React Ecosystem
// Enable building more scalable components
// Enable building more composable components
// Code and Component use is more simple

//  Few caveats:
// Hooks can only be used in functional components
// Hooks should only be called aty the top level of the component, meaning not in loops or conditionals
// If we need to loop we can do it inside the hook
// Hooks add complexity if you don't have a solid understanding of what happens behind the scenes
// Classes are still and always will be a valid way to write React

// There are may different hooks

// useState
// returns a stateful value and a funciton to update it
// You can have many useState to create multiple properties on state

// useEffect
// this where we will do our lifecycle logic
// its called an effect after the term side-effect
// this where we can make our http request when the component first mounts / updates
// this will take place over our componentDidMount, componentDidUpdate, etc
// It's firec after every render of the component, but you can set watcher values inside of an array
// for example, a value thats on state