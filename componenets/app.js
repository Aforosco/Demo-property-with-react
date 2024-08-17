import { useState } from "react";
import Banner from "./banner";
import HouseList from "./houseList";
import House from "./house";

const App = () => {
    const [selectedHouse, setSelectedHouse] = useState();
    return(
        <>
        <Banner headerText = "Provinding Houses over the United Kingdom"/>
        {selectedHouse ? <House house = {selectedHouse}/> : <HouseList/>}
        </>
    )
};
export default App;