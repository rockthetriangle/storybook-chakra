import type { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import {
  AbsoluteCenter,
  Button as ChakraButton,
  Span,
  Spinner,
} from "@chakra-ui/react";
import { forwardRef } from "react";
import { IconType } from "react-icons";

interface ButtonLoadingProps {
  loading?: boolean;
  loadingText?: React.ReactNode;
}

export interface ButtonProps extends ChakraButtonProps, ButtonLoadingProps {
  leftIcon?: IconType;
  rightIcon?: IconType;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const {
      loading,
      disabled,
      loadingText,
      children,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      ...rest
    } = props;
    return (
      <ChakraButton disabled={loading || disabled} ref={ref} {...rest}>
        {LeftIcon && !loading && <LeftIcon />}
        {loading && !loadingText ? (
          <>
            <AbsoluteCenter display="inline-flex">
              <Spinner size="inherit" color="inherit" />
            </AbsoluteCenter>
            <Span opacity={0}>{children}</Span>
          </>
        ) : loading && loadingText ? (
          <>
            <Spinner size="inherit" color="inherit" />
            {loadingText}
          </>
        ) : (
          children
        )}
        {RightIcon && !loading && <RightIcon />}
      </ChakraButton>
    );
  }
);
