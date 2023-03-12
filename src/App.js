import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



let name="<b>Harry</b>"
function App() {
  
  return (
    // Tutorial 1
    // <>
    //   <nav> 
    //     <li>Hello</li>
    //     <li>{name}</li>
    //     <li>test</li>
    //   </nav>
    //   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum inventore, accusamus temporibus reiciendis quaerat adipisci asperiores dolorem, sunt voluptatem atque rem laudantium explicabo ipsa nisi suscipit corporis voluptatum repudiandae sapiente!
    // </>

    // Tutorial 2
    <>
      
      <Navbar title="Text Utils2" aboutText="About"></Navbar>
      {/* <Navbar></Navbar> */}

      <TextForm heading="Enter the text to analyze"></TextForm>

    </>
  );
}

export default App;
