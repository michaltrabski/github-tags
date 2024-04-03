import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Table from "./Table";

const meta = {
  title: "Components/Table",
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstTable: Story = {
  args: {
    tags: [
      { name: "tag1", count: 1, has_synonyms: true, is_moderator_only: true, is_required: true },
      { name: "tag2", count: 2, has_synonyms: true, is_moderator_only: true, is_required: true },
      { name: "tag3", count: 3, has_synonyms: true, is_moderator_only: true, is_required: true },
      { name: "tag4", count: 4, has_synonyms: true, is_moderator_only: true, is_required: true },
      { name: "tag5", count: 5, has_synonyms: true, is_moderator_only: true, is_required: true },
      { name: "tag6", count: 6, has_synonyms: true, is_moderator_only: true, is_required: true },
      { name: "tag7", count: 7, has_synonyms: true, is_moderator_only: true, is_required: true },
      { name: "tag8", count: 8, has_synonyms: true, is_moderator_only: true, is_required: true },
      { name: "tag9", count: 9, has_synonyms: true, is_moderator_only: true, is_required: true },
      { name: "tag10", count: 10, has_synonyms: true, is_moderator_only: true, is_required: true },
      { name: "tag11", count: 11, has_synonyms: true, is_moderator_only: true, is_required: true },
      { name: "tag12", count: 12, has_synonyms: true, is_moderator_only: true, is_required: true },
    ],
    paginationModel: {
      pageSize: 5,
      page: 0,
    },
    setPaginationModel: fn(),
  },
};
