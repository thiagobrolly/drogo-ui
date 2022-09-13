import { Flex, Heading } from '@drogo-ui/components';
// import { useTheme } from '@drogo-ui/styles';

const Home: React.FC = () => {
  // const [value, setValue] = useState('');

  // const handleChange = (e: React.ChangeEvent<HTMLTextFieldElement>) => {
  //   const newValue = e.target.value;
  //   setValue(newValue);
  // };

  // const HandleClear = () => {
  //   setValue('');
  // };

  // const { theme } = useTheme();

  return (
    <Flex
      px="100px"
      direction="column"
      align="center"
      gap="50px"
      // bg={theme.colors.white}
    >
      <Heading color="black" bold size="xlarge" mb="2rem">
        Home
      </Heading>
    </Flex>
  );
};

export default Home;
