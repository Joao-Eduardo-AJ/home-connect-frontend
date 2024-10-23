"use client";
import { Button, SearchInput, Typography } from "@/app/_components";
import {
  Bell,
  PencilSimple,
  PlusCircle,
  Trash
} from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import {
  ModalDelete,
  ModalAsideEdit,
  EmptyState,
  IconButton,
  SectionListing,
  Table,
  TablePagination,
  ModalAsideCreate,
  ButtonModalAsideWrapper,
  ModalSuccess
} from "../_components";
import { data } from "../_mock";

type IModalOpened = "delete" | "success" | "";

function Users() {
  const [checkedUsers, setCheckedUsers] = useState<string[]>([]);
  const [selectedUser, setSelectedUser] = useState("");

  const [modalOpened, setModalOpened] = useState<IModalOpened>("");

  function toggleChecks() {
    if (checkedUsers.length) {
      setCheckedUsers([]);
      return;
    }
    setCheckedUsers(data.map(item => item.id));
  }

  function handleCheckedUsers(id: string) {
    const index = checkedUsers.findIndex(check => id === check);
    if (index < 0) {
      checkedUsers.push(id);
    } else {
      checkedUsers.splice(index, 1);
    }
    setCheckedUsers([...checkedUsers]);
  }

  function handleSelectedUser(id: string) {
    setSelectedUser(id);
  }

  function handleModalOpened(type: IModalOpened) {
    /*   if (!type) {
      handleSelectedUser("");
    } */
    setModalOpened(type);
  }

  const checkedCount = checkedUsers.length;

  return (
    <SectionListing>
      <IconButton className="group self-end bg-gray-scale-50">
        <Bell
          size={20}
          className="duration-500 group-hover:scale-110 group-hover:animate-bell-icon"
        />
      </IconButton>
      <div className="flex items-center justify-between">
        <Typography variant="h2" className="text-[32px]">
          Users
        </Typography>
        <div className="flex gap-4">
          <SearchInput placeholder="Search by name" />
          <ButtonModalAsideWrapper
            type="create"
            button={
              <Button>
                <PlusCircle size={20} className="-mr-2" weight="bold" />
                Add new user
              </Button>
            }
          >
            <ModalAsideCreate />
          </ButtonModalAsideWrapper>
        </div>
      </div>
      {!data.length ? (
        <EmptyState addRecord={() => console.log("")} />
      ) : (
        <div className="flex flex-col gap-4">
          <Table.Root captionOpened={!!checkedCount}>
            <Table.Caption open={!!checkedCount}>
              <Typography className="text-sm font-semibold">{`Selecionados: ${checkedCount}`}</Typography>
              <div className="flex">
                <ButtonModalAsideWrapper
                  type="edit"
                  button={
                    <Button variant={{ type: "text", color: "primary" }}>
                      <PencilSimple size={20} className="-mr-2" />
                      {`Edit ( ${checkedCount} )`}
                    </Button>
                  }
                >
                  <ModalAsideEdit action={() => handleModalOpened("success")} />
                </ButtonModalAsideWrapper>
                <Button
                  variant={{ type: "text", color: "danger" }}
                  onClick={() => handleModalOpened("delete")}
                >
                  <Trash size={20} className="-mr-2" />
                  {`Delete ( ${checkedCount} )`}
                </Button>
              </div>
            </Table.Caption>
            <thead>
              <tr className="bg-white">
                <th className="rounded-tl-lg pl-6 pr-3">
                  <input
                    type="checkbox"
                    className={`${checkedCount > 0 && checkedCount < 10 ? "indeterminate" : ""}`}
                    checked={checkedCount === 10}
                    onChange={toggleChecks}
                  />
                </th>
                <Table.Head>Name & ID</Table.Head>
                <Table.Head>CPF</Table.Head>
                <Table.Head>Birthdate</Table.Head>
                <Table.Head>Phone number</Table.Head>
                <Table.Head>Email</Table.Head>
                <Table.Head>Address</Table.Head>
                <th className="rounded-tr-lg" />
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => {
                const {
                  address,
                  birthdate,
                  cpf,
                  email,
                  id,
                  name,
                  phoneNumber
                } = user;
                return (
                  <Table.Row key={index}>
                    <td className="pl-6 pr-3 text-center">
                      <input
                        type="checkbox"
                        checked={checkedUsers.includes(id)}
                        onChange={() => handleCheckedUsers(id)}
                      />
                    </td>
                    <Table.Data>{name}</Table.Data>
                    <Table.Data>{cpf}</Table.Data>
                    <Table.Data>{birthdate}</Table.Data>
                    <Table.Data>{phoneNumber}</Table.Data>
                    <Table.Data>{email}</Table.Data>
                    <Table.Data>{address}</Table.Data>
                    <td className="flex gap-2 py-0 pl-3 pr-6">
                      <ButtonModalAsideWrapper
                        type="edit"
                        button={
                          <IconButton
                            className={!checkedCount ? "group" : ""}
                            size="medium"
                            disabled={!!checkedCount}
                          >
                            <PencilSimple
                              size={24}
                              className="transition-all duration-300 group-hover:scale-110"
                            />
                          </IconButton>
                        }
                      >
                        <ModalAsideEdit
                          action={() => handleModalOpened("success")}
                        />
                      </ButtonModalAsideWrapper>
                      <IconButton
                        className={!checkedCount ? "group" : ""}
                        size="medium"
                        onClick={() => {
                          handleSelectedUser(id);
                          handleModalOpened("delete");
                        }}
                        disabled={!!checkedCount}
                      >
                        <Trash
                          size={24}
                          className="transition-all duration-300 group-hover:scale-110"
                        />
                      </IconButton>
                    </td>
                  </Table.Row>
                );
              })}
            </tbody>
          </Table.Root>
          <TablePagination count={300} />
        </div>
      )}
      <ModalDelete
        open={modalOpened === "delete"}
        onClose={() => handleModalOpened("")}
        action={() => console.log("")}
        selected={checkedCount || selectedUser}
      />
      <ModalSuccess
        open={modalOpened === "success"}
        onClose={() => handleModalOpened("")}
        selected={checkedCount || selectedUser}
      />
    </SectionListing>
  );
}
export default Users;
