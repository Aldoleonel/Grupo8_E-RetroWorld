import PropTypes from "prop-types";

export const TableItemUser = ({
    user: { id, firstName, lastName, email, phone, roleId, active },
    handleDeleteProduct,
    changeEstado,
    disableUser
}) => {
    
    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td> {phone}</td>
            <td>{roleId}</td>
        <td>
            <div className="d-flex justify-content-between" > 
                <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleDeleteProduct(id)}
                >
                    <i className="fas fa-trash-alt"></i>
                </button>
                <div className='custom-control custom-switch'>
                    
                            <input
                            type='checkbox'
                            className='custom-control-input'
                            id={`customSwitchesRole${id}`}
                            onClick={() => changeEstado(`customSwitchesRole${id}`,id)}
                            readOnly
                            checked = {roleId == 1}
                            />
                    
                    <label className='custom-control-label' htmlFor={`customSwitchesRole${id}`}>
                    
                    </label>
                </div>
                <div className='custom-control custom-switch'>
                    
                    <input
                        type='checkbox'
                        className='custom-control-input'
                        id={`customSwitchesActive${id}`}
                        onClick={() => disableUser(`customSwitchesActive${id}`, id)}
                        readOnly
                        checked = {active == true}

                    />
                       
                    <label  className='custom-control-label' htmlFor={`customSwitchesActive${id}`}>
                       {active?"activo":"baneado"}
                    </label>
                </div>
            </div>
        </td>
        </tr>
    );
};

TableItemUser.propTypes = {
  user: PropTypes.object,
  changeEstado: PropTypes.func,
  handleDeleteProduct: PropTypes.func,
  disableUser: PropTypes.func,
};
