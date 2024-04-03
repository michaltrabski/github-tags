import { SetStateAction } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { PaginationModel, Tag } from "../../App";

interface DataGridDemoProps {
  tags: Tag[];
  paginationModel: PaginationModel;
  setPaginationModel: (value: SetStateAction<PaginationModel>) => void;
}

export default function Table({ tags, paginationModel, setPaginationModel }: DataGridDemoProps) {
  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: "tagNane",
      headerName: "Tag",
      sortable: true,
      minWidth: 150,
    },
    {
      field: "relatedPostsCount",
      headerName: "Related Posts Count",
      sortable: true,
      minWidth: 200,
    },
  ];

  const rows = tags.map((tag) => ({
    id: tag.name, // used as id because it's unique
    tagNane: tag.name,
    relatedPostsCount: tag.count,
  }));

  return (
    <Box>
      <DataGrid
        rows={rows}
        columns={columns}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
      />
    </Box>
  );
}
