import { Button as ButtonComponent } from "@mui/material";

const Button = () => {
  return (
    <div>
      <ButtonComponent
        variant="contained"
        onClick={() => console.log("Button onClick")}
      >
        Button Vite
      </ButtonComponent>
    </div>
  );
};

export default Button;
