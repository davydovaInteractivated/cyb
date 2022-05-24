import "../styles/card.css";

const Card = (props) => {
    return (
        <div className="card card--wrapper flex f-col align-start justify-space-b">
            <h2>{ props.card?.value }</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro distinctio explicabo minus ex iure aliquid non iste incidunt sunt voluptate 
                ipsam, totam reiciendis eaque maxime, laboriosam, nihil ea impedit suscipit?
            </p>
            <div className="card--wrapper__buttons">
                <div className="card--wrapper__button">
                    more
                </div>
            </div>
        </div>
    );
};

export default Card;
