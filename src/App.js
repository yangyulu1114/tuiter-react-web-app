import logo from './logo.svg';
import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";

function App() {
  return (
      <div className="container">
        {/*<h1>Hello World!</h1>*/}
          <HelloWorld/>
          <Labs/>
      </div>
  );
}

export default App;
