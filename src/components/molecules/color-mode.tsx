"use client"

import type { ConditionalValue, IconButtonProps, SpanProps } from "@chakra-ui/react"
import { ClientOnly, IconButton, Skeleton, Span, Tabs } from "@chakra-ui/react"
import { ThemeProvider, useTheme } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import * as React from "react"
import { v4 as uuidv4 } from "uuid"
import { LuMoon, LuSun } from "react-icons/lu"
import { HiSun, HiMoon } from "react-icons/hi2"

export interface ColorModeProviderProps extends ThemeProviderProps {}

export function ColorModeProvider(props: ColorModeProviderProps) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange {...props} />
  )
}

export type ColorMode = "light" | "dark"

export interface UseColorModeReturn {
  colorMode: ColorMode
  setColorMode: (colorMode: ColorMode) => void
  toggleColorMode: () => void
}

export function useColorMode(): UseColorModeReturn {
  const { resolvedTheme, setTheme } = useTheme()
  const toggleColorMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }
  return {
    colorMode: resolvedTheme as ColorMode,
    setColorMode: setTheme,
    toggleColorMode,
  }
}

export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode()
  return colorMode === "dark" ? dark : light
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode()
  return colorMode === "dark" ? <LuMoon /> : <LuSun />
}

interface ColorModeButtonProps extends Omit<IconButtonProps, "aria-label"> {}

export const ColorModeButton = React.forwardRef<
  HTMLButtonElement,
  ColorModeButtonProps
>(function ColorModeButton(props, ref) {
  const { toggleColorMode } = useColorMode()
  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Toggle color mode"
        size="sm"
        ref={ref}
        {...props}
        css={{
          _icon: {
            width: "5",
            height: "5",
          },
        }}
      >
        <ColorModeIcon />
      </IconButton>
    </ClientOnly>
  )
})

interface ColorModeButtonExtendedProps {
  variant: ConditionalValue<
    "outline" | "line" | "subtle" | "plain" | "enclosed" | undefined
  >
  size: ConditionalValue<"sm" | "md" | "lg">
}

export const ColorModeButtonExtended = function ColorModeButtonExtended(
  props: ColorModeButtonExtendedProps,
) {
  const { toggleColorMode, colorMode } = useColorMode()
  const { variant, size } = props

  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <Tabs.Root
        key={uuidv4()}
        defaultValue={colorMode}
        variant={variant}
        size={size}
        onValueChange={toggleColorMode}
      >
        <Tabs.List>
          <Tabs.Trigger value="light">
            <HiSun />
          </Tabs.Trigger>
          <Tabs.Trigger value="dark">
            <HiMoon />
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
    </ClientOnly>
  )
}

export const LightMode = React.forwardRef<HTMLSpanElement, SpanProps>(
  function LightMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme light"
        colorPalette="gray"
        colorScheme="light"
        ref={ref}
        {...props}
      />
    )
  },
)

export const DarkMode = React.forwardRef<HTMLSpanElement, SpanProps>(
  function DarkMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme dark"
        colorPalette="gray"
        colorScheme="dark"
        ref={ref}
        {...props}
      />
    )
  },
)
