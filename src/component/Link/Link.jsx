import PropTypes from 'prop-types'; 

const Link = ({ route }) => {
    return (
        <div>
            <li className="mr-3 hover:bg-[#AF1740] p-2 rounded-lg m-2" >
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

Link.propTypes={
    route: PropTypes.object.isRequired
}
export default Link;