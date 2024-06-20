/**
 * <div id="parent">
 *  <div id="child1">
 *      <h1>Nested Divs in React1</h1>
 *      <h2>Nested Divs in React2</h2>
 *  </div>
 *  <div id="child2">
 *      <h1>Nested Divs in React1</h1>
 *      <h2>Nested Divs in React2</h2>
 *  </div>
 * </div>
 * ReactElement(Object) => HTML(Browser Understands)
 */

const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement(
            "div",
            { id: "child1" },
            [
                React.createElement("h1", {}, "Nested Divs in React1"),
                React.createElement("h2", {}, "Nested Divs in React2")
            ]
        ),
        React.createElement(
            "div",
            { id: "child2" },
            [
                React.createElement("h1", {}, "Nested Divs in React1"),
                React.createElement("h2", {}, "Nested Divs in React2")
            ]
        )
    ]
);

const reactHeading = React.createElement(
    "h1", //->element
    { 
        id: "attribute-assign",
        xyz: "abc"
    }, //->props
    "Hello from React Js!"); //-> Children
//It's a react element which is just an object
console.log(reactHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
const thirdRoot = ReactDOM.createRoot(document.getElementById("third_root"));
root.render(reactHeading);
thirdRoot.render(parent);