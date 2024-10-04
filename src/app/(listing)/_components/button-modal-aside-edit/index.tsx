import { Input } from "@/app/_components";

interface IButtonModalAsideEdit {}

export function ButtonModalAsideEdit({}: IButtonModalAsideEdit) {
  return (
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
  );
}
