import "./App.scss";

import { Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Orders from "../pages/Orders";
import Dashboard from "../pages/Dashboard";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function App() {
  return (
    <div className="App vh-100">
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col sm={5} md={4} lg={3} xxl={2} className="px-0">
            <Sidebar />
          </Col>
          <Col sm={7} md={8} lg={9} xxl={10} className="px-0">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
