// // Hello World in JS
// const heading = document.createElement("h1");
// heading.innerHTML = 'Hello World from JavaScript!!'
// const root = document.getElementById("root");
// root.appendChild(heading);

// // Hello World in raect 
// const heading = React.createElement("h1",{id:"heading"},"Hello World from React!")
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//craete mulltiple tag in React with React.createElement
{/* <div id="parent">
    <h1>
        <span>Hello React!</span>
    </h1>
</div> */}

// const parent = React.createElement("div",{id:"parent"},
// React.createElement("h1",{},
// React.createElement("span",{},"Hello React!")))
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// craete Sibling Element in Recat 
{/* <div id="parent">
<div id="child-1">
    <h1>Child-1!</h1>
</div>
<div id="child-2">
    <h1>Child-2!</h1>
</div>
</div> */}

const parent = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:'child-1'},
React.createElement("h1",{},"Child-1!")
),React.createElement("div",{id:'child-2'},
React.createElement("h1",{},"Child-2!")
)]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

