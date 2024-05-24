import AllProducts from "@/components/AllProducts";
import Footer from "@/components/Footer";

export default async function Home() {
  return (
    <>
      <main className="wrapper">
        <AllProducts />
      </main>
      <Footer />
    </>
  );
}
