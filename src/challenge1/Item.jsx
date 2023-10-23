import { Checkbox, FormControlLabel } from "@mui/material";

function Item({ item, handleChange }) {
  return (
    <FormControlLabel
      control={<Checkbox onChange={() => handleChange(item)} />}
      label={item.toString()}
    />
  );
}

export default Item;
