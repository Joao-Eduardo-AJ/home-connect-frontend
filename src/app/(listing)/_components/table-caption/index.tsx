import { Button, Typography } from "@/app/_components";
import { Table } from "../";
import { PencilSimple, Trash } from "@phosphor-icons/react/dist/ssr";

interface ITableCaption {
  records: string[];
}

export const TableCaption = ({ records }: ITableCaption) => (
  <Table.Caption open={!!records.length}>
    <Typography className="text-sm font-semibold">{`${records.length}`}</Typography>
    <div className="flex">
      <Button variant={{ type: "text", color: "primary" }}>
        <PencilSimple size={20} className="-mr-2" />
        {`Edit ( ${records.length} )`}
      </Button>
      <Button variant={{ type: "text", color: "danger" }}>
        <Trash size={20} className="-mr-2" />
        {`Delete ( ${records.length} )`}
      </Button>
    </div>
  </Table.Caption>
);
