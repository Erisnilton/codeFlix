import { useState, useCallback } from "react";

const useMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = useCallback((event: any) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback((event: any) => {
    setAnchorEl(null);
  }, []);

  return { open, anchorEl, handleOpen, handleClose };
};

export default useMenu;
