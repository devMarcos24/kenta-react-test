/* eslint-disable react-hooks/exhaustive-deps */
import {
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Box,
  FormControl,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HeaderComponent } from "../../../components/Header";
import { getAllCoffee } from "../../../services/coffe-api";
import { addObjectToChange, getAll } from "../../../store/modules/coffee/actions";
import {
  Container,
  BodyContainer,
} from "./styles";

interface Column {
  id: 'name' | 'code';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
];

interface Data {
  name: string;
  code: string;
  id?: string | number;
  image: string;
  title: string;
  ingredients: Array<any>
  description: string;
  type: string
}

function createData(
  name: string,
  code: string,
  id: number,
  image: string,
  title: string,
  ingredients: Array<any>,
  description: string,
  type: string,
): Data {
  return { name, code, id, image, title, ingredients, description, type };
}



const Home: React.FC = () => {
  const coffees = useSelector((state: any) => state.coffees)

  const [coffee, setCoffee] = useState(coffees.coffee as Array<any>)
  const [type, setType] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const dispatch = useDispatch()

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    async function getCoffee() {
      const [hot, iced] = await getAllCoffee()

      const data = [...hot, ...iced]

      dispatch(getAll(data))
      if (data.length > 0) setCoffee([...coffee, ...data])
    }

    if (!coffees.coffee.length) getCoffee()

  }, [])

  useEffect(() => {
    async function getType() {
      setCoffee([])
      // const newCoffeeType = type === "iced" ? await getCoffeeIced() : await getCoffeeHot()

      const newCoffeeType: any[] = []

      coffees.coffee.forEach((element: ICoffe) => {
        if (element.type.toLowerCase() === type.toLowerCase()) {
          newCoffeeType.push(element)
        }
      })

      console.log(newCoffeeType)
      setCoffee(newCoffeeType)
    }

    if (type) getType()
  }, [type])

  interface ICoffe {
    id: number;
    image: string;
    title: string;
    ingredients: Array<any>
    description: string;
    type: string
  }


  const rows = coffee.map((element: ICoffe) => createData(element.title, element.type, element.id, element.image, element.title, element.ingredients, element.description, element.type))


  return (
    <Container>
      <HeaderComponent title="Cafés" buttonTitle="Novo Café" navigateTo={"new-coffee"} />
      <BodyContainer>
        <Box sx={{ minWidth: 120, width: 350 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="Tipo"
              onChange={(event: SelectChangeEvent) =>
                setType(event.target.value)
              }
            >
              <MenuItem value={"iced"}>Iced</MenuItem>
              <MenuItem value={"hot"}>Hot</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Paper sx={{ width: '100%', marginTop: 8, background: '#d7dded' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell style={{ width: "50%" }} key={column.id} align={column.align}>
                              <Link style={{ display: "flex", color: "#000", fontWeight: "bold", margin: "0 auto", alignItems: "center", justifyContent: "space-between" }} to="new-coffee" onClick={() => dispatch(addObjectToChange(row))}>
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </Link>
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
            rowsPerPageOptions={[10, 15, 20]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </BodyContainer>
    </Container>
  );
};

export default Home