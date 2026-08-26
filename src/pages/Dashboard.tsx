import {
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  SimpleGrid,
  IconButton,
} from "@chakra-ui/react"
import { LuMenu, LuPhone, LuMessageSquare } from "react-icons/lu"
import { projects } from "../data/projects"
import { ProjectCard } from "../components/ProjectCard"
import type { Project } from "../data/projects"
import { BlockFooter } from "../components/NewUIComponents"

interface DashboardProps {
  onProjectClick: (project: Project) => void
  onHamburgerClick?: () => void
  onNavigate?: (page: string) => void
}

export function Dashboard({ onProjectClick, onHamburgerClick, onNavigate }: DashboardProps) {
  return (
    <Box position="relative">
      {/* Sticky Header inside the scrollable container */}
      <Box 
        position="sticky" 
        top="0" 
        bg="white" 
        zIndex="10" 
        pt="8"
        px="8"
        pb="4"
        _after={{
          content: '""',
          display: "block",
          height: "40px",
          width: "100%",
          position: "absolute",
          bottom: "-40px",
          left: 0,
          background: "linear-gradient(to bottom, white, transparent)",
          pointerEvents: "none"
        }}
      >
        <Flex align="center" justify="space-between">
          <HStack gap="3">
            <IconButton 
              aria-label="Menu" 
              variant="ghost" 
              onClick={onHamburgerClick}
              display={{ base: "flex", lg: "none" }}
            >
              <LuMenu />
            </IconButton>
            <Box>
              <Heading
                as="h1"
                fontSize={{ base: "xl", md: "3xl" }}
                fontWeight="bold"
                color="gray.800"
                lineHeight="shorter"
              >
                Oleg Web Studio
              </Heading>
              <Text fontSize={{ base: "xs", md: "xl" }} fontWeight="medium" color="gray.600" mt="0.5">
                Сайты и интерфейсы
              </Text>
            </Box>
          </HStack>

          {/* Elegant minimalist icons instead of text buttons for both PC & Mobile */}
          <HStack gap="2">
            <IconButton
              aria-label="Call"
              variant="outline"
              size="md"
              rounded="full"
              borderColor="gray.200"
              color="gray.600"
              _hover={{ bg: "orange.50", color: "orange.700", borderColor: "orange.200" }}
              as="a"
              href="tel:+380501234567"
            >
              <LuPhone size="16" />
            </IconButton>
            <IconButton
              aria-label="Message"
              variant="outline"
              size="md"
              rounded="full"
              borderColor="gray.200"
              color="gray.600"
              _hover={{ bg: "orange.50", color: "orange.700", borderColor: "orange.200" }}
              onClick={() => onNavigate?.("contacts")}
            >
              <LuMessageSquare size="16" />
            </IconButton>
          </HStack>
        </Flex>
      </Box>

      {/* Content Area */}
      <Box px="8" pb="8" mt="4">
        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap="6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={onProjectClick}
            />
          ))}
        </SimpleGrid>
        <BlockFooter />
      </Box>
    </Box>
  )
}
