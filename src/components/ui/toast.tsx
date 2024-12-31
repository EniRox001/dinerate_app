// Tremor Raw Toast [v0.0.1]

import React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import {
  RiCheckboxCircleFill,
  RiCloseCircleFill,
  RiErrorWarningFill,
  RiInformationFill,
  RiLoader2Fill,
} from "@remixicon/react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider
ToastProvider.displayName = "ToastProvider"

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, forwardedRef) => (
  <ToastPrimitives.Viewport
    ref={forwardedRef}
    className={cn(
      "fixed left-0 bottom-0 z-[9999] m-0 flex w-full max-w-[100vw] list-none flex-col gap-2 p-[var(--viewport-padding)] [--viewport-padding:_15px] sm:max-w-md sm:gap-4",
      className,
    )}
    {...props}
  />
))

ToastViewport.displayName = "ToastViewport"

interface ActionProps {
  label: string
  url: string
}

interface ToastProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> {
  variant?: "info" | "success" | "warning" | "error" | "loading"
  title?: string
  description?: any
  action?: ActionProps
  disableDismiss?: boolean
}

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  ToastProps
>(
  (
    {
      className,
      variant,
      title,
      description,
      action,
      disableDismiss = false,
      ...props
    }: ToastProps,
    forwardedRef,
  ) => {
    let Icon: React.ReactNode = null

    switch (variant) {
      case "success":
        title = "Success",
          className = "hover:bg-opacity-100 bg-green-700 bg-opacity-80 backdrop-blur-lg";
        Icon = (
          <RiCheckboxCircleFill
            className="size-5 shrink-0 fill-success"
            aria-hidden="true"
          />
        )
        break
      case "warning":
        title = "Warning",
          className = "hover:bg-opacity-100 bg-yellow-600 bg-opacity-80 backdrop-blur-lg";
        Icon = (
          <RiErrorWarningFill
            className="size-5 shrink-0 fill-warning"
            aria-hidden="true"
          />
        )
        break
      case "error":
        title = "Error",
          className = "hover:bg-opacity-100 bg-chestnut-700 bg-opacity-80 backdrop-blur-lg";
        Icon = (
          <RiCloseCircleFill
            className="size-5 shrink-0 fill-error"
            aria-hidden="true"
          />
        )
        break
      case "loading":
        title = "Loading",
          className = "border-toast-info";
        Icon = (
          <RiLoader2Fill
            className="size-5 shrink-0 animate-spin "
            aria-hidden="true"
          />
        )
        break
      default:
        title = "Info",
          Icon = (
            <RiInformationFill
              className="size-5 shrink-0"
              aria-hidden="true"
            />
          )
        break
    }

    return (
      <ToastPrimitives.Root
        ref={forwardedRef}
        className={cn(
          // base
          "flex h-fit max-w-[320px] w-full overflow-hidden shadow-xl rounded-md text-white",
          // background color
          "hover:bg-opacity-100 bg-spray-700 bg-opacity-80 backdrop-blur-lg",
          // border color
          " ",
          // swipe
          "data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none",
          // transition
          "data-[state=open]:animate-slideLeftAndFade",
          "data-[state=closed]:animate-hide",
          className,
        )}
        {...props}
      >
        <div
          className={cn(
            // base
            "flex flex-1 items-start gap-3 p-4",
            // border
            !disableDismiss || action
              ? ""
              : "",
          )}
        >
          {Icon}
          <div className="flex flex-col gap-1">
            {title && (
              <ToastPrimitives.Title className="text-sm font-semibold">
                {title}
              </ToastPrimitives.Title>
            )}
            {description && (
              <ToastPrimitives.Description className="text-sm font-light">
                {description}
              </ToastPrimitives.Description>
            )}

            {/* Link */}
            {action && (
              <a
                target="_blank"
                href={action.url}
                className={cn(
                  // base
                  "text-start text-sm font-medium text-zinc-300 flex-inline"
                )}
              >
                {action.label}
                <svg className="inline-flex ml-[8px] fill-zinc-300" width="13" height="13" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" >
                  <path d="M2.27502 18.4065C1.64531 18.4065 1.10871 18.1848 0.665225 17.7413C0.221741 17.2978 0 16.7612 0 16.1315V2.27502C0 1.64531 0.221741 1.10871 0.665225 0.665225C1.10871 0.221742 1.64531 0 2.27502 0H8.06577C8.38497 0 8.65436 0.109784 8.87392 0.32935C9.09349 0.548917 9.20327 0.818308 9.20327 1.13752C9.20327 1.45672 9.09349 1.72611 8.87392 1.94567C8.65436 2.16524 8.38497 2.27502 8.06577 2.27502H2.27502V16.1315H16.1315V10.3408C16.1315 10.0216 16.2413 9.75219 16.4609 9.53263C16.6804 9.31306 16.9498 9.20327 17.269 9.20327C17.5882 9.20327 17.8576 9.31306 18.0772 9.53263C18.2968 9.75219 18.4065 10.0216 18.4065 10.3408V16.1315C18.4065 16.7612 18.1848 17.2978 17.7413 17.7413C17.2978 18.1848 16.7612 18.4065 16.1315 18.4065H2.27502ZM16.1315 3.86035L7.87827 12.1136C7.66704 12.3248 7.40382 12.4295 7.0886 12.4275C6.77338 12.4255 6.51016 12.3189 6.29892 12.1076C6.08769 11.8964 5.98208 11.6322 5.98208 11.3149C5.98208 10.9978 6.08769 10.7335 6.29892 10.5223L14.5462 2.27502H12.3408C12.0216 2.27502 11.7522 2.16524 11.5326 1.94567C11.3131 1.72611 11.2033 1.45672 11.2033 1.13752C11.2033 0.818308 11.3131 0.548917 11.5326 0.32935C11.7522 0.109784 12.0216 0 12.3408 0H18.4065V6.06577C18.4065 6.38497 18.2968 6.65436 18.0772 6.87392C17.8576 7.09349 17.5882 7.20327 17.269 7.20327C16.9498 7.20327 16.6804 7.09349 16.4609 6.87392C16.2413 6.65436 16.1315 6.38497 16.1315 6.06577V3.86035Z" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Close button */}
        <div className="flex flex-col">
          {!disableDismiss && (
            <ToastPrimitives.Close>
              <button className="mt-[10px] mr-[10px]">
                <svg
                  className="fill-zinc-300"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 -960 960 960"
                  width="20"
                >
                  <path d="M480-405.912 293.044-218.956Q278.087-203.999 256-203.999q-22.087 0-37.044-14.957-14.957-14.957-14.957-37.044 0-22.087 14.957-37.044L405.912-480 218.956-666.956Q203.999-681.913 203.999-704q0-22.087 14.957-37.044 14.957-14.957 37.044-14.957 22.087 0 37.044 14.957L480-554.088l186.956-186.956q14.957-14.957 37.044-14.957 22.087 0 37.044 14.957 14.957 14.957 14.957 37.044 0 22.087-14.957 37.044L554.088-480l186.956 186.956q14.957 14.957 14.957 37.044 0 22.087-14.957 37.044-14.957 14.957-37.044 14.957-22.087 0-37.044-14.957L480-405.912Z" />
                </svg>
              </button>
            </ToastPrimitives.Close>
          )}
        </div>
      </ToastPrimitives.Root>
    )
  },
)
Toast.displayName = "Toast"

type ToastActionElement = ActionProps

export {
  Toast,
  ToastProvider,
  ToastViewport,
  type ToastActionElement,
  type ToastProps,
}