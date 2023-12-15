import { useEffect, useState } from "react";

export const GenresInDb = () => {

  const [categories, setCategories] = useState([]);

  const getCategories = async (endopoint = '/api/categories') => {
    try {
      // setLoading(true)

      const response = await fetch(`http://localhost:3000${endopoint}`);
      const result = await response.json();
      // console.log(result);
      
      // setLoading(false);
      setCategories(result.data);
      // setPagination(result.meta);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
    // console.log(result);
  }, []);
  
  // console.log(categories, "holaaaaaaaaaaaaaa buenas!");
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Category in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {categories.map(({category}, index) => (
              <div key={index} className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">{category.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
