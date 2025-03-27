import { useBreakpointValue, Flex } from "@chakra-ui/react";
import SearchInput from "@/components/molecules/SearchInput";

export const Header = ({ showTabs }: { showTabs?: boolean }) => {
  const headerMarginLeft = useBreakpointValue({ base: 10, md: 12 });
  const headerWidth = useBreakpointValue({
    base: "calc(100% - 34px)",
    md: "calc(100% - 48px)",
  });

  return (
    <Flex
      as="header"
      position="fixed"
      width={headerWidth}
      marginLeft={headerMarginLeft}
      top={0}
      zIndex={10}
      padding={4}
      alignItems="center"
      transition="all 0.3s"
    >
      <SearchInput showTabs={showTabs} />
    </Flex>
  );
};
