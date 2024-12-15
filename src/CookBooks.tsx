import DishoomImage from './DishoomImage.jpg';
import TartineImage from './Tartine.jpg';
import TheHunterChefImage from './TheHunterChef.jpg';
import TheFrenchLaundryImage from './TheFrenchLaundry.jpg';

export type CookBook = {
    imgFilePath: string,
    restaurantLink: string,
    bookLink: string
}

const CookBooksList = (): CookBook[] => {
    return [
        {imgFilePath: DishoomImage, 
            restaurantLink: "https://www.dishoom.com/", 
            bookLink:"https://store.dishoom.com/products/dishoom-cookery-book"}, 
            {imgFilePath: TartineImage, 
                restaurantLink: "https://tartinebakery.com/", 
                bookLink:"https://www.amazon.com/Tartine-Revised-Revisited-Elisabeth-Prueitt/dp/1452178739"},
                {imgFilePath: TheHunterChefImage, 
            restaurantLink: "https://www.antlerkitchenbar.com/", 
            bookLink:"https://thehunterchef.com/product/the-hunter-chef-cookbook-signed-edition/"},
            {imgFilePath: TheFrenchLaundryImage, 
                restaurantLink: "https://www.thomaskeller.com/tfl", 
                bookLink:"https://www.thomaskeller.com/cookbooks/french-laundry"}];
}

export default CookBooksList;