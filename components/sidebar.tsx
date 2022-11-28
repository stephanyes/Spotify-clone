import NextImage from "next/image";
import NextLink from "next/link";
import {
  List,
  Box,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";

import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

const navMenu = [
  { name: "Home", icon: MdHome, route: "/" },
  { name: "Search", icon: MdSearch, route: "/search" },
  { name: "Your Library", icon: MdLibraryMusic, route: "/library" },
];

const musicMenu = [
  { name: "Create playlist", icon: MdPlaylistAdd, route: "/" },
  { name: "Favorites", icon: MdFavorite, route: "/favorites" },
];

const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      {/* This first box is the one containing everything in the side bar, 
        it needs the height 100% of its container if not scroll bar ONLY FOR PLAYLIST SECTION wont work otherwise */}
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/logo.jpg" height={60} width={120} alt="logo" />
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  {/* The reason we are using NextLink is because if we use a regular anchor tag it will try and look for something in the server */}
                  {/* and we want this to be client side rendering, if not the music will stop playing */}
                  {/* if we have a custom component inside the NextLink tag it will be passing what we setup in href to the child component */}
                  {/* <NextLink href={menu.route} passHref> */}
                  <LinkOverlay href={menu.route}>
                    <ListIcon as={menu.icon} color="white" marginRight="20px" />
                    {menu.name}
                  </LinkOverlay>
                  {/* </NextLink> */}
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box marginTop="20px">
          <List spacing={2}>
            {musicMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <LinkOverlay href={menu.route}>
                    <ListIcon as={menu.icon} color="white" marginRight="20px" />
                    {menu.name}
                  </LinkOverlay>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider color="gray.800" />
        <Box height="66%" overflowY="auto" paddingY="20px">
          <List spacing={2}>
            {playlists.map((playlist) => (
              <ListItem paddingX="20px" key={playlist}>
                <LinkBox>
                  <LinkOverlay href="/">{playlist}</LinkOverlay>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
