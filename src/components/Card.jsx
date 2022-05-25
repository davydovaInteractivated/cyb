import "../styles/card.css";

import { Transition } from 'react-transition-group';

const Card = (props) => {
    const duration = 200;

    const defaultStyle = {
        transition: `${duration}ms all ${props.index * duration}ms ease`,
        opacity: 0,
    }

    const transitionStyles = {
        entering: { opacity: 0 },
        entered: { opacity: 1 },
        exiting: { opacity: 1 },
        exited: { opacity: 0 },
    };

    return (
        <Transition in={true} timeout={duration}>
            {state => (
                <div
                    className="card"
                    style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}
                >
                    <div className="card--wrapper flex f-col align-start justify-space-b">
                        <h2>{props.card?.value}</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro distinctio explicabo minus ex iure aliquid non iste incidunt sunt voluptate
                            ipsam, totam reiciendis eaque maxime, laboriosam, nihil ea impedit suscipit?
                        </p>
                        {/* <p>{state}</p> */}
                        <div className="card--wrapper__buttons">
                            <div className="card--wrapper__button">
                                more
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Transition>
    );
};

export default Card;
