import { Metrics } from "../../components/Metrics"
import { GenresInDb } from "../../components/GenresInDb"
import { LastProductInDb } from "../../components/LastProductInDb"

export const Home = () => {
  return (
    <>
    <Metrics/>
    <div className="row">
      <LastProductInDb />
      <GenresInDb />
    </div>
    </>
  )
}
