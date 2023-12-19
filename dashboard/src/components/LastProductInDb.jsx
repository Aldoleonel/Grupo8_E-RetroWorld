import { useEffect, useState } from "react";
import { UseFetch } from "../hooks/UseFetch";




export const LastProductInDb = () => {
	const [product, setProduct] = useState([]);

	const getData = async () => {
		try {
			const result = await UseFetch("products");
			console.log(result);
			const pages = result.meta.pages;
			const ultimatePages = pages[pages.length -1];
			const {data} = await UseFetch(`products?page=${ultimatePages.number}&limit=8`)
			const ultimateProduct = data[data.length -1]
			setProduct(ultimateProduct);
		} catch (error) {
			console.log(error);
		}
	};
	
	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="col-lg-6 mb-4">
								<div className="card shadow mb-4">
									<div className="card-header py-3">
										<h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
									</div>
									<div className="card-body">
										<div className="text-center">
											<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "40rem"}} src={`${product.image}`} alt=" Star Wars - Mandalorian "/>
										</div>
										<p>
											{
												product.description
											}
										</p>
										<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View product detail</a>
									</div>
								</div>
							</div>
	)
}
