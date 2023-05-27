import React from "react";
import makeStyles from "@mui/styled-engine";
import Table from "@mui/material/Table";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from "@mui/material/TablePagination";
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LinearProgress from '@mui/material/LinearProgress';


const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
});

const SearchTable = props => {
  const data = props.dataSource;
  const meta = {count: data.length};
  const classes = useStyles();

  return (

    <Paper className={classes.root} style={{ position: "relative" }}>

      {/* Loader for improving UX */}
      {props.loading && <LinearProgress variant="indeterminate" className="linear-progress" />}

      <Table className={classes.table} aria-label="simple table">

        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">Country code</TableCell>
          </TableRow>
        </TableHead>

        <TableBody >
          {!!data.length &&
            data.map((row, idx) => (
              <TableRow key={row.name + idx}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">AIRPORT</TableCell>
                <TableCell align="right">{row.CityName}</TableCell>
                <TableCell align="right">{row.CountryName}</TableCell>
                <TableCell align="right">{row.CountryId}</TableCell>
              </TableRow>
            ))}
        </TableBody>

      </Table>

      {/* Will display this if no data in rtesponse from server */}
      {!data.length && <div className="center">No data</div>}

      {/* Pagination Component */}
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={meta.count ? meta.count : 0}
        rowsPerPage={10}
        page={props.search.page}
        onChangePage={(e, page) => {
          props.setSearch(p => ({ ...p, page }));
        }}
      />
    </Paper>
  );
};

export default SearchTable;