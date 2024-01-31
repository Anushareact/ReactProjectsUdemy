
import './App.css';

function App() {
  return (
    <div className="App">
     {/* way of inject the Hello component to App component */}
     <Hello/> 
    anusha
    </div>
  );
}

export default App;
//creating a custom component
const  Hello=()=>{
  return <h2>Hello-This is coming from custom component</h2>


}
