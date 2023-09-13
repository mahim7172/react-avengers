import  './Card.css';
const Card = ({value,handleButtonClick}) => {
    
    return (
   <div className='ami-container-cart-er'>
    {
        value.map(data=> <div key={data.id} className='cart-container'>
        <div>
         <img className='image-hmm' src={data.image} alt="" />
        </div>
         <h4>{data.name}</h4>
         <p>Lorem ipsum, dolor sit <br /> amet consectetur <br /> adipisicing elit.</p>
         <div className='salary-div'>
             <p>Salary : {data.salary}tk</p>
             <p>{data.role}</p>
         </div>
         <button onClick={()=>handleButtonClick(data)} className='button'>Select</button>
     </div>)
    }
   </div>
    );
};

export default Card;