
import './App.css';
import CreatingaCustomComponnetpart2 from './ReactBasics/components/CreatingaCustomComponnetpart2';
import StylingInReact from './ReactBasics/components/StylingInReact';

function App() {
  const name="anusha"
  return (
    <div className="App">
     {/* way of inject the Hello component to App component */}
     <Hello name={name}/> 
     <CreatingaCustomComponnetpart2/>
     <StylingInReact/>

    </div>
  );
}

export default App;
//creating a custom component
const  Hello=(props)=>{
  return <h2>Hello{props.name}-This is coming from custom componentppp</h2>;


}
