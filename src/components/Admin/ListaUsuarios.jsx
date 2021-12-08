import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";

import Paper from "@mui/material/Paper";

import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

import { getUsuarios } from "../../services/usuario";

import ModalCrearUsuario from "./usuarioModals/ModalCrearUsuario";
import ModalVerUsuario from "./usuarioModals/ModalVerUsuario";
import ModalEditarUsuario from "./usuarioModals/ModalEditarUsuario";
import ModalEliminarUsuario from "./usuarioModals/ModalEliminarUsuario";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const columns = [
  {
    id: "nickname",
    label: "Nickname",
    minWidth: 170,
    align: "center",
  },
  {
    id: "nombre",
    label: "Nombre",
    minWidth: 170,
    align: "center",
  },
  {
    id: "email",
    label: "Email",
    minWidth: 170,
    align: "center",
  },
  {
    id: "acciones",
    label: "Acciones",
    minWidth: 170,
    align: "center",
  },
];

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getDataUsuarios();
  }, []);

  function getDataUsuarios() {
    getUsuarios()
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        setUsuarios(response.response);
        setLoading(false);
      });
  }

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - usuarios.length) : 0;
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <div>
      <Typography
        variant="h5"
        component="div"
        color="black"
        align="center"
        fontFamily="sans-serif"
        sx={{ paddingTop: "30px" }}
      >
        PANEL ADMINISTRADOR
      </Typography>
      <br />
      <TableContainer component={Paper}>
        <TableCell style={{ width: "15%" }} align="right">
           <ModalCrearUsuario update={getDataUsuarios} />
        </TableCell>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  <b>{column.label}</b>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? usuarios.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : usuarios
            ).map((row) => (
              <TableRow key={row.id}>
                <TableCell style={{ width: 160 }} align="center">
                  {row.nickname}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.nombre}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.email}
                </TableCell>
                <TableCell style={{ width: "20%" }} align="center">
                  <Stack direction="row" spacing={2}>
                    <ModalVerUsuario usuario={row} />
                     <ModalEditarUsuario
                      usuario={row}
                      update={getDataUsuarios}
                    />
                    <ModalEliminarUsuario
                      email={row.email}
                      nombre={row.nombre}
                      update={getDataUsuarios}
                    />
                  </Stack>
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "Todo", value: -1 }]}
                colSpan={5}
                count={usuarios.length}
                rowsPerPage={rowsPerPage}
                page={page}
                labelRowsPerPage="Filas por página"
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}
