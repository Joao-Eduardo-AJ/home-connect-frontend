"use client";
import {
  Bell,
  PencilSimple,
  PlusCircle,
  Trash
} from "@phosphor-icons/react/dist/ssr";
import {
  EmptyState,
  IconButton,
  SectionListing,
  TablePagination,
  Table,
  ModalDelete,
  ModalAsideEdit,
  ButtonModalAsideWrapper
} from "../_components";
import { Button, SearchInput, Typography } from "@/app/_components";
import { useState } from "react";
import { data } from "../_mock";

function Clients() {
  const [checkedClients, setCheckedClients] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  function toggleChecks() {
    if (checkedClients.length) {
      setCheckedClients([]);
      return;
    }
    setCheckedClients(data.map(item => item.id));
  }

  function handleCheckedClients(id: string) {
    const index = checkedClients.findIndex(check => id === check);
    if (index < 0) {
      checkedClients.push(id);
    } else {
      checkedClients.splice(index, 1);
    }
    setCheckedClients([...checkedClients]);
  }

  const checkedCount = checkedClients.length;

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
          Clients
        </Typography>
        <div className="flex gap-4">
          <SearchInput placeholder="Search by name" />
          <Button>
            <PlusCircle size={20} className="-mr-2" weight="bold" />
            Add new client
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
                  type="edit"
                  button={
                    <Button variant={{ type: "text", color: "primary" }}>
                      <PencilSimple size={20} className="-mr-2" />
                      {`Edit ( ${checkedCount} )`}
                    </Button>
                  }
                >
                  <ModalAsideEdit action={() => console.log("")} />
                </ButtonModalAsideWrapper>
                <ModalDelete
                  selected={checkedCount}
                  open={open}
                  onClose={() => setOpen(false)}
                >
                  <div className="flex flex-col gap-3">
                    <Typography variant="h6">{`Delete ${checkedCount} clients`}</Typography>
                    <Typography variant="p">{`Are you sure you want to delete ${checkedCount} clients?`}</Typography>
                  </div>
                </ModalDelete>
              </div>
            </Table.Caption>
            <thead>
              <tr className="bg-white">
                <th className="rounded-tl-lg pl-6 pr-3">
                  <input
                    type="checkbox"
                    className={`${checkedClients.length > 0 && checkedClients.length < 10 ? "indeterminate" : ""}`}
                    checked={checkedClients.length === 10}
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
              {data.map((client, index) => (
                <Table.Row key={index}>
                  <td className="pl-6 pr-3 text-center">
                    <input
                      type="checkbox"
                      checked={checkedClients.includes(client.id)}
                      onChange={() => handleCheckedClients(client.id)}
                    />
                  </td>
                  <Table.Data>{client.name}</Table.Data>
                  <Table.Data>{client.cpf}</Table.Data>
                  <Table.Data>{client.birthdate}</Table.Data>
                  <Table.Data>{client.phoneNumber}</Table.Data>
                  <Table.Data>{client.email}</Table.Data>
                  <Table.Data>{client.address}</Table.Data>
                  <td className="flex gap-2 py-0 pl-3 pr-6">
                    <ButtonModalAsideWrapper
                      type="create"
                      button={
                        <IconButton className="group" size="medium">
                          <PencilSimple
                            size={24}
                            className="transition-all duration-300 group-hover:scale-110"
                          />
                        </IconButton>
                      }
                    >
                      <ModalAsideEdit action={() => console.log("")} />
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
export default Clients;
