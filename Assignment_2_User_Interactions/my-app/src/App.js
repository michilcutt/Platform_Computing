import logo from './logo.gif';
import './App.css';

function App() {
    return (
    <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://github.com/michilcutt/Platform_Computing.git"
          target="_blank"
                    rel="noopener noreferrer"
                    img src="githublink.jpg" alt="cute doggo">
        </a>
      </header>
    </div>
    );
    function First() {
        return (
            <div className="First">
                <p>
                    <header>
                        Nonstop grind? Coffee coded? Me too!
                    </header>
                    <hr />
                    Afro Code is like a DNA Sequence from Jurassic Park, always changing and editing
                    lines of code throughout the different evolutions of themselves. Transferring from a community college
                    to a university was a step that was new, intriguing but frightening. Few things of comfort came through the
                    hard journey: coffee(put emoji here), animals(put emoji here), and new surroundings. Along with
                    these new surroundings, new interests came as well.
                </p>
          /**creating a github link button*/
                <a href="https://github.com/michilcutt/Platform_Computing/tree/main" target="_blank"></a>
                <button onclick="window.location.href='https://github.com/michilcutt/Platform_Computing.git'">Github</button>
            </div>
        );
    }
}

export default App;
