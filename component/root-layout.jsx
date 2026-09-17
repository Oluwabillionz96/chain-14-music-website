import Header from "./header"
import { Outlet } from "react-router"
const RootLayout = () => {
  return   <div>
    <main>
      <Header />
      <Outlet/>
      </main>
    </div>

}

export default RootLayout
