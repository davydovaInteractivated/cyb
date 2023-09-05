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

/** Api */
import { cards } from './api/cards';

const App = () => {
  console.log('App render');

  const [cardsData, setCardsData] = useState([]);
  const [filteredCardsData, setFilteredCardsData] = useState([]);
  const [showLiked, setShowLiked] = useState(false);
  const [likedCount, setLikedCount] = useState(0);
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
   * Like Card
   * @param {Boolean} isLiked
   * @param {Number} cardId
   */
  const likeCard = (isLiked, cardId) => {
    const cardsDataCopy = [...cardsData];
    const currentCardDataIndex = cardsDataCopy
      .findIndex((card) => card.id === cardId);
  
    if (currentCardDataIndex === -1) return;
  
    cardsDataCopy[currentCardDataIndex] = {
      ...cardsDataCopy[currentCardDataIndex],
      is_marked: isLiked,
    };
  
    setCardsData(cardsDataCopy);
    setLikedCount(isLiked ? likedCount + 1: likedCount - 1);
    filter({
      cardsData: cardsDataCopy,
      searchValue,
      sortDirection,
      showLiked,
    });
  };

   /**
   * Set Liked Cards
   */
  const setLikedShow = () => {
    const newShow = !showLiked;
    setShowLiked(newShow);
    filter({ cardsData, searchValue, sortDirection, showLiked: newShow });
  }

  /**
   * Search Cards
   * @param {Event} event
   */
  const search = (event) => {
    const sValue = event.target.value.toLocaleLowerCase();
    setSearchValue(sValue);
    filter({ cardsData, searchValue: sValue, sortDirection, showLiked });
  };
  
  /**
   * Sort Cards
   */
  const sort = () => {
    const newSortDirection = sortDirection <= 0 ? sortDirection + 1 : sortDirection - 2;

    setSortDirection(newSortDirection);
    filter({ cardsData, sortDirection: newSortDirection, searchValue, showLiked });
  }
  
  /**
   * Filter Cards
   * @param {*} param0
   */
  const filter = ({
    cardsData,
    searchValue,
    sortDirection,
    showLiked,
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

    if (showLiked) {
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
          showLiked={showLiked}
          likedCount={likedCount}
          searchValue={searchValue}
          search={search}
          sort={sort}
          setLikedShow={setLikedShow}
        />
      }>
        <Route index element={
          <Catalog
            cards={filteredCardsData}
            showLiked={showLiked}
            searchValue={searchValue}
            likeCard={likeCard}
          />
        } />
        <Route path='auth' element={<Auth />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='faq' element={<Faq />} />
        <Route path=':id' element={<Card />} />

        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  )
}

export default App;
