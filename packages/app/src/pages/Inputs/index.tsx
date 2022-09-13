import { Flex, Heading, TextField } from '@drogo-ui/components';
import { PlOutlineLock, PlOutlineSecurity } from '@drogo-ui/icons';
import { useTheme } from '@drogo-ui/styles';

export const Inputs: React.FC = () => {
  // const [value, setValue] = useState('');

  // const handleChange = (e: React.ChangeEvent<HTMLTextFieldElement>) => {
  //   const newValue = e.target.value;
  //   setValue(newValue);
  // };

  // const HandleClear = () => {
  //   setValue('');
  // };

  const { theme } = useTheme();

  return (
    <Flex
      direction="column"
      align="center"
      gap="50px"
      overflowX="auto"
      bg={theme.colors.content}
    >
      <Heading color="black" bold size="xlarge" mb="2rem">
        Inputs
      </Heading>

      <Flex px="20px" pb="50px" gap="20px" w="100%">
        <Flex direction="column" gap="20px">
          <Heading as="h2">Text</Heading>
          <TextField label="Standard Text" type="date" />
          <TextField label="Standard Text" />
          <TextField label="Filled Text" variant="filled" />
          <TextField label="Outlined Text" variant="outlined" />
          <TextField
            label="Standard Value"
            value="Thiago Sousa"
            variant="filled"
          />
          <TextField
            label="Filled Value"
            value="Thiago Sousa"
            variant="standard"
          />
          <TextField
            label="Outlined Value"
            value="Thiago Sousa"
            variant="outlined"
          />
          <TextField label="Standard Disabled" value="Thiago Sousa" disabled />
          <TextField
            label="Filled Disabled"
            value="Thiago Sousa"
            variant="filled"
            disabled
          />
          <TextField
            label="Outlined Disabled"
            value="Thiago Sousa"
            variant="outlined"
            disabled
          />
          <TextField
            label="Standard Error"
            value="Thiago Sousa"
            variant="standard"
            error="Error"
          />
          <TextField
            label="Filled Error"
            value="Thiago Sousa"
            variant="filled"
            error="Error"
          />
          <TextField
            label="Outlined Error"
            value="Thiago Sousa"
            variant="outlined"
            error="Error"
          />
          <TextField
            label="Standard Success"
            value="Thiago Sousa"
            variant="standard"
            success
          />
          <TextField
            label="Filled Success"
            value="Thiago Sousa"
            variant="filled"
            success
          />
          <TextField
            label="Outlined Success"
            value="Thiago Sousa"
            variant="outlined"
            success
          />
        </Flex>

        <Flex direction="column" gap="20px">
          <Heading as="h2">Email</Heading>
          <TextField label="Standard Email" type="email" />
          <TextField label="Filled Email" type="email" variant="filled" />
          <TextField label="Outlined Email" type="email" variant="outlined" />
          <TextField
            label="Standard Value"
            type="email"
            value="thiago@email.com"
            variant="filled"
          />
          <TextField
            label="Filled Value"
            type="email"
            value="thiago@email.com"
            variant="standard"
          />
          <TextField
            label="Outlined Value"
            type="email"
            value="thiago@email.com"
            variant="outlined"
          />
          <TextField
            label="Standard Disabled"
            type="email"
            value="thiago@email.com"
            disabled
          />
          <TextField
            label="Filled Disabled"
            type="email"
            value="thiago@email.com"
            variant="filled"
            disabled
          />
          <TextField
            label="Outlined Disabled"
            type="email"
            value="thiago@email.com"
            variant="outlined"
            disabled
          />
          <TextField
            label="Standard Error"
            type="email"
            value="Thiago Sousa"
            variant="standard"
            error="Error"
          />
          <TextField
            label="Filled Error"
            type="email"
            value="Thiago Sousa"
            variant="filled"
            error="Error"
          />
          <TextField
            label="Outlined Error"
            type="email"
            value="Thiago Sousa"
            variant="outlined"
            error="Error"
          />
          <TextField
            label="Standard Success"
            type="email"
            value="Thiago Sousa"
            variant="standard"
            success
          />
          <TextField
            label="Filled Success"
            type="email"
            value="Thiago Sousa"
            variant="filled"
            success
          />
          <TextField
            label="Outlined Success"
            type="email"
            value="Thiago Sousa"
            variant="outlined"
            success
          />
        </Flex>

        <Flex direction="column" gap="20px">
          <Heading as="h2">Password</Heading>
          <TextField label="Standard Password" type="password" />
          <TextField label="Filled Password" type="password" variant="filled" />
          <TextField
            label="Outlined Password"
            type="password"
            variant="outlined"
          />
          <TextField
            label="Standard Value"
            type="password"
            value="123456789"
            variant="filled"
          />
          <TextField
            label="Filled Value"
            type="password"
            value="123456789"
            variant="standard"
          />
          <TextField
            label="Outlined Value"
            type="password"
            value="123456789"
            variant="outlined"
          />
          <TextField
            label="Standard Disabled"
            type="password"
            value="123456789"
            disabled
          />
          <TextField
            label="Filled Disabled"
            type="password"
            value="123456789"
            variant="filled"
            disabled
          />
          <TextField
            label="Outlined Disabled"
            type="password"
            value="123456789"
            variant="outlined"
            disabled
          />
        </Flex>

        <Flex direction="column" gap="20px">
          <Heading as="h2">Search</Heading>
          <TextField label="Standard Search" maxLength={10} type="search" />
          <TextField label="Filled Search" type="search" variant="filled" />
          <TextField label="Outlined Search" type="search" variant="outlined" />
          <TextField
            label="Standard Value"
            type="search"
            value="thiago@email.com"
            variant="filled"
          />
          <TextField
            label="Filled Value"
            type="search"
            value="thiago@email.com"
            variant="standard"
          />
          <TextField
            label="Outlined Value"
            type="search"
            value="thiago@email.com"
            variant="outlined"
          />
          <TextField
            label="Standard Disabled"
            type="search"
            value="thiago@email.com"
            disabled
          />
          <TextField
            label="Filled Disabled"
            type="search"
            value="thiago@email.com"
            variant="filled"
            disabled
          />
          <TextField
            label="Outlined Disabled"
            type="search"
            value="thiago@email.com"
            variant="outlined"
            disabled
          />
        </Flex>

        <Flex direction="column" gap="20px">
          <Heading as="h2">Icons</Heading>
          <TextField
            label="Standard Email"
            iconLeft={<PlOutlineSecurity size={20} color="currentColor" />}
            iconRight={<PlOutlineLock size={20} color="currentColor" />}
          />
          <TextField
            label="Filled Email"
            variant="filled"
            iconLeft={<PlOutlineSecurity size={20} color="currentColor" />}
            iconRight={<PlOutlineLock size={20} color="currentColor" />}
          />
          <TextField
            label="Outlined Email"
            variant="outlined"
            iconLeft={<PlOutlineSecurity size={20} color="currentColor" />}
            iconRight={<PlOutlineLock size={20} color="currentColor" />}
          />
          <TextField
            label="Standard Value"
            value="Thiago Sousa"
            variant="filled"
            iconRight={<PlOutlineLock size={20} color="currentColor" />}
          />
          <TextField
            label="Filled Value"
            value="Thiago Sousa"
            variant="standard"
            iconLeft={<PlOutlineSecurity size={20} color="currentColor" />}
          />
          <TextField
            label="Outlined Value"
            value="Thiago Sousa"
            variant="outlined"
            iconRight={<PlOutlineLock size={20} color="currentColor" />}
          />
          <TextField
            label="Standard Disabled"
            value="Thiago Sousa"
            disabled
            iconLeft={<PlOutlineLock size={20} color="currentColor" />}
          />
          <TextField
            label="Filled Disabled"
            value="Thiago Sousa"
            variant="filled"
            disabled
            iconRight={<PlOutlineSecurity size={20} color="currentColor" />}
          />
          <TextField
            label="Outlined Disabled"
            value="Thiago Sousa"
            variant="outlined"
            disabled
            iconLeft={<PlOutlineLock size={20} color="currentColor" />}
          />
        </Flex>

        <Flex direction="column" gap="20px">
          <Heading as="h2">Number</Heading>
          <TextField
            type="number"
            step={5}
            min={5}
            max={10}
            label="Standard Number"
          />
          <TextField type="number" label="Filled Number" variant="filled" />
          <TextField type="number" label="Outlined Number" variant="outlined" />
          <TextField
            type="number"
            label="Standard Value"
            value="10"
            variant="filled"
          />
          <TextField
            type="number"
            label="Filled Value"
            value="10"
            variant="standard"
          />
          <TextField
            type="number"
            label="Outlined Value"
            value="10"
            variant="outlined"
          />
          <TextField
            type="number"
            label="Standard Disabled"
            value="10"
            disabled
          />
          <TextField
            type="number"
            label="Filled Disabled"
            value="10"
            variant="filled"
            disabled
          />
          <TextField
            type="number"
            label="Outlined Disabled"
            value="10"
            variant="outlined"
            disabled
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
