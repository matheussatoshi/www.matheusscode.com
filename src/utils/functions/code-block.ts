import React from "react"

export function codeBlock(children: React.ReactNode) {
  return React.Children.toArray(children)
    .filter((child) => React.isValidElement(child) && child.type === "code")
    .map((child) => {
      const element = child as React.ReactElement

      //@ts-expect-error
      return element.props.children
    })
}
