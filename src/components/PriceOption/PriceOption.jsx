import PropTypes from "prop-types";
const PriceOption = ({ option }) => {
  return (
    <div>
      <h2>{option.name}</h2>
    </div>
  );
};

PriceOption.PropTypes = {
  option: PropTypes.object,
};

export default PriceOption;
