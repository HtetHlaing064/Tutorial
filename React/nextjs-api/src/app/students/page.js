"use client";

import {
  Box,
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

export default function StudentList() {

  const getStudentList=async()=>{
    try{
      console.log('getStudentList()');
      const response=await axios.get("/api/students");
      console.log(response.data);
    }catch(error){
      console.error(error)
    }
  }
  return (
    <Box padding={2}>
      <Stack alignItems="flex-end">
        <Link passHref href="/students/create">
          <Button variant="contained">Add STUDENT</Button>
        </Link>
      </Stack>
      <TableContainer component={Paper}>
        <Table>
          <TableHead >
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>DOB</TableCell>
              <TableCell>Father Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Major</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Su Su</TableCell>
              <TableCell>09876554</TableCell>
              <TableCell>5-7-1999</TableCell>
              <TableCell>U Maung</TableCell>
              <TableCell>29</TableCell>
              <TableCell>Female</TableCell>
              <TableCell>Hlaing</TableCell>
              <TableCell>Computer Science</TableCell>
              <TableCell align="center">
                <Link href={"/students/1"} passHref>
                  <IconButton>
                    <VisibilityIcon />
                  </IconButton>
                </Link>
                <Link href={"/students/1/edit"} passHref>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </Link>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
