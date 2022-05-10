import img from "../img/obi-wan.jpg"


const StarWarsError = (props) => {
    return(
        <div className="error-msg">
        <h1>These Aren't The Droids Your'e Looking For</h1>
        <img src={img} alt="Obi Wan" />
    </div>
    );
}

export default StarWarsError;