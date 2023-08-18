import { useState } from 'react';

/** Styles */
import './styles/_base.css';
import './styles/app.css';

/** Components */
import Header from './components/base/Header';
import Aside from './components/base/Aside';
import Catalog from './components/Catalog';

/** Api */
import { cards } from './api/cards';

const App = () => {
  const [cardsData, setCardsData] = useState(cards);
  const [filteredCardsData, setFilteredCardsData ] = useState(cards);

  /** Filtered Params */
  const [searchValue, setSearchValue] = useState('');
  const [sortDirection, setSortDirection ] = useState(0);
  const [showLiked, setShowLiked ] = useState(false);

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
        is_liked: isLiked,
    };

    setCardsData(cardsDataCopy);
    filter({
      cardsData: cardsDataCopy,
      searchValue,
      sortDirection,
      showLiked,
    });
  };

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
   * @param {Number} sortDirection
   */
  const sort = () => {
    const newSortDirection = sortDirection <= 0 ? sortDirection + 1 : sortDirection - 2;
    setSortDirection(newSortDirection);
    filter({ cardsData, sortDirection: newSortDirection, searchValue, showLiked });
  };

  /**
   * Set Liked Cards
   */
  const setLiked = () => {
    const newShow = !showLiked;
    setShowLiked(newShow);
    filter({ cardsData, searchValue, sortDirection, showLiked: newShow });
  };

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
        .filter((card) => card.is_liked);
    }

    setFilteredCardsData(filteredCards);
  };

  return (
    <div className="app">
      <div className="app--wrapper flex f-col">
        <Header
          sortDirection={sortDirection}
          showLiked={showLiked}
          search={search}
          sort={sort}
          setLiked={setLiked}
        />

        <div className="flex justify-space-b">
          <Aside />
          <Catalog cards={filteredCardsData} likeCard={likeCard}/>
        </div>
      </div>
    </div>
  );
}

export default App;
