import { PureComponent } from 'react';

/** Styles */
import './styles/_base.css';
import './styles/app.css';

/** Components */
import Header from './components/base/Header';
import Aside from './components/base/Aside';
import Catalog from './components/Catalog';

/** Api */
import { cards } from './api/cards';

class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      cardsData: [],
      filteredCardsData: [],
      searchValue: '',
      sortDirection: 0,
      showLiked: false,
      likedCount: 0,
    }
  }

  /**
   * Like Card
   * @param {Boolean} isLiked
   * @param {Number} cardId
   */
  likeCard = (isLiked, cardId) => {
    const {
      cardsData,
      searchValue,
      sortDirection,
      likedCount,
      showLiked,
    } = this.state;

    const cardsDataCopy = [...cardsData];
    const currentCardDataIndex = cardsDataCopy
      .findIndex((card) => card.id === cardId);

    if (currentCardDataIndex === -1) return;

    cardsDataCopy[currentCardDataIndex] = {
        ...cardsDataCopy[currentCardDataIndex],
        is_liked: isLiked,
    };

    this.setState({ cardsData: cardsDataCopy });
    this.setState({ likedCount: isLiked ? likedCount + 1: likedCount - 1 });
    this.filter({
      cardsData: cardsDataCopy,
      searchValue,
      sortDirection,
      showLiked,
    });
  }

  /**
   * Search Cards
   * @param {Event} event
   */
  search = (event) => {
    const {
      cardsData,
      sortDirection,
      showLiked,
    } = this.state;

    const sValue = event.target.value.toLocaleLowerCase();
    this.setState({ searchValue: sValue });
    this.filter({ cardsData, searchValue: sValue, sortDirection, showLiked });
  }

  /**
   * Sort Cards
   */
  sort = () => {
    const {
      cardsData,
      searchValue,
      sortDirection,
      showLiked,
    } = this.state;

    const newSortDirection = sortDirection <= 0 ? sortDirection + 1 : sortDirection - 2;

    this.setState({ sortDirection: newSortDirection });
    this.filter({ cardsData, sortDirection: newSortDirection, searchValue, showLiked });
  }

  /**
   * Set Liked Cards
   */
  setLiked = () => {
    const {
      cardsData,
      searchValue,
      sortDirection,
      showLiked,
    } = this.state;
    const newShow = !showLiked;
    this.setState({ showLiked: newShow });
    this.filter({ cardsData, searchValue, sortDirection, showLiked: newShow });
  }

  /**
   * Filter Cards
   * @param {*} param0
   */
  filter = ({
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

    this.setState({ filteredCardsData: filteredCards });
  }

  componentDidMount() {
    setTimeout(() => this.setState({
      cardsData: cards,
      filteredCardsData: cards,
    }), 320);
  }

  render() {
    const {
      filteredCardsData,
      sortDirection,
      showLiked,
      likedCount,
    } = this.state;

    return (
      <div className="app">
        <div className="app--wrapper flex f-col">
          <Header
            sortDirection={sortDirection}
            showLiked={showLiked}
            likedCount={likedCount}
            search={this.search}
            sort={this.sort}
            setLiked={this.setLiked}
          />

          <div className="flex justify-space-b">
            <Aside />
            <Catalog
              cards={filteredCardsData}
              likeCard={this.likeCard}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
