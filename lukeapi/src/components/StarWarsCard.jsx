import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import axios from 'axios';

const StarWarsCard = (props) => {

    const [starWarsObj, setStarWarsObj] = useState({});
    const [planet, setplanet] = useState({
        url : ""
    });
    const { category } = useParams();
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then((r) => {
                r = r.data;
                if(category === "people"){
                    // console.log(r);
                    setStarWarsObj({
                        "name" : r.name,
                        "Mass" : `${r.mass} kg`,
                        "Height" : `${r.height} cm`,
                        "Hair Color" : r.hair_color,
                        "Skin Color" : r.skin_color,
                    });
                    setplanet({
                        ...planet,
                        url : r.homeworld
                    });
                }
                else if(category === "planets"){
                    // console.log(r);
                    setStarWarsObj({
                        "name" : r.name,
                        "Climate" : r.climate,
                        "Terrain" : r.terrain,
                        "Surface Water" : `${r.surface_water} %`,
                        "Population" : r.population
                    })
                }
                else if(category === "species"){
                    setStarWarsObj({
                        "name" : r.name,
                        "Average Height" : r.average_height,
                        "Hair Colors" : r.hair_colors,
                        "Language" : r.language,
                        "Classification" : r.classification
                    })
                }
            })
            .catch((error) => {
                console.log(error)
                history.push("/error");
            });
    }, [category, id]);

    useEffect(() => {
        if(category === "people"){
            // console.log("Here", planet);
            axios.get(planet.url)
                .then((r) => {
                    // console.log(r);
                    let temp = planet.url.split("/");
                    setStarWarsObj({
                        ...starWarsObj,
                        "Home World" : <Link to={`/planets/${temp[temp.length-2]}`}>{r.data.name}</Link>
                    })
                })
                .catch((error) => {
                    console.log(error);
                    setStarWarsObj({
                        ...starWarsObj,
                        "Home World" : "Error: 404 Home World Not Found"
                    })
                });
        }
    }, [planet])

    return (
        <div>
            <h1>{starWarsObj.name}</h1>
            {
                Object.keys(starWarsObj).filter(attr => attr !== "name").map((key, i) => {
                    return(
                        <h2 key={i}>{key} : {starWarsObj[key]}</h2>
                    );
                })
            }
        </div>

    );
}


export default StarWarsCard;