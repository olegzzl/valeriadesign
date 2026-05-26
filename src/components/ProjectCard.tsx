import { Box, Text, Image, VStack } from "@chakra-ui/react"
import type { Project } from "../data/projects"

interface ProjectCardProps {
  project: Project
  onClick: (project: Project) => void
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <Box
      cursor="pointer"
      onClick={() => onClick(project)}
      role="group"
      _hover={{ transform: "translateY(-2px)" }}
      transition="transform 0.2s"
    >
      <Box
        overflow="hidden"
        rounded="xl"
        bg="gray.50"
        mb="3"
        position="relative"
      >
        <Image
          src={project.image}
          alt={project.title}
          w="full"
          h="200px"
          objectFit="cover"
          transition="transform 0.3s"
          _groupHover={{ transform: "scale(1.03)" }}
        />
      </Box>
      <VStack align="start" gap="1">
        <Text
          fontSize="sm"
          fontWeight="semibold"
          color="gray.800"
          lineClamp={1}
        >
          {project.title}
        </Text>
        <Text fontSize="xs" color="gray.500" lineClamp={2} lineHeight="1.5">
          {project.shortDescription}
        </Text>
      </VStack>
    </Box>
  )
}
