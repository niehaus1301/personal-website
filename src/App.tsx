import Typography from "@mui/joy/Typography";
import Grid from "@mui/joy/Grid";
import "./App.css";
import Terminal from "./components/Terminal/Terminal";
import Box from "@mui/joy/Box";

export default function App() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      rowSpacing={5}
    >
      <Grid>
        <Typography
          level="h1"
          width="none"
          sx={{
            color: "white",
            backgroundColor: "blue",
            padding: 1,
            borderRadius: 10,
            marginTop: "1vh",
          }}
        >
          Leonard Niehaus
        </Typography>
      </Grid>
      <Grid>
        <Box sx={{ height: "60vh", width: "60vw" }}>
          <Terminal />
        </Box>
      </Grid>
      <Grid>
        <Typography level="body-md" textAlign="center">
          Trouble using my resume? <br />
          <a
            href="https://docs.google.com/document/d/1PrNXuOxpr_sHql20tGmEgSevfjy5RzVB3ACiyHLZOnQ/view"
            target="_blank"
          >
            View document version
          </a>
        </Typography>
      </Grid>
    </Grid>
  );
}
