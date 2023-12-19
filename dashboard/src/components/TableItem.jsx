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
      <td>
      <div className="d-flex">
          <button
            className="btn btn-sm btn-outline-success mr-3"
            // onClick={() => handleEditForm(id)}
          >
            <i className="fas fa-pencil-alt"></i>
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            // onClick={() => handleDeleteProduct(id)}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </td>
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