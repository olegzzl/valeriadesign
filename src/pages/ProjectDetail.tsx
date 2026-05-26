import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
  Icon,
  Badge,
  Image,
  SimpleGrid,
  Separator,
} from "@chakra-ui/react"
import { LuArrowLeft, LuCalendar, LuUser, LuRuler, LuTag } from "react-icons/lu"
import type { Project } from "../data/projects"
import { BlockFooter } from "../components/NewUIComponents"

interface ProjectDetailProps {
  project: Project
  onBack: () => void
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  return (
    <Box px={{ base: "5", md: "10", lg: "16" }} py="8">
      <Flex align="center" mb="6" gap="3">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          color="gray.600"
          _hover={{ bg: "orange.50", color: "orange.700" }}
          px="2"
        >
          <Icon as={LuArrowLeft} mr="1.5" />
          Back to Projects
        </Button>
      </Flex>

      <Box mb="6">
        <HStack gap="3" mb="2">
          <Badge
            bg="orange.100"
            color="orange.700"
            rounded="full"
            px="3"
            py="1"
            fontSize="xs"
            fontWeight="semibold"
          >
            {project.category}
          </Badge>
          <Badge
            bg="gray.100"
            color="gray.600"
            rounded="full"
            px="3"
            py="1"
            fontSize="xs"
            fontWeight="medium"
          >
            {project.year}
          </Badge>
        </HStack>
        <Heading as="h1" fontSize="2xl" fontWeight="bold" color="gray.800" mb="2">
          {project.title}
        </Heading>
        <Text fontSize="md" color="gray.500" fontWeight="medium">
          {project.shortDescription}
        </Text>
      </Box>

      <Box
        rounded="2xl"
        overflow="hidden"
        mb="8"
        bg="gray.50"
        aspectRatio={{ base: "4/3", md: "16/9" }}
        maxH={{ base: "260px", md: "480px" }}
        w="full"
        position="relative"
      >
        <Image
          src={project.image}
          alt={project.title}
          w="full"
          h="full"
          objectFit="cover"
        />
      </Box>

      <SimpleGrid columns={2} gap="6" mb="8">
        <Box>
          <Text
            fontSize="xs"
            fontWeight="semibold"
            color="gray.400"
            textTransform="uppercase"
            letterSpacing="wider"
            mb="4"
          >
            Project Details
          </Text>
          <VStack align="start" gap="3">
            <HStack gap="3">
              <Icon as={LuUser} boxSize="4" color="orange.600" />
              <VStack align="start" gap="0">
                <Text fontSize="xs" color="gray.400" fontWeight="medium">
                  Client
                </Text>
                <Text fontSize="sm" color="gray.700" fontWeight="medium">
                  {project.client}
                </Text>
              </VStack>
            </HStack>
            <HStack gap="3">
              <Icon as={LuCalendar} boxSize="4" color="orange.600" />
              <VStack align="start" gap="0">
                <Text fontSize="xs" color="gray.400" fontWeight="medium">
                  Year
                </Text>
                <Text fontSize="sm" color="gray.700" fontWeight="medium">
                  {project.year}
                </Text>
              </VStack>
            </HStack>
            <HStack gap="3">
              <Icon as={LuRuler} boxSize="4" color="orange.600" />
              <VStack align="start" gap="0">
                <Text fontSize="xs" color="gray.400" fontWeight="medium">
                  Dimensions
                </Text>
                <Text fontSize="sm" color="gray.700" fontWeight="medium">
                  {project.dimensions}
                </Text>
              </VStack>
            </HStack>
            <HStack gap="3" align="flex-start">
              <Icon as={LuTag} boxSize="4" color="orange.600" mt="0.5" />
              <VStack align="start" gap="0">
                <Text fontSize="xs" color="gray.400" fontWeight="medium">
                  Materials
                </Text>
                {project.materials.map((m) => (
                  <Text key={m} fontSize="sm" color="gray.700" fontWeight="medium">
                    {m}
                  </Text>
                ))}
              </VStack>
            </HStack>
          </VStack>
        </Box>

        <Box>
          <Text
            fontSize="xs"
            fontWeight="semibold"
            color="gray.400"
            textTransform="uppercase"
            letterSpacing="wider"
            mb="4"
          >
            Overview
          </Text>
          <Text fontSize="sm" color="gray.600" lineHeight="tall" mb="4">
            {project.fullDescription}
          </Text>
        </Box>
      </SimpleGrid>

      <Separator mb="8" borderColor="gray.100" />

      <SimpleGrid columns={2} gap="6" mb="8">
        <Box
          bg="orange.50"
          rounded="xl"
          p="5"
          borderWidth="1px"
          borderColor="orange.100"
        >
          <Text
            fontSize="xs"
            fontWeight="semibold"
            color="orange.600"
            textTransform="uppercase"
            letterSpacing="wider"
            mb="3"
          >
            The Challenge
          </Text>
          <Text fontSize="sm" color="gray.700" lineHeight="tall">
            {project.challenge}
          </Text>
        </Box>
        <Box
          bg="gray.50"
          rounded="xl"
          p="5"
          borderWidth="1px"
          borderColor="gray.100"
        >
          <Text
            fontSize="xs"
            fontWeight="semibold"
            color="gray.500"
            textTransform="uppercase"
            letterSpacing="wider"
            mb="3"
          >
            The Solution
          </Text>
          <Text fontSize="sm" color="gray.700" lineHeight="tall">
            {project.solution}
          </Text>
        </Box>
      </SimpleGrid>

      {project.detailImages.length > 1 && (
        <>
          <Text
            fontSize="xs"
            fontWeight="semibold"
            color="gray.400"
            textTransform="uppercase"
            letterSpacing="wider"
            mb="4"
          >
            Gallery
          </Text>
          <SimpleGrid columns={2} gap="4">
            {project.detailImages.map((img, i) => (
              <Box key={i} rounded="xl" overflow="hidden" bg="gray.50" h="200px">
                <Image
                  src={img}
                  alt={`${project.title} view ${i + 1}`}
                  w="full"
                  h="full"
                  objectFit="cover"
                />
              </Box>
            ))}
          </SimpleGrid>
        </>
      )}
      <BlockFooter />
    </Box>
  )
}
