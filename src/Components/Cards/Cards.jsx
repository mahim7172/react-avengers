import Card from "../Card/Card";

const Cards = ({value,handleButtonClick}) => {
    
    return (
        <div className="cart-container-second">
          <Card value={value} handleButtonClick={handleButtonClick}></Card>
         <div>
            <h2>This is cart</h2>
         </div>
        
        </div>
    );
};

export default Cards;