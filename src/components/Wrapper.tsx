import { Grid, Paper } from "@mui/material";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Grid container>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: "90%",
          flexGrow: 1,
          backgroundColor: (theme) => (theme.palette.mode === "dark" ? "#1A2027" : "#fff"),
        }}
      >
        {children}
      </Paper>
    </Grid>
  );
};

export default Wrapper;
