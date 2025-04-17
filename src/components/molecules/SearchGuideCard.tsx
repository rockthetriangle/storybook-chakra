import { Image, Text, VStack } from "@chakra-ui/react";
import { useColorModeValue } from "./color-mode";

interface InfoCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

export const SearchGuideCard = ({
  iconSrc,
  title,
  description,
}: InfoCardProps) => {
  const titleColor = useColorModeValue("gray.800", "gray.100");
  const descriptionColor = useColorModeValue("gray.600", "gray.300");

  return (
    <VStack align="center" gap={2} textAlign="center" p={4} maxW="sm" mx="auto">
      <Image src={iconSrc} alt={title} objectFit="cover" maxHeight="200px" />

      <Text fontSize="xl" fontWeight="semibold" color={titleColor}>
        {title}
      </Text>

      <Text fontSize="md" color={descriptionColor}>
        {description}
      </Text>
    </VStack>
  );
};
