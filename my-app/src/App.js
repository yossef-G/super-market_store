import logo from './logo.svg';
import './App.css';
import Card from './Card.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="headline" ><h1>jossy market</h1></div>
        <div className="items" >
          <Card url="https://img.rami-levy.co.il/product/147/6344/medium.jpg" content="Grapes" price="24.90₪ for kg"/>
          <Card url="https://img.rami-levy.co.il/product/183/8722/medium.jpg" content="peach" price="20.90₪ for kg"/>
          <Card url="https://img.rami-levy.co.il/product/132/33/medium.jpg" content="Green Chili Pepper" price="10.90₪ for kg"/>
          <Card url="https://img.rami-levy.co.il/product/612/13924/medium.jpg" content="Onion" price="13₪ for kg"/>
          <Card url="https://img.rami-levy.co.il/product/134/35/medium.jpg" content="Banana" price="25₪ for kg"/>
          <Card url="https://img.rami-levy.co.il/product/120/22/medium.jpg" content="Kiwi" price="22₪ for kg"/>
          <Card url="https://img.rami-levy.co.il/product/122/24/medium.jpg" content="Orenge" price="10₪ for kg"/>
          <div />
        </div>
      </header>
    </div>
  );
}

export default App;
