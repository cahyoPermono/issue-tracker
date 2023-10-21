import { Box, Card, Flex } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const loading = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex gap={"2"} className="mt-2">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="mt-4 max-w-xl prose">
        <Skeleton count={3} width="20rem" />
      </Card>
    </Box>
  );
};

export default loading;
