import React, { useState } from 'react';
import {
  Button,
  Tooltip,
  Modal,
  Popover,
  Flex,
  Heading,
} from '@drogo-ui/components';

export const Modals: React.FC = () => {
  const [handleOpen, setHandleOpen] = useState(false);
  return (
    <Flex direction="column" gap="5rem">
      <Heading color="black" bold size="xlarge" mb="2rem">
        Modals
      </Heading>
      <Flex direction="column">
        <Heading as="h2" color="black" size="large" mb="1rem">
          Popover
        </Heading>
        <Popover trigger={<Button variant="approve">Abrir Popover</Button>}>
          Popover
        </Popover>
      </Flex>
      <Flex direction="column">
        <Heading as="h2" color="black" size="large" mb="1rem">
          Tooltip
        </Heading>
        <Tooltip trigger={<Button variant="danger">Abrir Tooltip</Button>}>
          Tooltip
        </Tooltip>
      </Flex>
      <Flex direction="column">
        <Heading as="h2" color="black" size="large" mb="1rem">
          Modal
        </Heading>
        <Button variant="filled" onClick={() => setHandleOpen(true)}>
          Abrir Modal
        </Button>
        <Modal
          isOpen={handleOpen}
          viewCloseButton
          onRequestClose={setHandleOpen}
          shouldCloseOnOverlayClick
        >
          Content Modal
        </Modal>
      </Flex>
    </Flex>
  );
};
