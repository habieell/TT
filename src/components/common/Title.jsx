import "../../styles/Title.scss";
import PropTypes from 'prop-types';

const Title = ({title}) => {
  return (
    <div className='sc-title text-center'>
        <h3 className='text-capitalize text-white'>{title}</h3>
        
    </div>
  )
}

export default Title;

Title.propTypes = {
  title: PropTypes.string
}