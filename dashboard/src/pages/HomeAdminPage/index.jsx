import { Metrics } from "../../components/Metrics"
import { CategoriesInDb } from "../../components/CategoriesInDb"
import { LastProductInDb } from "../../components/LastProductInDb"
import {useLoaderData} from "react-router-dom"

export const HomeAdminPage = () => {

  const {totalProducts, categories} = useLoaderData()

  return (
    <>
    <Metrics totalProducts={totalProducts}/>
    <div className="row">
      <LastProductInDb />
      <CategoriesInDb categories = {categories}/>
    </div>
    </>
  )
}
