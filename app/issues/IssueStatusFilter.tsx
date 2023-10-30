"use client";
import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";

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
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <Select.Root
      defaultValue={
        searchParams.get("status") ? searchParams.get("status")! : "ALL"
      }
      onValueChange={(status) => {
        const params = new URLSearchParams();
        if (status != "ALL") params.append("status", status);
        if (searchParams.get("orderBy"))
          params.append("orderBy", searchParams.get("orderBy")!);
        const query = params.size ? "?" + params.toString() : "";
        router.push(`/issues${query}`);
      }}
    >
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
