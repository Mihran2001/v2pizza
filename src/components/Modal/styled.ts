import styled from "styled-components";
import { Modal, Button, Radio } from "antd";

export const AntModal = styled(Modal)`
  .prices-col {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .ant-modal-footer {
    display: none;
  }
`;
