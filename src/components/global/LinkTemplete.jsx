import { Link } from "react-router-dom";

export default function LinkTemplete({ path, pathTitle }) {
  return (
    <div className="flex gap-3">
      <Link className="p-8 rounded-lg bg-slate-800" to={path}>
        {pathTitle}
      </Link>
    </div>
  );
}
