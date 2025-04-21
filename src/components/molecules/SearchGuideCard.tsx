import { Image, Text, VStack } from "@chakra-ui/react";
import { useColorModeValue } from "./color-mode";
import { motion } from "framer-motion";

const MotionVStack = motion(VStack);

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
    <MotionVStack
      align="center"
      gap={2}
      textAlign="center"
      p={4}
      maxW="sm"
      mx="auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      cursor="pointer"
    >
      <Image src={iconSrc} alt={title} objectFit="cover" maxHeight="200px" />

      <Text fontSize="xl" fontWeight="semibold" color={titleColor}>
        {title}
      </Text>

      <Text fontSize="md" color={descriptionColor}>
        {description}
      </Text>
    </MotionVStack>
  );
};
