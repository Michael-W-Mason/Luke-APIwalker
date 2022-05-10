import { useHistory } from "react-router-dom";


const StarWarsForm = (props) =>{
    const history = useHistory();

    const changeHandler = (e) => {
        props.setUrlObj({...props.urlObj, [e.target.name] : e.target.value})
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        history.push(`/${props.urlObj.category}/${props.urlObj.id}`);
    }
    return(
        <form onSubmit={submitHandler}>
            <label htmlFor="category">Search For:</label>
            <select name="category" onChange={changeHandler} defaultValue="people">
                <option value="people">People</option>
                <option value="planets">Planets</option>
                <option value="species">Species</option>
            </select>
            <label htmlFor="id">ID:</label>
            <input type="number" name="id" onChange={changeHandler} defaultValue="1"/>
            <button type="submit">Search</button>
        </form>
    );
}

export default StarWarsForm;