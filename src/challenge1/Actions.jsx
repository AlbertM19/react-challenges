import { Box, Button } from "@mui/material";

function Actions({ moveToRight, moveToLeft }) {
  return (
    <Box sx={{ alignSelf: "center", display: "flex", flexDirection: "column" }}>
      <Button onClick={moveToRight}>&gt;</Button>
      <Button onClick={moveToLeft}>&lt;</Button>
    </Box>
  );
}

export default Actions;
