import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const Fields = ({ name, email, index }) => {
  return (
    <Stack>
    <div>
      <div className="data_val">
        <h4>{name}</h4>
        <h4>{email}</h4>
        <Button variant="contained" color="error">
          Success
        </Button>
      </div>
    </div>
    </Stack>
  );
};

export default Fields;
