"use client";
import { User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import axios from "axios";
import { useEffect, useState } from "react";

const AsigneeSelect = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get<User[]>("/api/users");
      setUsers(data);
    };

    fetchUsers();
  }, []);
  return (
    <Select.Root>
      <Select.Trigger placeholder="Asign to.." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestion</Select.Label>
          {users.map((e) => (
            <Select.Item key={e.id} value={e.id}>
              {e.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AsigneeSelect;
