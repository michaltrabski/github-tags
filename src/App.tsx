import { useState } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import Table from "./components/Table/Table";
import Wrapper from "./components/Wrapper/Wrapper";

import "./App.css";

export interface Data {
  items: Tag[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}
export interface Tag {
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  count: number;
  name: string;
}

export interface PaginationModel {
  pageSize: number;
  page: number;
}

const API_URL = "https://api.stackexchange.com/2.2/tags?site=stackoverflow";

function App() {
  const { isPending, error, data, isFetched } = useQuery<Data, Error>({
    queryKey: ["repoData"],
    queryFn: () => fetch(API_URL).then((res) => res.json()),
  });

  const [paginationModel, setPaginationModel] = useState<PaginationModel>({
    pageSize: 5,
    page: 0,
  });

  const handleChange = (value: string) => {
    if (parseInt(value) < 1) {
      alert("Value must be greater than 0");
      return;
    }

    setPaginationModel((prev) => ({
      ...prev,
      pageSize: parseInt(value),
      page: 0,
    }));
  };

  if (error) {
    return (
      <Wrapper>
        <Typography variant="h6">An error has occurred: {error.message}</Typography>
      </Wrapper>
    );
  }

  const tags = data?.items || [];

  return (
    <Wrapper>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h1">
            Tags from StackOverflow API
          </Typography>

          {isPending && <Typography variant="h6">Loading...</Typography>}
        </Grid>

        {isFetched && (
          <Grid item xs={12}>
            <Typography variant="h6">Set amount of items per page: </Typography>

            <Box>
              <TextField
                required
                type="number"
                id="itemsPerPage"
                value={paginationModel.pageSize}
                onChange={(e) => handleChange(e.target.value)}
              />
            </Box>

            <Typography variant="caption">Value must be greater than 0</Typography>

            <Grid item xs={12}>
              <Typography variant="caption">Click on header to sort</Typography>

              <Table tags={tags} paginationModel={paginationModel} setPaginationModel={setPaginationModel} />
            </Grid>
          </Grid>
        )}
      </Grid>
    </Wrapper>
  );
}

export default App;
