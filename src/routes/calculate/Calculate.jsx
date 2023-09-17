import { useParams } from "react-router-dom";

/** Api */
import { cards } from '../../api/cards';

/** Components */
import CustomSelect from "../../components/custom/CustomSelect";

/** Styles */
import "../../styles/calculate.scss";

const Calculate = () => {
    const { id } = useParams();

    const getActiveCard = (cardId) => {
        return cards
            .find((crd) => crd.id === cardId);
    };

    const currentCard = getActiveCard(+id);

    return (
        <div className="calculate--page">
            <h2 className="calculate--page__title">calculate your personal {currentCard?.title} service</h2>
            <div className="calculate--page__form grid">
                <div className="calculate--page__form-item">
                    <CustomSelect items={[{
                        name: 'item 1', id: 1,
                    }, {
                        name: 'item 2', id: 2,
                    }, {
                        name: 'item 3', id: 3,
                    }, {
                        name: 'item 4', id: 4,
                    }]}/>
                </div>

                <div className="calculate--page__form-item">
                    <CustomSelect items={[{
                        name: 'item 1', id: 1,
                    }, {
                        name: 'item 2', id: 2,
                    }, {
                        name: 'item 3', id: 3,
                    }, {
                        name: 'item 4', id: 4,
                    }]}/>
                </div>

                <div className="calculate--page__form-item">
                    <CustomSelect items={[{
                        name: 'item 1', id: 1,
                    }, {
                        name: 'item 2', id: 2,
                    }, {
                        name: 'item 3', id: 3,
                    }, {
                        name: 'item 4', id: 4,
                    }]}/>
                </div>
            </div>
        </div>
    )
};

export default Calculate;
