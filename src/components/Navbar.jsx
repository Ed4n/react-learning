import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className=" w-full h-14 bg-slate-950 shadow-md flex justify-between items-center p-4 ">
      <h3 className="text-white">React Learning</h3>
      <div className="flex gap-3">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/react-query/react-query">React Query</Link>
      </div>
    </nav>
  );
}
