import { Box, Image } from "@chakra-ui/react";
import ICONS from "../../icons/icons";

interface IconProps {
  name: keyof typeof ICONS;
  size?: string;
  color?: string;
}

const Icon = ({ name, size = "24px", color = "currentColor" }: IconProps) => {
  const iconSrc = ICONS[name];

  if (!iconSrc) return null;

  return (
    <Box width={size} height={size} display="flex" alignItems="center" justifyContent="center">
      <Image src={iconSrc} alt={`${name} icon`} boxSize={size} filter={color === "white" ? "invert(1)" : "none"} />
    </Box>
  );
};

export default Icon;
