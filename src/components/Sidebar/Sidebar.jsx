import "./Sidebar.scss";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { NAV_ITEMS } from "../../app/routes";
import { pageTitleSlice } from "../../features/pageTitle/pageTitleSlice";
import arrowRight from "../../assets/svg-icons/arrow-right.svg";

export default function SidebarMenu() {
  const dispatch = useDispatch();

  const handleChangeTitle = (title) =>
    dispatch(pageTitleSlice.actions.setTitle(title));

  return (
    <Navbar
      className="sidebar position-fixed top-0 bottom-0 start-0 bg-body flex-column p-4"
      fixed="left"
    >
      <Navbar.Brand href="/" className="align-self-center fw-bold fs-3">
        ALGO-TASK
      </Navbar.Brand>
      <Nav defaultActiveKey="/" className="flex-column my-3 w-100">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={() => handleChangeTitle(item.name)}
            className="sidebar--item text-decoration-none d-flex align-items-center justify-content-between mt-2 p-2 rounded-5"
          >
            <div className="d-flex justify-content-center align-items-center gap-3">
              <div className="icon-box rounded-5">
                <img src={item.icon} alt={item.name} />
              </div>
              <span>{item.name}</span>
            </div>

            <div className="right-arrow">
              <img src={arrowRight} alt="arrow to right" />
            </div>
          </NavLink>
        ))}
      </Nav>
    </Navbar>
  );
}
