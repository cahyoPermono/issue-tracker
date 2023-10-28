"use client";
import { Skeleton } from "@/app/components";
import { Issue, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const AsigneeSelect = ({ issue }: { issue: Issue }) => {
  const { data: users, error, isLoading } = useUsers();

  if (isLoading) return <Skeleton height="2rem" />;

  if (error) return null;

  const assignedTo = (userId: string) => {
    axios.patch("/api/issues/" + issue.id, {
      assignedTo: userId === "0" ? null : userId,
    });
  };

  return (
    <Select.Root
      defaultValue={issue.assignedTo || "0"}
      onValueChange={assignedTo}
    >
      <Select.Trigger placeholder="Asign to.." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestion</Select.Label>
          <Select.Item value="0">Unsigned</Select.Item>
          {users?.map((e) => (
            <Select.Item key={e.id} value={e.id}>
              {e.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

const useUsers = () =>
  useQuery({
    queryKey: ["asignee"],
    queryFn: () => axios.get<User[]>("/api/users").then((res) => res.data),
    staleTime: 60 * 1000, //60s
    retry: 3,
  });

export default AsigneeSelect;
