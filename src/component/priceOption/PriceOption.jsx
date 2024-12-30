import PropTypes from 'prop-types'; 
import Feature from '../feature/Feature';


const PriceOption = ({option}) => {
    const {name ,price, features}=option;
    return (
        <div className='bg-[#C96868] p-4 m-4 flex flex-col rounded-2xl'>
            <h2 className='font-bold text-center'> 
                <span className="text-5xl">{price}</span>
                <span className="text-3xl">/mon</span>
            </h2>
            <h4 className="text-4xl font-extrabold text-center my-8">{name}</h4>
         <div className='pl-6 flex-grow'>
         {
            features.map((feature, idx)=><Feature key={idx} feature={feature}></Feature>)
         }
         </div>
         <button className=' mt-3 hover:bg-[#AF1740] p-4 bg-[#FFF4EA] w-full rounded-2xl text-xl'>Buy Now</button>
        </div>
    );
};


PriceOption.propTypes={
    option: PropTypes.object.isRequired
}
export default PriceOption;