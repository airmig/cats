import { createContext, useState } from 'react';
import Header from './ui/Header';
import Footer from './ui/Footer';
import Content from './ui/Content';
import CatInformationContext from './util/context';

function App() {

  const [selectedCat, setSelectedCat] = useState({});

  return (
    <CatInformationContext.Provider value={{selectedCat, setSelectedCat}}>
    <Header/>
    <Content/>
    <Footer/>
    </CatInformationContext.Provider>
  )
}

export default App
