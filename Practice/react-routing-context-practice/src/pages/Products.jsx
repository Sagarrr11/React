import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div className="">
      <div className="text-5xl flex justify-center">
        <h1>Products</h1>
      </div>

      <div className="text-2xl flex justify-center gap-5">
        <Link to="/products/men">Men</Link>
        <Link to="/products/women">Women</Link>
      </div>

      <Outlet />
    </div>
  );
};

export default Products;
