import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="max-w-[68rem] mx-auto w-[91%] p-4">
        <nav className="flex justify-between items-center">
          <h1 className="text-xl md:text-3xl">GoMovie</h1>
          <ul className="flex gap-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/watched">Watched List</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <Outlet />
    </>
  );
};

export default Layout;
