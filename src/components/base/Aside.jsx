import "../../styles/aside.css";

const Aside = () => {
    return (
        <div className="aside">
            <div className="aside--wrapper">
                <nav className="aside--menu aside--menu__cube">
                    <span className="aside--menu__cube_side flex align-center justify-center aside--menu__cube_side-back">tech</span>
                    <span className="aside--menu__cube_side flex align-center justify-center aside--menu__cube_side-left">app's</span>
                    <span className="aside--menu__cube_side flex align-center justify-center aside--menu__cube_side-right">web</span>
                    <span className="aside--menu__cube_side flex align-center justify-center aside--menu__cube_side-top">mobile</span>
                    <span className="aside--menu__cube_side flex align-center justify-center aside--menu__cube_side-bottom">soft</span>
                    <span className="aside--menu__cube_side flex align-center justify-center aside--menu__cube_side-front">support</span>
                </nav>
            </div>
        </div>
    )
};

export default Aside;