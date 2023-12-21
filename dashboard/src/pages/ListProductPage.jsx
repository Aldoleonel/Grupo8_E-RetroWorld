/* eslint-disable no-unused-vars */
import { Card, CardTitle, Col, Row, Table } from "react-bootstrap";
import { TableItem } from "../components/TableItem";
import { useEffect, useState } from "react";
import { deleteProduct } from "../services/product.services";
import { UseFetch } from "../hooks/UseFetch";
import { FormProduct } from "../components/FormProduct";
import ReactPaginate from "react-paginate"

export const ListProductPage = () => {
  const [products, setProducts] = useState([]);

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
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const handleEditForm = (idProduct) => {

    const {id, name, price, discount, categoryId, sectionId, description, typeId, state, image} = products.find(product => product.id === idProduct)

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
    const productsFiltered = products.filter(product => product.id !== id);
    setProducts([...productsFiltered])
  }

  const getData = async () => {
    const { data } = await UseFetch("products");

    setProducts(data);
  };

  useEffect(() => {
    getData();
    
  }, []);
// paginate setting
 
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
 
    setItemOffset(newOffset);
  }
  // console.log(currentItems);
// ---------------------------------------------------------------------------------------------
  


  return (
    <Row>
      <Col sm={12} lg={4}>
      <Card className="mb-3">
          <Card.Header>
            <CardTitle>{"Agregar"} producto</CardTitle>
          </Card.Header>
          <Card.Body>
            <FormProduct products={products} setProducts={setProducts} formValues={formValues} setFormValues={setFormValues}/>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} lg={8}>
        <Card className="shadow mb-5">
        <Card.Header className="d-flex justify-content-between">
            {/* <FormSearch /> */}
            <ReactPaginate 
            pageCount={pageCount}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            pageRangeDisplayed={4}
            onPageChange={handlePageClick}
            breakClassName="page-item"
            breakLinkClassName="page-link"
            marginPagesDisplayed={2}
            containerClassName="pagination justify-content-center cursorPage"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active"
      
          />
          </Card.Header>
          <Card.Body>
            <Table striped borderless responsive>
              <thead>
                <tr>
                  <th>Título</th>
                  <th>name</th>
                  <th>Descuento</th>
                  <th>Categoría</th>
                  <th>Sección</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((product, index) => (
                  <TableItem key={product.name + index} product={product} handleEditForm={handleEditForm} handleDeleteProduct={handleDeleteProduct}/>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    
  )
};
