import React from "react";
import { Alert } from "@mui/material";

const CustomAlert = ({ content, severity, handleClose }) => {
  return (
    <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
      {content}
    </Alert>
  );
};

export default CustomAlert;
