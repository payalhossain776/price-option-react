import PropTypes from 'prop-types';
import { IoMdCheckmarkCircle } from "react-icons/io";

const Feature = ({ feature }) => {
    return (
        <div>
            <p className='flex items-center'>
            <IoMdCheckmarkCircle className='text-2xl text-[#FFF4EA] mr-2'></IoMdCheckmarkCircle>
                {feature}
                
            </p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.object.isRequired
}
export default Feature;