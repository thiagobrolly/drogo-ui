import { useCallback, useEffect, useState } from 'react';
import {
  Flex,
  Spinner,
  TableContainer,
  Table,
  THead,
  Tr,
  Th,
  TBody,
  Td,
  Pagination,
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

const LIMIT_PER_PAGE = 10;

export function PaginationPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState('');
  const [totalCount, setTotalCount] = useState(0);

  const fetchUsers = useCallback(async () => {
    setIsloading(true);
    await api
      .get(`/users?_page=${page}&_limit=${LIMIT_PER_PAGE}`)
      .then((res) => {
        setUsers(res.data);
        setTotalCount(Number(res.headers['x-total-count']));
      })
      .catch((err) => setError(err.message));
    setIsloading(false);
  }, [page]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <Flex mx="auto" mt="50px" direction="column" maxW="960px" gap="30px">
      <Flex justify="center">
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <div>{error}</div>
        ) : (
          <TableContainer screen={[600, 480]}>
            <Table role="table" width="100%">
              <THead>
                <Tr>
                  <Th>ID</Th>
                  <Th align="left">Usuário</Th>
                  <Th>Data de cadastro</Th>
                </Tr>
              </THead>
              <TBody>
                {users.map((user) => (
                  <Tr key={user.id}>
                    <Td data-label="ID" w="60px">
                      <p>{user.index}</p>
                    </Td>
                    <Td data-label="Usuário" color="yellow" align="left">
                      <p>{user.email}</p>
                    </Td>
                    <Td data-label="Data de cadastro">{user.registered}</Td>
                  </Tr>
                ))}
              </TBody>
            </Table>
          </TableContainer>
        )}
      </Flex>

      <Pagination
        registersPerPage={LIMIT_PER_PAGE}
        totalCountOfRegisters={totalCount}
        currentPage={page}
        onPageChange={setPage}
        isDisabled={isLoading}
        text="of"
      />
    </Flex>
  );
}
