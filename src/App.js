import './App.css';
import Header from './components/header/Header';
import ImageCards from './components/imagesCard/ImageCards';
import SwipeButton from './components/swipeButton/SwipeButton';

function App() {
  return (
    <div className="app">
        <Header />
        <ImageCards />
        <SwipeButton />
    </div>
  );
}

export default App;
