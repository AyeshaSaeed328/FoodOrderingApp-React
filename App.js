const heading = React.createElement("h1", 
    {id: "heading"}, //attributes
    "Hello World from React!")//children


 //heading is a react element (JS object)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)//takes this object and creates the h1 tag that the browser understands