import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="fixed-nav-wrapper">

        </nav>
      </header>
      <div className="wrapper nav-spacer">
        <div className="main-container">
          <div className="row py-4">
            <div className="col-md-3 sidebar">
              <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action bg-light rounded-0">Dashboard</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Shortcuts</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Overview</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Events</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Profile</a>
                <a href="#" class="list-group-item list-group-item-action bg-light rounded-0">Status</a>
              </div>
            </div>
            <div className="col-md-9">
              {/* <h3>Deploying a React App to GitHub Pages</h3> */}
              <p>You can configure GitHub Pages to publish your site's source files from master, gh-pages, or a /docs folder on your master branch for Project Pages and other Pages sites that meet certain criteria.</p>

              <p><i class="fa fa-github" aria-hidden="true"></i>  <a href="https://github.com/aghodeswar/reactstrap/tree/react-gh-pages">View on GitHub</a></p>


              <p>for more details tutorial you can visit: <a href="https://github.com/gitname/react-gh-pages">https://github.com/gitname/react-gh-pages</a></p>              
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
