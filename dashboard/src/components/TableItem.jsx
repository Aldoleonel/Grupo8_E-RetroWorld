import PropTypes from 'prop-types'
// import { propTypes } from 'react-bootstrap/esm/Image';

export const TableItem = ({name, price, discount, category, stock}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>${price}</td>
      <td>{discount}</td>
      <td>
        {
          category?.name
        }
      </td>
      <td>{stock}</td>
      {/* <td>{stock}</td> */}
    </tr>
  );
};

TableItem.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    discount: PropTypes.number,
    category: PropTypes.object,
    stock: PropTypes.number,
}
TableItem.defaultProps = {
    category : ['sin categoria asignado']
}