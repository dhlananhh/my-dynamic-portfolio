import type {
  DefaultNodeTypes,
  SerializedLinkNode
} from "@payloadcms/richtext-lexical"
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical"

import type { JSXConvertersFunction } from "@payloadcms/richtext-lexical/react"
import {
  LinkJSXConverter,
  RichText as PayloadRichText
} from "@payloadcms/richtext-lexical/react"
import React from "react"

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const { relationTo, value } = linkNode.fields.doc!
  if (typeof value !== "object") {
    throw new TypeError("Expected value to be an object")
  }
  const slug = value.slug

  switch (relationTo) {
    case "articles":
      return `/blog/${slug}`
    default:
      return `/${relationTo}/${slug}`
  }
}

const jsxConverters: JSXConvertersFunction<DefaultNodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
})

export const RichText: React.FC<{
  lexicalData: SerializedEditorState
}> = ({ lexicalData }) => {
  return <PayloadRichText converters={jsxConverters} data={lexicalData} />
}
