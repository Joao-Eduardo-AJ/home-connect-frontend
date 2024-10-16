import { Button, Input } from "@/app/_components";

interface IModalAsideEdit {
  action: () => void;
}

export function ModalAsideEdit({action}: IModalAsideEdit) {
  return (
    <div className="relative h-full">
      <div className="h-[calc(100%-105px)] overflow-auto py-10">
        <div className="bg-tertiary p-4">
          <Input label="Name" />
          <Input label="ID" />
          <Input label="CPF" />
          <Input label="Birthdate" />
          <Input label="Phone number" />
          <Input label="Email" />
          <Input label="City" />
          <Input label="State" />
        </div>
        <div className="bg-tertiary p-4">
          <Input label="Name" />
          <Input label="ID" />
          <Input label="CPF" />
          <Input label="Birthdate" />
          <Input label="Phone number" />
          <Input label="Email" />
          <Input label="City" />
          <Input label="State" />
        </div>
        <div className="bg-tertiary p-4">
          <Input label="Name" />
          <Input label="ID" />
          <Input label="CPF" />
          <Input label="Birthdate" />
          <Input label="Phone number" />
          <Input label="Email" />
          <Input label="City" />
          <Input label="State" />
        </div>
        <div className="user-client-edit bg-tertiary p-4">
          <Input label="Name" />
          <Input label="ID" />
          <Input label="CPF" />
          <Input label="Birthdate" />
          <Input label="Phone number" />
          <Input label="Email" />
          <Input label="City" />
          <Input label="State" />
        </div>
        <div className="user-client-edit bg-tertiary p-4">
          <Input label="Name" />
          <Input label="ID" />
          <Input label="CPF" />
          <Input label="Birthdate" />
          <Input label="Phone number" />
          <Input label="Email" />
          <Input label="City" />
          <Input label="State" />
        </div>
        <div className="user-client-edit bg-tertiary p-4">
          <Input label="Name" />
          <Input label="ID" />
          <Input label="CPF" />
          <Input label="Birthdate" />
          <Input label="Phone number" />
          <Input label="Email" />
          <Input label="City" />
          <Input label="State" />
        </div>
      </div>
      <div className="absolute bottom-14 w-full">
        <Button onClick={action}>Save</Button>
      </div>
    </div>
  );
}
