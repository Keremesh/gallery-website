import './App.css';
import Gallery from './Gallery';

function App() {
  const imagePaths = [
    '/images/zarahome1.jpg',
    '/images/zarahome6.jpg',
    '/images/zarahome2.jpg',
    '/images/zarahome3.jpg',  
    '/images/zarahome7.jpg',
    '/images/zarahome4.jpg',
    '/images/zarahome5.jpg',
    '/images/zaralamp1.jpg',
    '/images/zarachair1.jpg',
    '/images/zarachair2.jpg',
  ];

  return (
    <div className="App">    
     <h1 className="m-4 p-4 text-4xl font-sans text-stone-800 md:text-5xl lg:text-6xl">My Art Gallery</h1>
      <Gallery images={imagePaths}/>
      <p className="m-4 p-4 text-xl font-sans text-stone-700">images from Zara Home website</p>
    </div>
  );
}

export default App;
