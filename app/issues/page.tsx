import prisma from "@/prisma/client";
import {
  Button,
  Table,
  TableBody,
  TableColumnHeaderCell,
} from "@radix-ui/themes";
// import Link from "next/link";
import Link from "../components/Link";
import React from "react";
import IssueStatusBadge from "../components/IssueStatusBadge";
import IssueAction from "./IssueAction";
import { Issue, Status } from "@prisma/client";
import NextLink from "next/link";
import { ArrowUpIcon } from "@radix-ui/react-icons";

const IssuesPage = async ({
  searchParams,
}: {
  searchParams: { status: Status; orderBy: keyof Issue };
}) => {
  const statusess = Object.values(Status);
  const status = statusess.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const columHeaders: {
    label: string;
    value: keyof Issue;
    className?: string;
  }[] = [
    {
      label: "Issue",
      value: "title",
    },
    {
      label: "Status",
      value: "status",
      className: "hidden md:table-cell",
    },
    {
      label: "Created At",
      value: "createdAt",
      className: "hidden md:table-cell",
    },
  ];

  const orderBy = columHeaders
    .map((e) => e.value)
    .includes(searchParams.orderBy)
    ? {
        [searchParams.orderBy]: "asc",
      }
    : undefined;

  const issues = await prisma.issue.findMany({
    where: {
      status: status,
    },
    orderBy,
  });

  return (
    <div>
      <IssueAction />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            {columHeaders.map((e) => {
              return (
                <TableColumnHeaderCell key={e.value}>
                  <NextLink
                    href={{
                      query: { ...searchParams, orderBy: e.value },
                    }}
                  >
                    {e.label}
                  </NextLink>
                  {e.value === searchParams.orderBy && (
                    <ArrowUpIcon className="inline" />
                  )}
                </TableColumnHeaderCell>
              );
            })}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => {
            return (
              <Table.Row key={issue.id}>
                <Table.Cell>
                  <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                  <div className="md:hidden">
                    <IssueStatusBadge status={issue.status} />
                  </div>
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  <IssueStatusBadge status={issue.status} />
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  {issue.createdAt.toDateString()}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export const dynamic = "force-dynamic";
export default IssuesPage;
