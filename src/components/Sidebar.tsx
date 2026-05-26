import { Box, VStack, Text, HStack, Icon } from "@chakra-ui/react"
import { LuLayoutGrid, LuPackage, LuUsers, LuShoppingCart, LuSettings, LuPhone } from "react-icons/lu"

export type Page = "projects" | "materials" | "clients" | "orders" | "settings" | "contacts"

interface SidebarProps {
  currentPage: Page
  onNavigate: (page: Page) => void
  variant?: "default" | "ghost"
  textColor?: string
  activeColor?: string
}

const navItems: { id: Page; label: string; icon: React.ElementType }[] = [
  { id: "projects", label: "Проєкти", icon: LuLayoutGrid },
  { id: "materials", label: "Матеріали", icon: LuPackage },
  { id: "clients", label: "Клієнти", icon: LuUsers },
  { id: "orders", label: "Замовлення", icon: LuShoppingCart },
  { id: "contacts", label: "Контакти", icon: LuPhone },
  { id: "settings", label: "Налаштування", icon: LuSettings },
]

export function Sidebar({
  currentPage,
  onNavigate,
  variant = "default",
  textColor,
  activeColor,
}: SidebarProps) {
  const isGhost = variant === "ghost"
  return (
    <Box
      bg={isGhost ? "transparent" : "white"}
      rounded={isGhost ? "none" : "2xl"}
      shadow={isGhost ? "none" : "lg"}
      w={isGhost ? "full" : "200px"}
      flexShrink={0}
      pt={isGhost ? "12" : "8"}
      pb="8"
      mt={isGhost ? "0" : "10"}
      position="relative"
      zIndex="0"
    >
      <VStack align="stretch" gap={isGhost ? "2" : "0"} px={isGhost ? "6" : "4"}>
        {navItems.map((item) => {
          const isActive = currentPage === item.id
          
          // Compute dynamic colors
          const normalTextColor = textColor || (isGhost ? "gray.800" : "gray.600")
          const currentActiveColor = activeColor || "orange.700"
          
          return (
            <Box key={item.id}>
              <HStack
                gap="3"
                px="3"
                py="3"
                rounded="lg"
                cursor="pointer"
                onClick={() => onNavigate(item.id)}
                transition="all 0.15s"
                _hover={{
                  bg: isActive ? "transparent" : isGhost ? "rgba(255, 255, 255, 0.08)" : "orange.50",
                }}
              >
                <Icon
                  as={item.icon}
                  boxSize={isGhost ? "5" : "4"}
                  color={isActive ? currentActiveColor : normalTextColor}
                  opacity={isActive ? 1 : 0.8}
                />
                <Text
                  fontSize={isGhost ? "md" : "sm"}
                  fontWeight={isActive ? "bold" : "medium"}
                  color={isActive ? currentActiveColor : normalTextColor}
                >
                  {item.label}
                </Text>
              </HStack>
              {isActive && !isGhost && (
                <Box h="1px" bg="gray.200" mx="3" mt="1" mb="2" />
              )}
            </Box>
          )
        })}
      </VStack>
    </Box>
  )
}
