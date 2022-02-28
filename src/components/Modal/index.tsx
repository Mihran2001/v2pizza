import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";

const PizzaTypeModal: React.FC<{
  isVisible: boolean;
  setIsModalVisible: any;
}> = ({ isVisible, setIsModalVisible }) => {
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
      <Modal
        title="Basic Modal"
        visible={isVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default PizzaTypeModal;
