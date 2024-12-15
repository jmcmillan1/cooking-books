import { CookBook } from "./CookBooks";
import RatingStars from "./RatingStars";
import './App.css'

const Tile = (props: CookBook): JSX.Element => {
    const rating = 50 + (Math.random() * 50);

    return <div  className="cell">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <img height={250} width={250} src={props.imgFilePath} alt="Image"/>
      {/* TODO: get rating from real data */}
      <div style={{display: "flex", flexDirection: "column"}}>
        <div style={{display: "flex", flexDirection: "row"}}>Avg. Rating: <RatingStars ratingPercent={`${rating}%`}/> </div>
      <a
          className="App-link"
          href={props.restaurantLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Dishoom
        </a>
        <a
          className="App-link"
          href={props.bookLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Cookbook link
        </a>
        </div>
    </div>
    </div>;
}

export default Tile;