import {
  Drawer,
  DrawerBody,
  // DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  // Input,
  useDisclosure,
} from '@chakra-ui/react'
import   React from 'react';
import { SettingsIcon,StarIcon,ExternalLinkIcon,SearchIcon} from '@chakra-ui/icons'


function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  
  let link = [
  {icon: "🏠", name:"Home", id:1},
  {icon:<ExternalLinkIcon />, name:"Trending", id:2},
  {icon:<SearchIcon />, name:"Explore", id:3},
  {icon:<StarIcon />, name:"Favourites", id:4},
  {icon:<SettingsIcon />, name:"Settings", id:5}


]
    return (
      <>
         <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Logo</DrawerHeader>
          <DrawerBody display="flex" className='flexBox'>
            {/* <Input placeholder='Type here...' /> */}
           
            <div> 
            { 
              link.map((ele)=>(<div className='ele' key={ele.id}><span>{ele.icon}</span><span>{ele.name}</span></div>))
            }
            </div>
          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
      </>
    )
  }


 
  
  export default DrawerExample;