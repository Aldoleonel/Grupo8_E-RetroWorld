import { Card, Table } from "react-bootstrap";
import { TableItem } from "../components/TableItem";
import { useEffect, useState } from "react";
import { Loading } from "../components/loading";

export const ListProductPage = () => {
  const [products, setProducts] = useState([]);
  const [formValues, setFormValues] = useState({
      id: null,
      title:"",
      price:"",
      discount:"",
      categoryId:"",
      sectionId:"",
      price:"",
      price:""
  })
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState();

  const getProducts = async (endopoint = '/api/products') => {
    try {
      setLoading(true)

      const response = await fetch(`http://localhost:3000${endopoint}`);
      const result = await response.json();
      
      setLoading(false);
      setProducts(result.data);
      setPagination(result.meta);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getProducts();
    // console.log(result);
  }, []);

  const handlePagination = async(endopoint) => {
    getProducts(endopoint);
  }

  return loading ? (
    <Loading />
  ) : (
    <Card className="shadow mb-5">
      <Card.Body striped bordered hover>
        <div className="d-flex justify-content-end">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              {
                pagination.pages.map(paginate => (
                  <li key={paginate.number} className={`page-item ${paginate.number === pagination.currentPage && 'active'}`}>
                    <a className="page-link" href="#" onClick={()=> handlePagination(paginate.url)}>
                      {paginate.number}
                    </a>
                  </li>
                ))
              }
              

              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Discount</th>
              <th>category</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map(({ id, name, price, discount, category, stock }) => (
              <TableItem
                key={id}
                name={name}
                price={price}
                discount={discount}
                category={category}
                stock={stock}
              />
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};
