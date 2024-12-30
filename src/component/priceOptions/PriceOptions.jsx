import PropTypes from 'prop-types';
import PriceOption from '../priceOption/PriceOption';

const PriceOptions = () => {



  const gymPriceOption = [
    {
      "id": 1,
      "name": "Basic Membership",
      "price": 30,
      "currency": "USD",
      " duration": "month",
      "features": [
        "gym facilities during hours (9 AM - 4 PM)",
        "Use of cardio and weight machines",
        "Locker room and shower access"
      ]
    },
    {
      "id": 2,
      "name": "Standard Membership",
      "price": 50,
      "currency": "USD",
      "duration": "month",
      "features": [
        "Unlimited gym facilities  hours",
        "Use of cardio and weight machines",
        "Locker room and shower access",
        "Participation in 2 group fitness per month"
      ]
    },
    {
      "id": 3,
      "name": "Premium Membership",
      "price": 75,
      "currency": "USD",
      "duration": "month",
      "features": [
        " access with premium toiletries",
        "Unlimited group fitness classes",
        "10% discount on personal training sessions",
        "Priority booking for fitness classes"
      ]
    },
    {
      "id": 4,
      "name": "Elite Membership",
      "price": 120,
      "currency": "USD",
      "duration": "month",
      "features": [
        "Unlimited access to gym facilities",
        "Locker room and shower access",
        "Participation in 2 group fitness month"]
    },
  ]

  return (
    <div className='m-12'>
      <h1 className="text-5xl">Hello </h1>
      <div className='grid md:grid-cols-2 p-2 gap-6 sm:grid-cols-1'>
        {
          gymPriceOption.map(option => <PriceOption
          
            key={option.id} option={option}>
          </PriceOption>)
        }
      </div>
    </div>
  );
};
PriceOptions.propTypes = {
  gymPriceOption: PropTypes.array.isRequired
}
export default PriceOptions;