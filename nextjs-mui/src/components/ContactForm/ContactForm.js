"use client";

import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  FormHelperText,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { schema, Schema } from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";

const CITY = [
  { value: "yangon", label: "Yangon" },
  { value: "mandalay", label: "Mandalay" },
  { value: "pathein", label: "Pathein" },
];

const TOWNSHIP = [
  { value: "hlaing", label: "Haling" },
  { value: "insein", label: "Insein" },
  { value: "kamaryut", label: "Kamaryut" },
];

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      city: "",
      township: "",
    },
  });

  const onSubmit = (FormData) => {
    console.log("FormData", FormData);
    console.log("Name Input Data", FormData.name);
    console.log("Name Input Email", FormData.email);
    reset();
  };
  return (
    <Box component="form" sx={{ p: 2 }} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Name"
        fullWidth
        sx={{ mb: 2 }}
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        label="Email"
        fullWidth
        sx={{ mb: 2 }}
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        label="Phone No"
        fullWidth
        sx={{ mb: 2 }}
        {...register("phoneno")}
        error={!!errors.phoneno}
        helperText={errors.phoneno?.message}
      />
      <TextField
        label="Address"
        fullWidth
        sx={{ mb: 2 }}
        {...register("address")}
        error={!!errors.address}
        helperText={errors.address?.message}
      />

      <FormControl
        fullWidth
        sx={{ mb: 2 }}
        margin="normal"
        error={!!errors.city}
      >
        <InputLabel id="city-label">City</InputLabel>
        <Controller
          name="city"
          control={control}
          error={!!errors.city}
          render={({ field }) => (
            <Select
              {...field}
              labelId="city-label"
              label="City"
              value={field.value || ""}
            >
              {CITY.map((city, index) => (
                <MenuItem key="index" value={city.value}>
                  {city.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />

        <FormHelperText>{errors.city?.message}</FormHelperText>
      </FormControl>

      <FormControl
        fullWidth
        sx={{ mb: 2 }}
        margin="normal"
        error={!!errors.township}
      >
        <InputLabel id="township-label">Township</InputLabel>
        <Controller
          name="township"
          control={control}
          error={!!errors.township}
          render={({ field }) => (
            <Select
              {...field}
              labelId="township-label"
              label="Township"
              value={field.value || ""}
            >
              {TOWNSHIP.map((township, index) => (
                <MenuItem key="index" value={township.value}>
                  {township.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />

        <FormHelperText>{errors.township?.message}</FormHelperText>
      </FormControl>

      {/* Township Select Box */}
      {/* <FormControl
        fullWidth
        sx={{ mb: 2 }}
        margin="normal"
        error={!!errors.role}
      >
        <InputLabel id="township-label">Township</InputLabel>
        <Select label="Township">
          <MenuItem>Hinthada</MenuItem>
          <MenuItem>Haling</MenuItem>
          <MenuItem>Insein</MenuItem>
        </Select>
      </FormControl> */}
      <Button type="submit" variant="contained">
        Save
      </Button>
    </Box>
  );
}
