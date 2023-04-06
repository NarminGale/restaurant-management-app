import "./Header.scss";

import { useSelector } from "react-redux";
export default function Header() {
  const title = useSelector((state) => state.pageTitle.title);

  return (
    <div className="page-header bg-body px-5 py-4">
      <h1 className="mb-0 fs-3">{title} page</h1>
    </div>
  );
}
