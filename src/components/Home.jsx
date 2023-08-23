import { PureComponent } from 'react';
import { Outlet } from 'react-router-dom';

/** Styles */
import '../styles/_base.scss';
import '../styles/_custom.scss';
import '../styles/app.scss';

/** Components */
import Header from './base/Header';
import Aside from './base/Aside';

class Home extends PureComponent {
  constructor() {
    super();

    this.state = {
      cardsData: [],
      filteredCardsData: [],
      searchValue: '',
      sortDirection: 0,
      showLiked: false,
      likedCount: 0,
      isShowSettings: false,
      activeTheme: 'transfile',
      activeLang: 'en',
    }
  }

  /**
   * Show Settings popup
   */
  showSettings = () => {
    const {
      isShowSettings,
    } = this.state;

    this.setState({ isShowSettings: !isShowSettings });
  }

  /**
   * Select Main app. Theme
   * @param {*} param0 
   */
  selectTheme = ({ colors, name }) => {
    const [ body ] = document.getElementsByTagName('body');
    if (!body) return;

    const {
      light, dark, font,
    } = colors;

    body.style.setProperty('--color-light', light);
    body.style.setProperty('--color-dark', dark);
    body.style.setProperty('--main-font', font);

    this.setState({ activeTheme: name });
  }

  /**
   * Select Main app. Language
   * @param {*} param0 
   */
  selectLang = ({ name }) => {
    this.setState({ activeLang: name });
  }

  render() {
    const {
      isShowSettings,
      activeTheme,
      activeLang,
    } = this.state;

    const {
        sortDirection,
        showLiked,
        likedCount,
        search,
        sort,
        setLikedShow,
    } = this.props;

    return (
      <div className="app">
        <div className="app--wrapper flex f-col">
          <Header
            sortDirection={sortDirection}
            showLiked={showLiked}
            likedCount={likedCount}
            search={search}
            sort={sort}
            setLikedShow={setLikedShow}
          />

          <div className="flex justify-space-b">
            <Aside
              isShowSettings ={isShowSettings}
              activeTheme={activeTheme}
              activeLang={activeLang}
              showSettings={this.showSettings}
              selectTheme={this.selectTheme}
              selectLang={this.selectLang}
            />
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
