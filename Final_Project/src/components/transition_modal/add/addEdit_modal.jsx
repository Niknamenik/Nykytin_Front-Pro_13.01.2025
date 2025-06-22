import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { Field, Form, Formik } from "formik";
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

export default function TransitionsAddEditModal({
  curProduct,
  title,
  view,
  action,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const productList = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

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
            <div className="form_header">
              <h2>{title}</h2>
              <button id="close_modal" onClick={handleClose}>
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.482545 0.482545C0.635119 0.329585 0.816371 0.208227 1.01592 0.125424C1.21547 0.0426208 1.42939 0 1.64543 0C1.86148 0 2.0754 0.0426208 2.27495 0.125424C2.4745 0.208227 2.65575 0.329585 2.80832 0.482545L11.5004 9.17794L20.1925 0.482545C20.3452 0.329832 20.5265 0.208693 20.7261 0.126046C20.9256 0.0433982 21.1395 0.000859959 21.3554 0.000859959C21.5714 0.000859959 21.7852 0.0433982 21.9848 0.126046C22.1843 0.208693 22.3656 0.329832 22.5183 0.482545C22.671 0.635258 22.7922 0.816554 22.8748 1.01608C22.9575 1.21561 23 1.42947 23 1.64543C23 1.8614 22.9575 2.07526 22.8748 2.27479C22.7922 2.47432 22.671 2.65561 22.5183 2.80832L13.8229 11.5004L22.5183 20.1925C22.671 20.3452 22.7922 20.5265 22.8748 20.7261C22.9575 20.9256 23 21.1395 23 21.3554C23 21.5714 22.9575 21.7852 22.8748 21.9848C22.7922 22.1843 22.671 22.3656 22.5183 22.5183C22.3656 22.671 22.1843 22.7922 21.9848 22.8748C21.7852 22.9575 21.5714 23 21.3554 23C21.1395 23 20.9256 22.9575 20.7261 22.8748C20.5265 22.7922 20.3452 22.671 20.1925 22.5183L11.5004 13.8229L2.80832 22.5183C2.65561 22.671 2.47432 22.7922 2.27479 22.8748C2.07526 22.9575 1.8614 23 1.64543 23C1.42947 23 1.21561 22.9575 1.01608 22.8748C0.816554 22.7922 0.635258 22.671 0.482545 22.5183C0.329832 22.3656 0.208693 22.1843 0.126046 21.9848C0.0433982 21.7852 0.000859959 21.5714 0.000859959 21.3554C0.000859959 21.1395 0.0433982 20.9256 0.126046 20.7261C0.208693 20.5265 0.329832 20.3452 0.482545 20.1925L9.17794 11.5004L0.482545 2.80832C0.329585 2.65575 0.208227 2.4745 0.125424 2.27495C0.0426208 2.0754 0 1.86148 0 1.64543C0 1.42939 0.0426208 1.21547 0.125424 1.01592C0.208227 0.816371 0.329585 0.635119 0.482545 0.482545Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
            <Formik
              initialValues={{
                category: curProduct ? curProduct.category : "",
                name: curProduct ? curProduct.name : "",
                quantity: curProduct ? curProduct.quantity : "",
                price: curProduct ? curProduct.price : "",
                description: curProduct ? curProduct.description : "",
              }}
              onSubmit={(value, { resetForm }) => {
                if (action == "add") {
                  value.id = +new Date();
                  const newProductList = [...productList, value];
                  submiting(newProductList);
                } else if (action == "edit") {
                  const newProductList = productList.map((product) => {
                    return product.id == curProduct.id
                      ? { id: curProduct.id, ...value }
                      : product;
                  });
                  submiting(newProductList);
                }
                async function submiting(newProductList) {
                  localStorage.setItem(
                    "products",
                    JSON.stringify(newProductList)
                  );
                  dispatch(setProducts(newProductList));
                  setOpen(false);
                  resetForm();
                  await axios.post(
                    "http://localhost:3000/Table_Products",
                    newProductList
                  );
                }
              }}
            >
              <Form className="form">
                <label htmlFor="prod_category">
                  <span>Categoty</span>
                  <Field type="text" name="category" id="prod_categoty" />
                </label>
                <label htmlFor="prod_name">
                  <span>Name</span>
                  <Field type="text" name="name" id="prod_name" />
                </label>
                <label htmlFor="prod_quantity">
                  <span>Qantity</span>
                  <Field type="text" name="quantity" id="prod_quantity" />
                </label>
                <label htmlFor="prod_price">
                  <span>Price</span>
                  <Field type="text" name="price" id="prod_price" />
                </label>
                <label htmlFor="prod_description">
                  <span>Description</span>
                  <Field
                    as="textarea"
                    name="description"
                    id="prod_description"
                  ></Field>
                </label>
                <div className="form_btns">
                  <button type="button" id="form_cancel" onClick={handleClose}>
                    Cancel
                  </button>
                  <button type="submit" id="form_submit">
                    Submit
                  </button>
                </div>
              </Form>
            </Formik>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
