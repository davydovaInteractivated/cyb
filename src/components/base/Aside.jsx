/** Styles */
import '../../styles/aside.css';

/** Icons */
import {
    Cog6ToothIcon,
} from '@heroicons/react/24/solid';

const Aside = () => {
    return (
        <div className="aside">
            <div className="aside--wrapper">
                <div className="aside--cube">
                    <span className="aside--cube_side flex align-center justify-center aside--cube_side-back">tech</span>
                    <span className="aside--cube_side flex align-center justify-center aside--cube_side-left">app's</span>
                    <span className="aside--cube_side flex align-center justify-center aside--cube_side-right">web</span>
                    <span className="aside--cube_side flex align-center justify-center aside--cube_side-top">mobile</span>
                    <span className="aside--cube_side flex align-center justify-center aside--cube_side-bottom">soft</span>
                    <span className="aside--cube_side flex align-center justify-center aside--cube_side-front">support</span>
                </div>

                <Cog6ToothIcon className="aside--icons__icon"/>
            </div>
        </div>
    )
};

export default Aside;