/* eslint-disable no-unused-vars */
import { Card, CardTitle, Col, Row, Table } from "react-bootstrap";
import { TableItem } from "../components/TableItem";
import { useEffect, useState } from "react";
import { deleteProduct } from "../services/product.services";
import { UseFetch } from "../hooks/UseFetch";
import { FormProduct } from "../components/FormProduct";
import ReactPaginate from "react-paginate"
import { TableItemUser } from "../components/TableItemUser";

export const ListUsersPage = () => {
  const [users, setUsers] = useState([]);

  const [formValues, setFormValues] = useState({
      id: null,
      name:"",
      price:"",
      discount:"",
      categoryId:"",
      sectionId:"",
      typeId:"",
      state:"",
      image:"",
      description:""
  })
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleEditForm = (idProduct) => {

    const {id, name, price, discount, categoryId, sectionId, description, typeId, state, image} = users.find(product => product.id === idProduct)

    setFormValues({
      id,
      name,
      price,
      discount,
      categoryId,
      sectionId,
      typeId,
      state,
      image,
      description
    })
  }

  const handleDeleteProduct = async (id) => {
    const {msg} = await deleteProduct(id);
    console.log(msg);
    const usersFiltered = users.filter(user => user.id !== id);
    setUsers([...usersFiltered])
  }
  const changeEstado = async(idInput,id)=>{
    const checkbox = document.getElementById(idInput);
    if(checkbox.checked){
        console.log('estoy adentro del checked')
        const userModify = await fetch(`http://localhost:3000/api/changeUsers/${id}`,{
            method:'PUT',
            body: JSON.stringify({
                roleId: true,
            }),
            headers: {
                "Content-Type": "application/json",
            }
        })
        const {ok,data,msg} = await userModify.json();
        const usersFiltered = users.map(user => {
          if(user.id == id){
            user.roleId = true
          }
          return user;
        })
        setUsers([...usersFiltered])
    } else{
        console.log('no pude ingresar al checked')
        const userModify = await fetch(`http://localhost:3000/api/changeUsers/${id}`,{
            method:'PUT',
            body: JSON.stringify({
                roleId: false
            }),
            headers: {
                "Content-Type": "application/json",
            }
        })
        const {ok,data,msg} = await userModify.json();
        const usersFiltered = users.map(user => {
          if(user.id == id){
            user.roleId = false
          }
          return user;
        })
        setUsers([...usersFiltered])

    }
    
  }
  const disableUser = async(idInput, id)=>{
    const checkbox = document.getElementById(idInput);
    if(checkbox.checked){
        console.log('estoy adentro del checked')
        const userModify = await fetch(`http://localhost:3000/api/changeUsers/${id}`,{
            method:'PUT',
            body: JSON.stringify({
                active: true,
            }),
            headers: {
                "Content-Type": "application/json",
            }
        })
        const {ok,data,msg} = await userModify.json();
        const usersFiltered = users.map(user => {
          if(user.id == id){
            user.active = true
          }
          return user;
        })
        setUsers([...usersFiltered])
    } else{
        console.log('no pude ingresar al checked')
        const userModify = await fetch(`http://localhost:3000/api/changeUsers/${id}`,{
            method:'PUT',
            body: JSON.stringify({
                active: false
            }),
            headers: {
                "Content-Type": "application/json",
            }
        })
        const {ok,data,msg} = await userModify.json();
        const usersFiltered = users.map(user => {
          if(user.id == id){
            user.active = false
          }
          return user;
        })
        setUsers([...usersFiltered])

    }
  }

  const getData = async () => {
    const { data } = await UseFetch("users");

    setUsers(data);
  };

  useEffect(() => {
    getData();
    
  }, []);
// paginate setting
 
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = users.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(users.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
 
    setItemOffset(newOffset);
  }
  console.log(currentItems);
// ---------------------------------------------------------------------------------------------
  


  return (
    <Row>
      
      <Col sm={12} lg={12}>
        <Card className="shadow mb-5">
          <Card.Body>
            <Table striped borderless responsive>
              <thead className="text-center">
                <tr >
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Role</th>
                  <th className="text-center">Acciones</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {currentItems.map((user, index) => (
                  <TableItemUser key={user.firstName + index} user={user} changeEstado={changeEstado} handleDeleteProduct={handleDeleteProduct} disableUser={disableUser}/>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    
  )
};
