import React, { useContext, useState } from "react";
import { Modal, Button, Radio, Row, Col } from "antd";
// import { ReactComponent as TestPizza } from "../../assets/svg/testPizza.svg";
import { AntModal } from "./styled";
import { StyledButton } from "../Button/styles";
import { DispatchContext, StateContext } from "../../store/constants";

const PizzaTypeModal: React.FC<{
  isModalVisible: boolean;
  setIsModalVisible: any;
}> = ({ isModalVisible, setIsModalVisible }) => {
  const store = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const [pizzaSize, setPizzaSize] = useState("");

  const choosePizza = () => {
    dispatch({ type: "ADD_COUNT" });
    dispatch({ type: "CHOOSE_SIZE", payload: { size: pizzaSize } });
    setIsModalVisible(false);
  };

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
              <Radio.Button value="a" onClick={() => setPizzaSize("Small")}>
                Small
              </Radio.Button>
              <Radio.Button value="b" onClick={() => setPizzaSize("Medium")}>
                Medium
              </Radio.Button>
              <Radio.Button value="c" onClick={() => setPizzaSize("Big")}>
                Big
              </Radio.Button>
            </Radio.Group>
            <StyledButton onClick={choosePizza}>Choose</StyledButton>
          </Col>
        </Row>
      </AntModal>
    </>
  );
};

export default PizzaTypeModal;
