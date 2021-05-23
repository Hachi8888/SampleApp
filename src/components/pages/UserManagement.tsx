/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useCallback, useEffect, VFC } from "react";
import {
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Spinner,
  Wrap,
  WrapItem,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Stack,
  FormControl,
  Input
} from "@chakra-ui/react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();

  useEffect(() => getUsers(), []);
  const onClickUser = useCallback(() => onOpen(), []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClickUser={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>ユーザー詳細</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack>
                <FormControl>名前</FormControl>
                <Input value="はち" isReadOnly />
              </Stack>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
});
