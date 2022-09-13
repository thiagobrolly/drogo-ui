import { useCallback, useEffect, useState } from 'react';
import {
  Checkbox,
  Flex,
  Spinner,
  TableContainer,
  Table,
  // TableCaption,
  THead,
  Tr,
  Th,
  TBody,
  Td,
  TFoot,
  Button,
  Heading,
} from '@drogo-ui/components';
import { api } from '../../services/api';

type User = {
  id: string;
  name: string;
  email: string;
  index: number;
  isActive: boolean;
  picture: string;
  age: string;
  gender: 'male' | 'female';
  company: string;
  phone: string;
  registered: string;
};

export function TablePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState('');

  const fetchUsers = useCallback(async () => {
    setIsloading(true);
    await api
      .get(`/users?_page=1&_limit=10`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => setError(err.message));
    setIsloading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <Flex mx="auto" mt="50px" direction="column" maxW="960px" gap="10rem">
      <Flex justify="center">
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <div>{error}</div>
        ) : (
          <Flex direction="column" align="center">
            <Heading size="xlarge" bold mb="2rem">
              Simples
            </Heading>
            <TableContainer screen={[600, 480]}>
              <Table role="table" width="100%">
                <THead>
                  <Tr>
                    <Th align="left">
                      <Checkbox name="name" />
                    </Th>
                    <Th>ID</Th>
                    <Th align="left">Usuário</Th>
                    <Th>Data de cadastro</Th>
                    <Th>&nbsp;</Th>
                  </Tr>
                </THead>
                <TBody>
                  {users.map((user) => (
                    <Tr key={user.id}>
                      <Td w="50px" align="left">
                        <Checkbox name="pink" />
                      </Td>
                      <Td data-label="ID" w="60px">
                        <p>{user.index}</p>
                      </Td>
                      <Td data-label="Usuário" color="yellow" align="left">
                        <p>{user.email}</p>
                      </Td>
                      <Td data-label="Data de cadastro">{user.registered}</Td>
                      <Td w="150px" align="center">
                        <Button size="medium" variant="approve">
                          Editar
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </TBody>
              </Table>
            </TableContainer>
          </Flex>
        )}
      </Flex>

      <Flex justify="center">
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <div>{error}</div>
        ) : (
          <Flex direction="column" align="center">
            <Heading size="xlarge" bold mb="2rem">
              Listrada e TFoot
            </Heading>
            <TableContainer screen={[600, 480]}>
              <Table role="table" width="100%" striped>
                {/* <TableCaption>Caption Table</TableCaption> */}
                <THead>
                  <Tr>
                    <Th align="left">
                      <Checkbox name="name" />
                    </Th>
                    <Th>ID</Th>
                    <Th align="left">Usuário</Th>
                    <Th>Data de cadastro</Th>
                    <Th>&nbsp;</Th>
                  </Tr>
                </THead>
                <TBody>
                  {users.map((user) => (
                    <Tr key={user.id}>
                      <Td w="50px" align="left">
                        <Checkbox name="pink" />
                      </Td>
                      <Td data-label="ID" w="60px">
                        <p>{user.index}</p>
                      </Td>
                      <Td data-label="Usuário" color="yellow" align="left">
                        <p>{user.email}</p>
                      </Td>
                      <Td data-label="Data de cadastro">{user.registered}</Td>
                      <Td w="150px" align="center">
                        <Button size="medium" variant="approve">
                          Editar
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </TBody>
                <TFoot>
                  <Tr>
                    <Th align="left">
                      <Checkbox name="name" />
                    </Th>
                    <Th>ID</Th>
                    <Th>Usuário</Th>
                    <Th>Data de cadastro</Th>
                    <Th>&nbsp;</Th>
                  </Tr>
                </TFoot>
              </Table>
            </TableContainer>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
