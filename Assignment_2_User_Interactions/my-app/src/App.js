import React from 'react';
import logo from './githublink.png';
import button from './coraline.jpg';
import divider from './divider.gif';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={button} className="App-logo" alt="logo" />
            </header>
            <a href="https://github.com/michilcutt/Platform_Computing.git" target="_blank">
                <button>
                    <img src={logo} className="GITHUB-LOGO" width="50" alt="GITHUB"></img>
                    </button>
                    </a>
        </div>/*Creating a github link button & changing react logo from before*/
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
            </div>
            
        );
        function Divider() {
            return (
                /*putting images here to make aesthetic breaks in between paragraphs*/
                <div className="Divider">
                        <img src={divider} className="Divider" width="50" alt="Cute Gif"></img>
                </div>
                /*note: width and height cannot be changed
         in css when width here has a value*/
            );
        }
        }
    }
    export default App;
