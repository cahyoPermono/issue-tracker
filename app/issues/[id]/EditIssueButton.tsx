import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <div>
      <Link href={`/issues/${issueId}/edit`}>
        <Button>
          <Pencil2Icon />
          Edit Issues
        </Button>
      </Link>
    </div>
  );
};

export default EditIssueButton;
