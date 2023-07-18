import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  seletedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectedPlatform, seletedPlatform }: Props) => {
  const { data, error, isLoading } = usePlatforms();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {seletedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectedPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
