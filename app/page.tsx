
import Image from "next/image";
import Banner from "./Components/Banner";
import AllProducts from "./Components/AllProducts";
import { api } from "./lib/api";

export default async function Home() {
  const apidata=await api();
  return (
   <div>
    <Banner />
    <AllProducts allproducts={apidata} />

   </div>
  );
}
