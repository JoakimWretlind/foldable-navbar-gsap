import { Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './globalStyle';
import { Home, About, Models, Contact } from './components/pages/index';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/models" exact element={<Models />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;


/* TODO
- screen resize
*/
