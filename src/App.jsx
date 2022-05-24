import "./styles/_base.css";
import "./styles/app.css";

import Header from "./components/base/Header";
import Aside from "./components/base/Aside";
import Catalog from "./components/Catalog";

const App = () => {
  return (
    <div className="app">
      <div className="app--wrapper flex f-col">
        <Header />

        <div className="flex justify-space-b">
          <Aside />
          <Catalog />
        </div>
      </div>
    </div>
  );
}

export default App;
