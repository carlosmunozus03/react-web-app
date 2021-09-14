import logo from './logo.svg';
import './App.css';
import MyComponent from "./components/MyComponent";

function App() {

    let name = 'Carlos';
    let greeting = <h2>Hello, my name is {name}</h2>

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>

                {/*play with this*/}
                <p>This is my first React App</p>
                <h6> {'Hello World from React'}</h6>
                {greeting}

                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <section className='components'>
                <MyComponent/>
            </section>

        </div>
    );
}

export default App;
