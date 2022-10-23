import { memo } from "react";
import { CircularProgress } from "@mui/material";

const Loader = () => {
  return <CircularProgress size={45} />;
};

export default memo(Loader);
