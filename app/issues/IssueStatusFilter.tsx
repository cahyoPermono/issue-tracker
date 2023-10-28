"use client";
import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";

const statuses: { label: string; status?: Status }[] = [
  {
    label: "All",
  },
  {
    label: "Open",
    status: "OPEN",
  },
  {
    label: "Inprogress",
    status: "IN_PROGRESS",
  },
  {
    label: "Close",
    status: "CLOSE",
  },
];
const IssueStatusFilter = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Filter by Status.." />
      <Select.Content>
        {statuses.map((item) => {
          return (
            <Select.Item key={item.label} value={item.status || "ALL"}>
              {item.label}
            </Select.Item>
          );
        })}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
