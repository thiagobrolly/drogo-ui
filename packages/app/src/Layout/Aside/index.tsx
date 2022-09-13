import { Flex, Button, Heading, Switch } from '@drogo-ui/components';
import { useTheme } from '@drogo-ui/styles';
import { Link } from 'react-router-dom';
import * as S from './styles';

export interface AsideProps {
  isOpen?: boolean;
}

export const Aside = ({ isOpen }: AsideProps) => {
  const { toggleTheme } = useTheme();

  return (
    <S.Wrapper isOpen={isOpen}>
      <Flex
        gap="16px"
        align="center"
        justify="center"
        direction="column"
        h="100%"
        overflow="auto"
      >
        <Flex align="center" justify="center" h="70px">
          <Heading bold>Menu</Heading>
        </Flex>
        {/* <Link to="/">
          <Button screen={[600]} size="medium" variant="standard" disabled>
            Home
          </Button>
        </Link> */}
        <Link to="/">
          <Button size="fullSize" variant="standard">
            Home
          </Button>
        </Link>
        <Link to="/buttons">
          <Button size="fullSize" variant="standard">
            Buttons
          </Button>
        </Link>
        <Link to="/inputs">
          <Button size="fullSize" variant="standard">
            Inputs
          </Button>
        </Link>
        <Link to="/modals">
          <Button size="fullSize" variant="standard">
            Modals
          </Button>
        </Link>
        <Link to="/pagination">
          <Button size="fullSize" variant="standard">
            Pagination
          </Button>
        </Link>
        <Link to="/table">
          <Button size="fullSize" variant="standard">
            Tables
          </Button>
        </Link>
        <Link to="/accordion">
          <Button size="fullSize" variant="standard">
            Accordion
          </Button>
        </Link>
        <Flex gap="2rem" mt="auto" mb="2rem">
          <Heading bold size="small">
            Light
          </Heading>
          <Switch onChange={toggleTheme} />
          <Heading bold size="small">
            Dark
          </Heading>
        </Flex>
      </Flex>
    </S.Wrapper>
  );
};
