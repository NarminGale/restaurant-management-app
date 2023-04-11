import "./App.scss";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { pageTitleSlice } from "../features/pageTitle/pageTitleSlice";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Order from "../pages/Order";
import Orders from "../pages/Orders";
import NewOrder from "../pages/NewOrder";
import Header from "../components/Header";
import Dashboard from "../pages/Dashboard";
import Sidebar from "../components/Sidebar";

export default function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  const { pathname } = location;

  useEffect(() => {
    const title = pathname.slice(1);
    dispatch(pageTitleSlice.actions.setTitle(title));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Container fluid className="App vh-100">
      <Row className="vh-100">
        <Col sm={5} md={4} lg={3} xl={3} xxl={2}>
          <Sidebar />
        </Col>
        <Col sm={7} md={8} lg={9} xl={9} xxl={10} className="px-0">
          <div className="px-5 py-4 bg-body">
            <Header />
          </div>
          <div className="px-5 py-4 main-body">
            <Routes>
              <Route exact path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/orders/:orderId" element={<Order />} />
              <Route path="/orders/new" element={<NewOrder />} />
            </Routes>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
