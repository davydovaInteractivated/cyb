/** Styles */
import '../../styles/aside.scss';

/** Components */
import Cube from './Cube';
import Settings from './Settings';
import StorybookLink from './links/StorybookLink';

const Aside = () => {
    return (
        <div className="aside">
            <div className="aside--wrapper grid gap-2">
                <Cube />
                <Settings inverted />
                <StorybookLink inverted />
            </div>
        </div>
    )
};

export default Aside;
