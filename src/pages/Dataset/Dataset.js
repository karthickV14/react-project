import React, { useState } from "react";
import "./Dataset.css";
import AddBoxIcon from "@mui/icons-material/AddBox";
import {
  Chip,
  Avatar,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  IconButton,
  DialogContentText,
  DialogContent,
  DialogTitle,
  DialogActions,
  Dialog,
} from "@mui/material";
import AddchartIcon from "@mui/icons-material/Addchart";
import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import ProfileSettings from "../../components/ProfileSettings/ProfileSettings";
import { useNavigate } from "react-router-dom";

const columns = [
  { id: "name", label: "Connection Name", minWidth: 160 },
  { id: "source", label: "Source", minWidth: 90 },
  { id: "lastModified", label: "Import Status", minWidth: 150 },
  { id: "lastDataLoad", label: "Last Data Import", minWidth: 150 },
  { id: "size", label: "Size", minWidth: 70, align: "center" },
  { id: "numRows", label: "No. of Rows", minWidth: 90, align: "center" },
  { id: "numColumns", label: "No. of Columns", minWidth: 90, align: "center" },
  { id: "status", label: "Status", minWidth: 70 },
  {
    id: "configuration",
    label: "Configuration",
    minWidth: 150,
    align: "center",
  },
  { id: "actions", label: "Actions", minWidth: 100, align: "center" },
];

function createData(
  name,
  source,
  lastModified,
  lastDataLoad,
  size,
  numRows,
  numColumns,
  status
) {
  const formatDate = (date) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return {
    name,
    source,
    lastModified,
    lastDataLoad: formatDate(lastDataLoad),
    size,
    numRows,
    numColumns,
    status,
  };
}

const initialRows = [
  createData(
    "Sample",
    "Csv",
    "1 months ago",
    "2024-01-01",
    "176 KB",
    "3.3K",
    5,
    "Inactive"
  ),
  createData(
    "Employee",
    "Excel",
    "1 months ago",
    "2024-01-02",
    "29.06 MB",
    "3K",
    8,
    "Active"
  ),
  createData(
    "Contracts",
    "Csv",
    "1 months ago",
    "2024-01-02",
    "29.06 MB",
    "10K",
    5,
    "Inactive"
  ),
  createData(
    "Hospital Payment",
    "Csv",
    "1 months ago",
    "2024-01-02",
    "29.06 KB",
    "6K",
    9,
    "Active"
  ),
  createData(
    "Telecom",
    "Db",
    "1 months ago",
    "2024-01-02",
    "85.3 MB",
    "84k",
    22,
    "Active"
  ),
  createData(
    "Insurance",
    "Excel",
    "1 months ago",
    "2024-01-14",
    "675.3 KB",
    "96K",
    25,
    "Inactive"
  ),
  createData(
    "Medical Record",
    "Excel",
    "1 months ago",
    "2024-01-14",
    "75.3 MB",
    "7K",
    15,
    "Active"
  ),
  createData(
    "Sales Record",
    "Csv",
    "1 months ago",
    "2024-01-16",
    "52.3 MB",
    "4K",
    15,
    "Active"
  ),
  createData(
    "Server Data",
    "Db",
    "1 months ago",
    "2024-01-20",
    "152.3 KB",
    "40K",
    17,
    "Inactive"
  ),
  createData(
    "Customers",
    "Db",
    "1 months ago",
    "2024-02-05",
    "235.3 KB",
    "34K",
    30,
    "Active"
  ),
];
const Dataset = () => {
  const [rows, setRows] = useState(initialRows);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openDialog, setOpenDialog] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const navigate = useNavigate();

  const handleConnections = () => {
    navigate("/connections");
  };

  const handleCreateChart = () => {
    navigate("/generate-charts");
  };

  const handleOpenDialog = (row) => {
    setRowToDelete(row);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setRowToDelete(null);
  };

  const handleConfirmDelete = () => {
    setRows(rows.filter((row) => row.name !== rowToDelete.name));
    handleCloseDialog();
  };

  const handleToggleConfiguration = (row) => {
    //   const updatedRows = rows.map((r) => {
    //     if (r.name === row.name) {
    //       return {
    //         ...r,
    //         status: r.status === "Active" ? "Inactive" : "Active",
    //       };
    //     }
    //     return r;
    //   });
    //   setRows(updatedRows);
    // };
    navigate("/schedule");
  };

  return (
    <div className="dataset-container">
      <div className="dataset-header-title">
        <h4 className="h4">Dataset</h4>
        <ProfileSettings />
      </div>
      <div className="dataset-area">
        <div className="dataset-options">
          <Button onClick={handleConnections}>
            <AddBoxIcon sx={{ width: "45px", color: "#002a6e" }} />
            Add New Dataset
          </Button>
        </div>
        <div className="dataset-table">
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 520 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          minWidth: column.minWidth,
                          backgroundColor: " #CCF1FC",
                          color: "#002a6e",
                          fontWeight: "600",
                        }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.name}
                          style={{
                            backgroundColor:
                              index % 2 === 0 ? "#fff" : "#F2FBFE",
                          }}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell
                                key={column.id}
                                align={column.align}
                                sx={{ padding: "12px" }}
                              >
                                {column.id === "actions" ? (
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <IconButton onClick={handleCreateChart}>
                                      <AddchartIcon sx={{ color: "#009AF0" }} />
                                    </IconButton>
                                    <IconButton
                                      onClick={() => handleOpenDialog(row)}
                                    >
                                      <CancelIcon sx={{ color: "#FF0505" }} />
                                    </IconButton>
                                  </div>
                                ) : column.id === "configuration" ? (
                                  <Chip
                                    label={
                                      row.status === "Active"
                                        ? "Activated"
                                        : "Schedule"
                                    }
                                    variant={
                                      row.status === "Active"
                                        ? "default"
                                        : "outlined"
                                    }
                                    onClick={() =>
                                      handleToggleConfiguration(row)
                                    }
                                    style={{
                                      cursor: "pointer",
                                    }}
                                  />
                                ) : (
                                  value
                                )}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              className="table-page"
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      </div>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this dataset?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Dataset;
