import React from 'react';
import { Button, Flex, Heading } from '@drogo-ui/components';
import { Link } from 'react-router-dom';

export const Buttons: React.FC = () => {
  return (
    <Flex direction="column">
      <Heading color="black" bold size="xlarge" mb="2rem">
        Buttons Standard
      </Heading>

      {/* <p style={{ fontSize: '1.6rem' }}>Thiago Sousa</p>
      <p style={{ fontSize: '12px' }}>Thiago Sousa</p>
      <p style={{ fontSize: '1.2rem' }}>Thiago Sousa</p>
      <p style={{ fontSize: '14px' }}>Thiago Sousa</p>
      <p style={{ fontSize: '1.4rem' }}>Thiago Sousa</p>
      <p style={{ fontSize: '16px' }}>Thiago Sousa</p>
      <p style={{ fontSize: '1.6rem' }}>Thiago Sousa</p> */}

      <Flex gap="2rem" align="center" wrap="wrap">
        <Button size="small" variant="standard">
          Small
        </Button>
        <Button size="medium" variant="standard">
          Medium
        </Button>
        <Button size="large" variant="standard">
          Large
        </Button>
        <Button size="large" variant="standard" disabled>
          Disabled
        </Button>
        <Button variant="standard" size="fullSize">
          Full size
        </Button>
      </Flex>

      <Heading color="black" bold size="xlarge" mt="5rem" mb="2rem">
        Buttons Filled
      </Heading>

      <Flex gap="2rem" align="center" wrap="wrap">
        <Button size="small" variant="filled">
          Small
        </Button>
        <Button size="medium" variant="filled">
          Medium
        </Button>
        <Button size="large" variant="filled">
          Large
        </Button>
        <Button size="large" variant="filled" disabled>
          Disabled
        </Button>
        <Button variant="filled" size="fullSize">
          Full size
        </Button>
      </Flex>

      <Heading color="black" bold size="xlarge" mt="5rem" mb="2rem">
        Buttons Outline
      </Heading>

      <Flex gap="2rem" align="center" wrap="wrap">
        <Button size="small" variant="outline">
          Small
        </Button>
        <Button size="medium" variant="outline">
          Medium
        </Button>
        <Button size="large" variant="outline">
          Large
        </Button>
        <Button size="large" variant="outline" disabled>
          Disabled
        </Button>
        <Button variant="outline" size="fullSize">
          Full size
        </Button>
      </Flex>

      <Heading color="black" bold size="xlarge" mt="5rem" mb="2rem">
        Buttons Approve
      </Heading>

      <Flex gap="2rem" align="center" wrap="wrap">
        <Button size="small" variant="approve">
          Small
        </Button>
        <Button size="medium" variant="approve">
          Medium
        </Button>
        <Button size="large" variant="approve">
          Large
        </Button>
        <Button size="large" variant="approve" disabled>
          Disabled
        </Button>
        <Button variant="approve" size="fullSize">
          Full size
        </Button>
      </Flex>

      <Heading color="black" bold size="xlarge" mt="5rem" mb="2rem">
        Buttons Danger
      </Heading>

      <Flex gap="2rem" align="center" wrap="wrap">
        <Button size="small" variant="danger">
          Small
        </Button>
        <Button size="medium" variant="danger">
          Medium
        </Button>
        <Button size="large" variant="danger">
          Large
        </Button>
        <Button size="large" variant="danger" disabled>
          Disabled
        </Button>
        <Button variant="danger" size="fullSize">
          Full size
        </Button>
      </Flex>

      <Heading color="black" bold size="xlarge" mt="5rem" mb="2rem">
        Buttons links
      </Heading>

      <Flex gap="2rem" align="center" wrap="wrap">
        <Button variant="standard" as="a" href="#" size="medium">
          Link a
        </Button>
        <Button variant="standard" as="a" href="#" size="medium" disabled>
          Link a
        </Button>
        <Link to="/">
          <Button variant="standard" size="medium">
            Link router dom
          </Button>
        </Link>
        <Link to="/">
          <Button variant="standard" size="medium" disabled>
            Link router dom
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};
