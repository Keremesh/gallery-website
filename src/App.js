import './App.css';
import Gallery from './Gallery';

function App() {
  const imagePaths = [
    '/images/zarahome1.jpg',
    '/images/zarahome2.jpg',
    '/images/zarahome3.jpg',  
    '/images/zarahome4.jpg',
  ];

  return (
    <div className="App">    
    <h1>My Art Gallery</h1>
      <Gallery images={imagePaths}/>
    </div>
  );
}

export default App;
