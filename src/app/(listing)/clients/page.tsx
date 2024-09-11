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
  MainListing,
  TablePagination,
  Table,
  TableCaption
} from "../_components";
import { Button, SearchInput, Typography } from "@/app/_components";
import { useState } from "react";
import { data } from "../_mock";

function Clients() {
  const [checkedClients, setCheckedClients] = useState<string[]>([]);

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

  return (
    <MainListing>
      <IconButton className="group self-end bg-gray-scale-50">
        <Bell
          size={20}
          className="duration-500 group-hover:scale-110 group-hover:animate-bell-icon"
        />
      </IconButton>
      <div className="flex items-center justify-between">
        <Typography variant="h2">Clients</Typography>
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
        <Table.Root captionOpened={!!checkedClients.length}>
          <TableCaption records={checkedClients} />
          <thead>
            <tr className="bg-white">
              <th className="rounded-tl-lg pl-6 pr-3">
                <input
                  type="checkbox"
                  className={`${checkedClients.length > 0 && checkedClients.length < 10 ? "indeterminate" : ""}`}
                  checked={checkedClients.length === 10}
                  onClick={toggleChecks}
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
                    checked={checkedClients.includes(user.id)}
                    onChange={() => handleCheckedClients(user.id)}
                  />
                </td>
                <Table.Data>{user.name}</Table.Data>
                <Table.Data>{user.cpf}</Table.Data>
                <Table.Data>{user.birthdate}</Table.Data>
                <Table.Data>{user.phoneNumber}</Table.Data>
                <Table.Data>{user.email}</Table.Data>
                <Table.Data>{user.address}</Table.Data>
                <td className="flex gap-2 py-0 pl-3 pr-6">
                  <IconButton className="group">
                    <PencilSimple
                      size={24}
                      className="transition-all duration-300 group-hover:scale-110"
                    />
                  </IconButton>
                  <IconButton className="group">
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
      )}
      <TablePagination count={300} />
    </MainListing>
  );
}
export default Clients;
