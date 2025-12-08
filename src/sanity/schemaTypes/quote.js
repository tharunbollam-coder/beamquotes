// schemas/quote.js
import React from "react";

export default {
  name: "quote",
  title: "Quote",
  type: "document",
  fields: [
    {
      name: "text",
      title: "Quote Text",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "author",
      title: "Author",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Inspiration", value: "inspiration" },
          { title: "Motivation", value: "motivation" },
          { title: "Success", value: "success" },
          { title: "Life", value: "life" },
          { title: "Love", value: "love" },
          { title: "Wisdom", value: "wisdom" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image URL (Cloudflare)",
      type: "url",
      description: "Paste the full Cloudflare image URL",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    },
    {
      name: "youtubeUrl",
      title: "YouTube URL",
      type: "url",
      description: "Optional: Link to a related YouTube video",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    },
    {
      name: "likes",
      title: "Likes",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.min(0).integer(),
    },
    {
      name: "isFeatured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
      description: "Featured quotes will be shown on the homepage",
    },
  ],

  preview: {
    select: {
      title: "text",
      subtitle: "author",
      imageUrl: "image",
    },
    prepare({ title, subtitle, imageUrl }) {
      const shortTitle =
        title && title.length > 50 ? `${title.substring(0, 50)}…` : title;

      return {
        title: shortTitle || "Untitled quote",
        subtitle: subtitle ? `by ${subtitle}` : "Unknown author",
        media: imageUrl ? (
          <img
            src={imageUrl}
            alt={subtitle || "Quote image"}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : undefined,
      };
    },
  },
};
