import prisma from "@/prisma/client";
import {
  Button,
  Table,
  TableBody,
  TableColumnHeaderCell,
} from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();

  return (
    <div>
      <div className="mb-5">
        <Button>
          <Link href="issues/new">Create New Issue</Link>
        </Button>
      </div>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <TableColumnHeaderCell>Title</TableColumnHeaderCell>
            <TableColumnHeaderCell className="hidden md:table-cell">Status</TableColumnHeaderCell>
            <TableColumnHeaderCell className="hidden md:table-cell">Created At</TableColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => {
            return (
              <Table.Row key={issue.id}>
                <Table.Cell>{issue.title}
                  <div className="md:hidden">{issue.status}</div>                
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">{issue.status}</Table.Cell>
                <Table.Cell className="hidden md:table-cell">{issue.createdAt.toDateString()}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default IssuesPage;
