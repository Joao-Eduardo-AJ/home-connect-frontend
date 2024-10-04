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
  ButtonModalAlertWrapper,
  ButtonModalAsideEdit,
  EmptyState,
  IconButton,
  SectionListing,
  Table,
  TablePagination
} from "../_components";
import { ButtonModalAsideWrapper } from "../_components/button-modal-aside-wrapper";
import { data } from "../_mock";

function Users() {
  const [checkedUsers, setCheckedUsers] = useState<string[]>([]);

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
        <Typography variant="h2">Users</Typography>
        <div className="flex gap-4">
          <SearchInput placeholder="Search by name" />
          <Button>
            <PlusCircle size={20} className="-mr-2" weight="bold" />
            Add new user
          </Button>
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
                  asideTitle="Edit user"
                  button={
                    <Button variant={{ type: "text", color: "primary" }}>
                      <PencilSimple size={20} className="-mr-2" />
                      {`Edit ( ${checkedCount} )`}
                    </Button>
                  }
                >
                  <ButtonModalAsideEdit />
                </ButtonModalAsideWrapper>
                <ButtonModalAlertWrapper
                  variant={{ type: "danger" }}
                  button={
                    <Button variant={{ type: "text", color: "danger" }}>
                      <Trash size={20} className="-mr-2" />
                      {`Delete  ( ${checkedCount} )`}
                    </Button>
                  }
                >
                  <div className="flex flex-col gap-3">
                    <Typography variant="h6">{`Delete ${checkedCount} users`}</Typography>
                    <Typography variant="p">{`Are you sure you want to delete ${checkedCount} users?`}</Typography>
                  </div>
                </ButtonModalAlertWrapper>
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
              {data.map((user, index) => (
                <Table.Row key={index}>
                  <td className="pl-6 pr-3 text-center">
                    <input
                      type="checkbox"
                      checked={checkedUsers.includes(user.id)}
                      onChange={() => handleCheckedUsers(user.id)}
                    />
                  </td>
                  <Table.Data>{user.name}</Table.Data>
                  <Table.Data>{user.cpf}</Table.Data>
                  <Table.Data>{user.birthdate}</Table.Data>
                  <Table.Data>{user.phoneNumber}</Table.Data>
                  <Table.Data>{user.email}</Table.Data>
                  <Table.Data>{user.address}</Table.Data>
                  <td className="flex gap-2 py-0 pl-3 pr-6">
                    <ButtonModalAsideWrapper
                      asideTitle="Edit user"
                      button={
                        <IconButton className="group" size="medium">
                          <PencilSimple
                            size={24}
                            className="transition-all duration-300 group-hover:scale-110"
                          />
                        </IconButton>
                      }
                    >
                      <ButtonModalAsideEdit />
                    </ButtonModalAsideWrapper>
                    <IconButton className="group" size="medium">
                      <Trash
                        size={24}
                        className="transition-all duration-300 group-hover:scale-110"
                      />
                    </IconButton>
                  </td>
                </Table.Row>
              ))}
            </tbody>
          </Table.Root>
          <TablePagination count={300} />
        </div>
      )}
    </SectionListing>
  );
}
export default Users;
