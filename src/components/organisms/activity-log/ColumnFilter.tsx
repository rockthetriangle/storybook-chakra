import React, { useState } from "react";
import {
  Input,
  Menu,
  IconButton,
  Portal,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { ColumnButtonProps } from "./types";
import { TbCheck, TbFilter, TbX } from "react-icons/tb";

export const ColumnFilter: React.FC<ColumnButtonProps> = ({ column }) => {
  const [state, setState] = useState(null as null | { value: any });

  if (!column.getCanFilter()) {
    return null;
  }

  const open = () =>
    setState({
      value: column.getFilterValue(),
    });

  const close = () => setState(null);

  const change = (value: any) => setState({ value });

  const clear = () => {
    column.setFilterValue(undefined);
    close();
  };

  const save = () => {
    if (!state) return;
    column.setFilterValue(state.value);
    close();
  };

  const renderFilterElement = () => {
    const FilterComponent = (column.columnDef?.meta as any)?.filterElement;

    if (!FilterComponent && !!state) {
      return (
        <Input
          borderRadius="md"
          size="sm"
          autoComplete="off"
          value={state.value}
          onChange={(e) => change(e.target.value)}
        />
      );
    }

    return (
      <FilterComponent
        value={state?.value}
        onChange={(e: any) => change(e.target.value)}
      />
    );
  };

  return (
    // <Menu.Root open={!!state} onClose={close}>
    <Menu.Root open={!!state} onInteractOutside={close}>
      <Menu.Trigger asChild>
        <IconButton
          onClick={open}
          aria-label="Options"
          variant="ghost"
          size="xs"
        >
          <TbFilter size="16" />
        </IconButton>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content p="2">
            {!!state && (
              <VStack align="flex-start">
                {renderFilterElement()}
                <HStack gap="1">
                  <IconButton
                    aria-label="Clear"
                    size="sm"
                    colorScheme="red"
                    onClick={clear}
                  >
                    <TbX size={18} />
                  </IconButton>
                  <IconButton
                    aria-label="Save"
                    size="sm"
                    onClick={save}
                    colorScheme="green"
                  >
                    <TbCheck size={18} />
                  </IconButton>
                </HStack>
              </VStack>
            )}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
