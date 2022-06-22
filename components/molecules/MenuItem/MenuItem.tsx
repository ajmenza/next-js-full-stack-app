import { Link, Text } from "@chakra-ui/react";

type MenuItemProps = {
  text: string
  href: string
};

export const MenuItem: React.FC<MenuItemProps> = ({ text, href }) => {
  return (
    <Text color="gray.500" fontSize="18px">
      <Link href={href}>
        <a>{text}</a>
      </Link>
    </Text>
  );
};
