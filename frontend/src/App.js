import './App.css';

function App() {
  return (
    <div className="App">
      Service URL is {`${process.env.REACT_APP_SERVICE_BASEURL}`}
    </div>
  );
}

export default App;
