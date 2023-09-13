import Cards from "../Cards/Cards";
import  './Header.css';

const Header = ({value,handleButtonClick}) => {
    return (
        <div>
            <Cards value={value} handleButtonClick={handleButtonClick}></Cards>
            
        </div>
    );
};

export default Header;