import { useColorModeValue } from "@/components/molecules/color-mode";
import {
  Button,
  CloseButton,
  Dialog,
  Portal,
  useToken,
} from "@chakra-ui/react";

interface ActionConfirmationProps {
  title: string;
  message: string;
  onConfirm: () => void;
  button: React.ReactNode;
}

export const ActionConfirmation = ({
  title,
  message,
  onConfirm,
  button,
}: ActionConfirmationProps) => {
  const [gray50, gray900] = useToken("colors", ["gray.50", "gray.900"]);
  const textColor = useColorModeValue(gray900, gray50);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{button}</Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title color={textColor}>{title}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body color={textColor}>
              <p>{message}</p>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button onClick={onConfirm}>Confirm</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
