import { DataProps } from "../App"
import { Banner } from "../components/Banner"
import { ShortcutProducts } from "../components/ShortcutProducts"

type HomeLoadingProps = {
  data: DataProps[]
  loading: boolean
}
export const Home = ({ data, loading }: HomeLoadingProps) => {
  return (
    <div className="max-w-7xl mx-auto px-2 md:px-0">
      <Banner />
      {loading ? (
        <div className="text-center text-lg">Loading...</div>
      ) : (
        <ShortcutProducts data={data} />
      )}
    </div>
  )
}
