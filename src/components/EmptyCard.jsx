import { Card, CardActionArea, CardContent } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function EmptyCard() {
  return (
            <CardActionArea onClick={(e) => (console.log(e))}>
              <Card
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  maxWidth: 250,
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
  );
}

export default EmptyCard;
