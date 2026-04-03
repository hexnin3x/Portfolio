
import '../../styles/index.css';

const Card = ({ children, className = '', ...props }) => {
    return (
        <div className={`glass-card magnetic ${className}`} {...props}>
            {children}
        </div>
    );
};

export default Card;
