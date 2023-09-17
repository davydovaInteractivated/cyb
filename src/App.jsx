/** Router */
import { Routes, Route } from 'react-router-dom';

import { useState, useEffect } from 'react';

/** Components */
import Home from './components/Home';
import Catalog from './components/Catalog';

/** Routes */
import Card from './routes/card/CardPage';
import Auth from './routes/auth/Auth';
import Contacts from './routes/contacts/Contacts';
import Faq from './routes/faq/Faq';
import NoMatch from './routes/NoMatch';
import Calculate from './routes/calculate/Calculate';

/** Api */
import { cards } from './api/cards';

const App = () => {
  console.log('App render');

  const [cardsData, setCardsData] = useState([]);
  const [filteredCardsData, setFilteredCardsData] = useState([]);
  const [showMarked, setShowMarked] = useState(false);
  const [markedCount, setMarkedCount] = useState(0);
  const [sortDirection, setSortDirection] = useState(0);
  const [searchValue, setSearchValue] = useState('');

  /** ~ DidMount Hook */
  useEffect(() => {
    setTimeout(() =>{
      setCardsData(cards);
      setFilteredCardsData(cards);
    }, 320);
  }, []);

  /**
   * Mark Card
   * @param {Boolean} isMarked
   * @param {Number} cardId
   */
  const markCard = (isMarked, cardId) => {
    const cardsDataCopy = [...cardsData];
    const currentCardDataIndex = cardsDataCopy
      .findIndex((card) => card.id === cardId);
  
    if (currentCardDataIndex === -1) return;
  
    cardsDataCopy[currentCardDataIndex] = {
      ...cardsDataCopy[currentCardDataIndex],
      is_marked: isMarked,
    };
  
    setCardsData(cardsDataCopy);
    setMarkedCount(isMarked ? markedCount + 1: markedCount - 1);
    filter({
      cardsData: cardsDataCopy,
      searchValue,
      sortDirection,
      showMarked,
    });
  };

   /**
   * Set Marked Cards
   */
  const setMarkedShow = () => {
    const newShow = !showMarked;
    setShowMarked(newShow);
    filter({ cardsData, searchValue, sortDirection, showMarked: newShow });
  }

  /**
   * Search Cards
   * @param {Event} event
   */
  const search = (event) => {
    const sValue = event.target.value.toLocaleLowerCase();
    setSearchValue(sValue);
    filter({ cardsData, searchValue: sValue, sortDirection, showMarked });
  };
  
  /**
   * Sort Cards
   */
  const sort = () => {
    const newSortDirection = sortDirection <= 0 ? sortDirection + 1 : sortDirection - 2;

    setSortDirection(newSortDirection);
    filter({ cardsData, sortDirection: newSortDirection, searchValue, showMarked });
  }
  
  /**
   * Filter Cards
   * @param {*} param0
   */
  const filter = ({
    cardsData,
    searchValue,
    sortDirection,
    showMarked,
  }) => {
    let filteredCards = [...(cardsData || [])];
  
    /** Search Cards */
    if (searchValue) {
      filteredCards = filteredCards
        .filter((card) => card.title.toLocaleLowerCase().includes(searchValue));
    }
  
    /** Sort Cards */
    if (sortDirection) {
      filteredCards = sortDirection === 1
        ? [...(filteredCards || [])]
          .sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
        : [...(filteredCards || [])]
          .sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()));
    }

    if (showMarked) {
      filteredCards = filteredCards
        .filter((card) => card.is_marked);
    }
  
    setFilteredCardsData(filteredCards);
  };

  return (
    <Routes>
      <Route path='/' element={
        <Home
          sortDirection={sortDirection}
          showMarked={showMarked}
          markedCount={markedCount}
          searchValue={searchValue}
          search={search}
          sort={sort}
          setMarkedShow={setMarkedShow}
        />
      }>
        <Route index element={
          <Catalog
            cards={filteredCardsData}
            showMarked={showMarked}
            searchValue={searchValue}
            markCard={markCard}
          />
        } />
        <Route path='auth' element={<Auth />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='faq' element={<Faq />} />
        <Route path=':id' element={<Card />} />
        <Route path=':id/calculate' element={<Calculate />} />

        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  )
}

export default App;
