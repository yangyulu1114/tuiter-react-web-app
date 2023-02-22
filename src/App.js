import logo from './logo.svg';
import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";

function App() {
  return (
      <div className="container">
        {/*<h1>Hello World!</h1>*/}
          <HelloWorld/>
          <Labs/>
          <Tuiter/>
      </div>
  );
}

export default App;
