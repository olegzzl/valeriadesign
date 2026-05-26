import { Box, Heading, Text, VStack, Icon, Button } from "@chakra-ui/react"
import { LuConstruction, LuArrowLeft } from "react-icons/lu"
import { BlockFooter } from "../components/NewUIComponents"

interface PlaceholderPageProps {
  title: string
  description: string
  onBack?: () => void
}

export function PlaceholderPage({ title, description, onBack }: PlaceholderPageProps) {
  return (
    <Box p={{ base: "6", md: "8" }}>
      {onBack && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          color="gray.600"
          _hover={{ bg: "orange.50", color: "orange.700" }}
          mb="4"
          px="0"
          display="flex"
          alignItems="center"
        >
          <Icon as={LuArrowLeft} mr="1.5" />
          Назад до проєктів
        </Button>
      )}
      <Heading
        as="h1"
        fontSize={{ base: "xl", md: "2xl" }}
        fontWeight="bold"
        color="gray.800"
        mb="2"
      >
        {title}
      </Heading>
      <Text fontSize={{ base: "sm", md: "md" }} color="gray.500" mb={{ base: "6", md: "10" }}>
        {description}
      </Text>
      <VStack
        bg="gray.50"
        rounded="2xl"
        p={{ base: "8", md: "16" }}
        gap="4"
        borderWidth="1px"
        borderColor="gray.100"
        borderStyle="dashed"
      >
        <Icon as={LuConstruction} boxSize={{ base: "8", md: "10" }} color="gray.300" />
        <Text fontSize={{ base: "sm", md: "md" }} color="gray.400" fontWeight="medium">
          Цей розділ скоро з'явиться
        </Text>
        <Text fontSize={{ base: "xs", md: "sm" }} color="gray.400" textAlign="center" maxW="sm">
          Зараз ми розробляємо цю сторінку. Будь ласка, завітайте сюди пізніше.
        </Text>
      </VStack>
      <BlockFooter />
    </Box>
  )
}
