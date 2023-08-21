/** Styles */
import '../../styles/aside.scss';

/** Icons */
import {
    Cog6ToothIcon,
} from '@heroicons/react/24/solid';

const Aside = () => {
    return (
        <div className="aside">
            <div className="aside--wrapper">
                <div className="aside--cube">
                    <span className="aside--cube__side flex align-center justify-center aside--cube__side-back">tech</span>
                    <span className="aside--cube__side flex align-center justify-center aside--cube__side-left">app's</span>
                    <span className="aside--cube__side flex align-center justify-center aside--cube__side-right">web</span>
                    <span className="aside--cube__side flex align-center justify-center aside--cube__side-top">mobile</span>
                    <span className="aside--cube__side flex align-center justify-center aside--cube__side-bottom">soft</span>
                    <span className="aside--cube__side flex align-center justify-center aside--cube__side-front">support</span>
                </div>

                <Cog6ToothIcon className="aside--icons__icon"/>
            </div>
        </div>
    )
};

export default Aside;