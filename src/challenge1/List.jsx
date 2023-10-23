import { FormGroup, Paper } from "@mui/material";
import Item from "./Item";

function List({ items, handleChange }) {
  return (
    <Paper
      sx={{
        width: 150,
        height: 200,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <FormGroup>
        {items.map((item) => (
          <Item key={item} item={item} handleChange={handleChange} />
        ))}
      </FormGroup>
    </Paper>
  );
}

export default List;
