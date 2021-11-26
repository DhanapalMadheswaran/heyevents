import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Modal from "./Modal";
import Grid from "@material-ui/core/Grid";
import SlotsService from "../../services/SlotsService";
import Header from "../includes/header";
import VendorHeader from "./header";
import AddSlotModal from "./addSlotModal";
import Toast from "../../components/toast";
export default function SlotsForm() {
  const lastItem = window.location.pathname.split("-").pop();
  let slotservice = new SlotsService();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  let i = 0;
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const [model, setModel] = useState(false);
  const [type, setType] = useState("Add");
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [slot, setSlot] = useState({ slots: [] });
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const handleCheckboxChange = (event) => {
    let newArray = [...slot.slots, event.target.value];

    if (slot.slots.includes(event.target.value)) {
      newArray = newArray.filter((day) => day !== event.target.value);
    }
    setSlot({
      slots: newArray,
    });
  };
  const getProductData = async () => {
    try {
      const data = await slotservice.getAll(lastItem);

      setProduct(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);
  const openModel = () => {
    setModel(true);
    setType("Add");
  };
  const modalClose = () => {
    setModel(false);
  };
  const onFormSubmit = async (available, slot) => {
    let finalData = {
      vendorID: lastItem,
      date: available,
      slots: slot.slots,
    };

    try {
      await slotservice.create(finalData).then((res) => {
        Toast("success", "🦄 Slots Added Successfully!");
        modalClose();
        //history.push("/add_slots");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <Modal show={model} handleClose={(e) => modalClose(e)}>
        <AddSlotModal onFormSubmit={onFormSubmit} />
      </Modal>
      <Header /> <VendorHeader />
      <br />
      <Grid container justifyContent="flex-end">
        <Button variant="contained" color="primary" onClick={openModel}>
          Add Slots
        </Button>
      </Grid>
      <Paper>
        <TableContainer>
          <br />
          <TextField
            id="filled-search"
            label="Search field"
            type="search"
            variant="outlined"
          />

          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>S.No</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Slots</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {product
                .filter((item) => {
                  if (search === "") {
                    return item;
                  } else if (
                    item.date.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return item;
                  }
                  return false;
                })
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                      <TableCell>{++i}</TableCell>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.slots}</TableCell>
                      <TableCell>
                        <button onClick={() => row}>Edit</button>
                      </TableCell>
                      <TableCell>
                        <button onClick={() => row}>Delete</button>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={product.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
