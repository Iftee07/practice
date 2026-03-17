import PropTypes from "prop-types";
const PriceOption = ({ option }) => {
  return (
    <div className="bg-teal-700 p-6 rounded-md text-center text-white flex flex-col gap-y-4">
      <h2>
        <span className="text-6xl">{option.price}</span>
        <span>/month</span>
      </h2>
      <h2 className="text-2xl font-bold">{option.name}</h2>
      <ul className="text-left">
        {option.features.map((feature, index) => (
          <li key={index}>-{feature}</li>
        ))}
      </ul>
      <button className="btn btn-accent text-xl hover:bg-blue-200">Buy Now</button>
    </div>
  );
};

PriceOption.PropTypes = {
  option: PropTypes.object,
};

export default PriceOption;
