import { useState, useRef, useEffect } from "react"
import { Box, Flex } from "@chakra-ui/react"
import { Sidebar } from "./components/Sidebar"
import { Dashboard } from "./pages/Dashboard"
import { ProjectDetail } from "./pages/ProjectDetail"
import { PlaceholderPage } from "./pages/PlaceholderPage"
import type { Project } from "./data/projects"
import { ContactForm } from "./components/NewUIComponents"
import {
  DrawerRoot,
  DrawerContent,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerBackdrop,
} from "./components/ui/drawer"

type Page = "projects" | "materials" | "clients" | "orders" | "settings" | "contacts"

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("projects")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [bgColor, setBgColor] = useState("#ede8dd")

  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  function handleProjectClick(project: Project) {
    setSelectedProject(project)
  }

  function handleBack() {
    setSelectedProject(null)
  }

  function handleNavigate(page: Page) {
    setCurrentPage(page)
    setSelectedProject(null)
    onClose()
  }

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0
    }
  }, [selectedProject, currentPage])

  function renderContent() {
    if (selectedProject) {
      return <ProjectDetail project={selectedProject} onBack={handleBack} />
    }

    const goHome = () => handleNavigate("projects")

    switch (currentPage) {
      case "projects":
        return (
          <Dashboard
            onProjectClick={handleProjectClick}
            onHamburgerClick={onOpen}
            onNavigate={handleNavigate}
          />
        )
      case "materials":
        return (
          <PlaceholderPage
            title="Materials Library"
            description="Browse and manage all materials used across your design projects."
            onBack={goHome}
          />
        )
      case "clients":
        return (
          <PlaceholderPage
            title="Clients"
            description="Manage your client relationships, contacts, and project history."
            onBack={goHome}
          />
        )
      case "orders":
        return (
          <PlaceholderPage
            title="Orders"
            description="Track production orders, deliveries, and supplier communications."
            onBack={goHome}
          />
        )
      case "settings":
        return (
          <PlaceholderPage
            title="Settings"
            description="Manage your studio profile, preferences, and integrations."
            onBack={goHome}
          />
        )
      case "contacts":
        return (
          <Box p={{ base: "4", md: "8" }}>
            <ContactForm onBack={goHome} />
          </Box>
        )
    }
  }

  return (
    <Box
      h="100vh"
      w="100vw"
      overflow="hidden"
      bg={bgColor}
      transition="background-color 0.4s ease, color 0.4s ease"
      display="flex"
      flexDirection="column"
      position="relative"
    >
      {/* Background Color Switcher */}
      <Box
        position="fixed"
        right={{ base: "3", md: "6" }}
        top="50%"
        transform="translateY(-50%)"
        zIndex="99"
        bg={bgColor === "#2d4a43" ? "rgba(255, 255, 255, 0.08)" : "whiteAlpha.800"}
        backdropFilter="blur(10px)"
        px="2.5"
        py="4"
        rounded="full"
        shadow="xl"
        display={{ base: "none", md: "flex" }}
        flexDirection="column"
        gap="4"
        border="1px solid"
        borderColor={bgColor === "#2d4a43" ? "whiteAlpha.200" : "blackAlpha.100"}
        transition="all 0.3s ease"
      >
        {/* Grey Color Switcher */}
        <Box
          w="5"
          h="5"
          rounded="full"
          bg="#bfc4c9"
          cursor="pointer"
          onClick={() => setBgColor("#bfc4c9")}
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="1px solid"
          borderColor="blackAlpha.200"
          transition="all 0.2s"
          _hover={{ transform: "scale(1.2)" }}
          title="Сірий"
        >
          {bgColor === "#bfc4c9" && (
            <Box w="1.5" h="1.5" rounded="full" bg="gray.800" />
          )}
        </Box>

        {/* Beige Color Switcher */}
        <Box
          w="5"
          h="5"
          rounded="full"
          bg="#ede8dd"
          cursor="pointer"
          onClick={() => setBgColor("#ede8dd")}
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="1px solid"
          borderColor="blackAlpha.200"
          transition="all 0.2s"
          _hover={{ transform: "scale(1.2)" }}
          title="Бежевий"
        >
          {bgColor === "#ede8dd" && (
            <Box w="1.5" h="1.5" rounded="full" bg="gray.800" />
          )}
        </Box>

        {/* Noble Green Color Switcher */}
        <Box
          w="5"
          h="5"
          rounded="full"
          bg="#2d4a43"
          cursor="pointer"
          onClick={() => setBgColor("#2d4a43")}
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="1px solid"
          borderColor="whiteAlpha.350"
          transition="all 0.2s"
          _hover={{ transform: "scale(1.2)" }}
          title="Благородний зелений"
        >
          {bgColor === "#2d4a43" && (
            <Box w="1.5" h="1.5" rounded="full" bg="white" />
          )}
        </Box>
      </Box>

      <Flex
        maxW="1320px"
        w="full"
        align="stretch"
        gap="0"
        position="relative"
        h="calc(100vh - 40px)"
        mx="auto"
        px={{ base: "4", lg: "10" }}
        mt={{ base: "4", lg: "5" }}
        mb={{ base: "4", lg: "5" }}
      >
        <Box display={{ base: "none", lg: "block" }}>
          <Sidebar
            currentPage={selectedProject ? "projects" : currentPage}
            onNavigate={handleNavigate}
          />
        </Box>

        <DrawerRoot open={isOpen} placement="start" onOpenChange={(e) => setIsOpen(e.open)}>
          <DrawerBackdrop
            bg={
              bgColor === "#2d4a43"
                ? "rgba(20, 35, 31, 0.4)"
                : bgColor === "#ede8dd"
                ? "rgba(237, 232, 221, 0.4)"
                : "rgba(191, 196, 201, 0.3)"
            }
            backdropFilter="blur(16px)"
            transition="all 0.3s ease"
          />
          <DrawerContent bg="transparent" boxShadow="none" maxW="240px" border="none">
            <DrawerCloseTrigger
              color="gray.800"
              top="6"
              insetEnd="2"
              _hover={{
                bg: "blackAlpha.100",
              }}
            />
            <DrawerBody p="4">
              <Sidebar
                currentPage={selectedProject ? "projects" : currentPage}
                onNavigate={handleNavigate}
              />
            </DrawerBody>
          </DrawerContent>
        </DrawerRoot>

        <Box
          bg="white"
          rounded="2xl"
          shadow="2xl"
          flex="1"
          ml={{ base: "0", lg: "-8" }}
          position="relative"
          zIndex="1"
          overflow="hidden"
          h="full"
        >
          <Box
            ref={scrollContainerRef}
            overflowY="auto"
            h="full"
            css={{
              "&::-webkit-scrollbar": { width: "4px" },
              "&::-webkit-scrollbar-track": { background: "transparent" },
              "&::-webkit-scrollbar-thumb": {
                background: "#e5e7eb",
                borderRadius: "2px",
              },
            }}
          >
            {renderContent()}
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}
