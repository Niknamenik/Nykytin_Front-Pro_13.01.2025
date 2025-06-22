import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../store/slices/productsSlice";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsDelModal({ view, curProduct }) {
  const productListStore = useSelector((state) => state.products.items);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  async function handleDel() {
    const newProdList = productListStore.filter(
      (product) => product !== curProduct
    );
    localStorage.setItem("products", JSON.stringify(newProdList));
    dispatch(setProducts(newProdList));
    await axios.post("http://localhost:3000/Table_Products", newProdList);
  }

  function closeModalHendler() {
    setOpen(false);
  }

  return (
    <div>
      <Button onClick={handleOpen}>{view}</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <h2 className="main_text">
              Are you sure you want to delete this product?
            </h2>
            <div className="confirm_btns">
              <button
                type="button"
                id="alert_cancel"
                onClick={closeModalHendler}
              >
                Cancel
              </button>
              <button onClick={handleDel} id="alert_submit">
                Submit
              </button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
