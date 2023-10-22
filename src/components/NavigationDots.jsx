
import PropTypes from 'prop-types';

const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
                <a
                    href={`#${item}`}
                    key={index + index}
                    style={active === item ? { backgroundColor: '#313bac' } : {}}
                    className="app__navigation-dot"
                />
            ))}
        </div>
    )
}

NavigationDots.propTypes = {
    active: PropTypes.string.isRequired,
};

export default NavigationDots;

