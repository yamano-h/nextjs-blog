import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "../components/container";
import { Row, Col } from "antd";

export default function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Row>
          <Col span={6}>
            <Container />
          </Col>
          <Col span={6}>
            <Container />
          </Col>
          <Col span={6}>
            <Container />
          </Col>
          <Col span={6}>
            <Container />
          </Col>
        </Row>
      </DndProvider>
    </div>
  );
}
