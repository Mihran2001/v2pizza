import React, { useEffect, useState } from "react";
import { Modal, Button, Radio, Row, Col } from "antd";
// import { ReactComponent as TestPizza } from "../../assets/svg/testPizza.svg";
import { AntModal } from "./styled";
import { StyledButton } from "../Button/styles";

const PizzaTypeModal: React.FC<{
  isModalVisible: boolean;
  setIsModalVisible: any;
}> = ({ isModalVisible, setIsModalVisible }) => {
  //   const [isModalVisible, setIsModalVisible] = useState(isVisible);

  //   const showModal = () => {
  //     setIsModalVisible(true);
  //   };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {/* <Button type="primary" onClick={() => isVisible}>
        Open Modal
      </Button> */}
      <AntModal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Row>
          <Col span={15} className="prices-col">
            {/* <TestPizza></TestPizza> */}
          </Col>
          <Col span={9} className="prices-col">
            <Radio.Group defaultValue="a" buttonStyle="solid">
              <Radio.Button value="a">Small</Radio.Button>
              <Radio.Button value="b">Medium</Radio.Button>
              <Radio.Button value="c">Big</Radio.Button>
            </Radio.Group>
            <StyledButton>Choose</StyledButton>
          </Col>
        </Row>
      </AntModal>
    </>
  );
};

export default PizzaTypeModal;
