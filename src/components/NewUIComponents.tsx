// src/components/NewUIComponents.tsx
import {
  Flex,
  Box,
  IconButton,
  Text,
  Button,
  Input,
  Textarea,
  Link,
  HStack,
} from "@chakra-ui/react"
import { Field } from "./ui/field"
import { LuPhone, LuMessageSquare, LuMenu, LuArrowLeft, LuInstagram } from "react-icons/lu"
import { FaTelegram } from "react-icons/fa"

// Header component – shows title, phone/message buttons, and hamburger menu for mobile
export function Header({ onHamburgerClick }: { onHamburgerClick: () => void }) {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      height="60px"
      px="4"
      bg="white"
      boxShadow="md"
      position="sticky"
      top="0"
      zIndex="10"
    >
      <IconButton
        aria-label="Menu"
        variant="ghost"
        onClick={onHamburgerClick}
        display={{ base: "inline-flex", lg: "none" }}
      >
        <LuMenu />
      </IconButton>
      <Text fontSize="lg" fontWeight="bold" flex="1" textAlign="center">
        Oleg Web Design
      </Text>
      <Box display={{ base: "none", lg: "flex" }} gap="2">
        <Button variant="outline" size="sm">
          <LuPhone /> Зателефонувати
        </Button>
        <Button variant="outline" size="sm">
          <LuMessageSquare /> Надіслати повідомлення
        </Button>
      </Box>
    </Flex>
  )
}

// Footer component – simple copyright bar
export function Footer({ textColor = "gray.600" }: { textColor?: string }) {
  return (
    <Box as="footer" bg="transparent" py="4" textAlign="center" mt="8">
      <Text fontSize="sm" color={textColor} transition="color 0.4s ease">
        © 2026 Oleg Web Design. Усі права захищені.
      </Text>
    </Box>
  )
}

// Contact form – appears when user clicks “Надіслати повідомлення”
export function ContactForm({ onBack }: { onBack?: () => void }) {
  return (
    <Box maxW="lg" mx="auto" mt="4" p={{ base: "4", md: "0" }}>
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
          <LuArrowLeft style={{ marginRight: "6px" }} />
          Назад до проєктів
        </Button>
      )}
      <Box bg="white" p={{ base: "5", md: "6" }} rounded="xl" shadow="md" borderWidth="1px" borderColor="gray.100">
        <Box mb="4">
          <Field label="Ім'я">
            <Input placeholder="Ваше ім'я" size="sm" />
          </Field>
        </Box>
        <Box mb="4">
          <Field label="Email">
            <Input type="email" placeholder="example@domain.com" size="sm" />
          </Field>
        </Box>
        <Box mb="4">
          <Field label="Повідомлення">
            <Textarea placeholder="Ваше повідомлення" rows={4} size="sm" />
          </Field>
        </Box>
        <Button bg="gray.800" color="white" _hover={{ bg: "gray.700" }} width="full" size="sm">
          Надіслати
        </Button>
      </Box>
      <BlockFooter />
    </Box>
  )
}

// Reusable footer rendered inside the main content block (white card) at the bottom
export function BlockFooter() {
  return (
    <Box
      as="footer"
      mt="16"
      pt="8"
      pb="6"
      borderTop="1px solid"
      borderColor="gray.100"
      bg="transparent"
      w="full"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        gap="4"
      >
        {/* Left Side: Copyright and Credit */}
        <Box textAlign={{ base: "center", md: "left" }}>
          <Text fontSize="xs" color="gray.400" fontWeight="medium">
            © 2026 Oleg Web Design. Усі права захищені.
          </Text>
          <Text fontSize="xs" color="gray.400" mt="1" fontWeight="medium">
            design by{" "}
            <Link
              href="https://www.instagram.com/olegzzl/"
              target="_blank"
              rel="noopener noreferrer"
              color="orange.600"
              fontWeight="semibold"
              _hover={{ color: "orange.700", textDecoration: "underline" }}
            >
              olegzzl
            </Link>
          </Text>
        </Box>

        {/* Right Side: Contact info and Social Media Icons */}
        <Flex
          align="center"
          direction={{ base: "column", sm: "row" }}
          gap={{ base: "3", sm: "4" }}
        >
          {/* Phone Link */}
          <Link
            href="tel:+380501234567"
            display="flex"
            alignItems="center"
            gap="1.5"
            fontSize="xs"
            color="gray.500"
            fontWeight="semibold"
            _hover={{ color: "orange.700" }}
          >
            <LuPhone size="14" />
            +38 (050) 123-45-67
          </Link>

          {/* Social Icons */}
          <HStack gap="2">
            <IconButton
              aria-label="Instagram"
              variant="outline"
              size="xs"
              rounded="full"
              borderColor="gray.200"
              color="gray.500"
              _hover={{ bg: "orange.50", color: "orange.700", borderColor: "orange.200" }}
              as="a"
              href="https://www.instagram.com/olegzzl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuInstagram size="12" />
            </IconButton>
            <IconButton
              aria-label="Telegram"
              variant="outline"
              size="xs"
              rounded="full"
              borderColor="gray.200"
              color="gray.500"
              _hover={{ bg: "orange.50", color: "orange.700", borderColor: "orange.200" }}
              as="a"
              href="https://t.me/olegzzl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram size="12" />
            </IconButton>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  )
}
