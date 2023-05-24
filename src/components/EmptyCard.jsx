import { Card, CardActionArea, CardContent, Grid } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function EmptyCard() {
  return (
        <Grid container>
          <Grid item xs={2}>
            <CardActionArea onClick={(e) => (console.log(e))}>
              <Card
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  maxWidth: 345,
                  minWidth: 250,
                  maxHeight: 345,
                  minHeight: 230,
                }}
              >
                <CardContent>
                  <AddCircleIcon sx={{ fontSize: 80 }} />
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        </Grid>
  );
}

export default EmptyCard;
