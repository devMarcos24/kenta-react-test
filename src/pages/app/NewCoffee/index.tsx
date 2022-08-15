/* eslint-disable react-hooks/exhaustive-deps */
import {
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Box,
  FormControl,
  TextField,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeaderComponent } from "../../../components/Header";
import { Container, BodyContainer } from "./styles";
import {
  addOther,
  changeOne,
  removeOne,
} from "../../../store/modules/coffee/actions";

export const NewCoffee: React.FC = () => {
  const [value, setValue] = useState("1");
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const coffees = useSelector((state: any) => state.coffees);
  const dispatch = useDispatch();

  const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const handleSave = () => {
    if (coffees.toChangeOrExclude) {
      dispatch(changeOne(coffees.toChangeOrExclude, { title: name, type: capitalizeFirstLetter(type) }));
    } else {
      const newCoffee = {
        description: "",
        id: coffees.coffee.length,
        image: "",
        ingredients: [],
        title: name,
        type: capitalizeFirstLetter(type),
      };

      console.log(newCoffee)

      dispatch(addOther(newCoffee));
    }
  };

  const excludeCoffee = () => {
    if (coffees.toChangeOrExclude) {
      return dispatch(removeOne(coffees.toChangeOrExclude));
    }
  };

  useEffect(() => {
    if (coffees.toChangeOrExclude) {
      setType(coffees.toChangeOrExclude.type.toLowerCase());
      setName(coffees.toChangeOrExclude.title);
    }
  }, []);

  return (
    <Container>
      <HeaderComponent
        title="Novo café"
        buttonTitle="Salvar"
        excludeButtonFunction={excludeCoffee}
        buttonFunction={handleSave}
        navigateTo="/"
      />
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={(e: React.SyntheticEvent, newValue: string) =>
                setValue(newValue)
              }
              TabIndicatorProps={{ style: { background: "orange" } }}
            >
              <Tab style={{ color: "orange" }} label="Dados gerais" value="1" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <BodyContainer>
              <TextField
                id="outlined-basic"
                label="Nome"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Box sx={{ minWidth: 120, width: 350, marginTop: 5 }}>
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
            </BodyContainer>
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
};
