import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { useState } from 'react';
import { GoAlert } from 'react-icons/go';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('409090', 'Deeana Scerlett', '1st', '+880123456789', 'hello@gmail.com'),
    createData('409090', 'James Ford', '1st', '+880123456789', 'hello@gmail.com'),
    createData('409090', 'Deeana Scerlett', '2nd', '+880123456789', 'hello@gmail.com'),
    createData('409090', 'James Ford', '2nd', '+880123456789', 'hello@gmail.com'),
    createData('409090', 'Deeana Scerlett', '3rd', '+880123456789', 'hello@gmail.com'),
    createData('409090', 'James Ford', '3rd', '+880123456789', 'hello@gmail.com'),
    createData('409090', 'Deeana Scerlett', '4th', '+880123456789', 'hello@gmail.com'),
    createData('409090', 'James Ford', '4th', '+880123456789', 'hello@gmail.com'),
    createData('409090', 'Deeana Scerlett', '5th', '+880123456789', 'hello@gmail.com'),
    createData('409090', 'James Ford', '5th', '+880123456789', 'hello@gmail.com'),
    createData('409090', 'Deeana Scerlett', '6th', '+880123456789', 'hello@gmail.com'),
    createData('409090', 'James Ford', '6th', '+880123456789', 'hello@gmail.com'),
    createData('409090', 'James Ford', '7th', '+880123456789', 'hello@gmail.com'),
    createData('409090', 'James Ford', '7th', '+880123456789', 'hello@gmail.com'),
];

const darkTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

export default function Pataientstable() {
    const [modal, setmodal] = useState(false);
    return (
        <>
            <ThemeProvider theme={darkTheme} >
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>SL</StyledTableCell>
                                <StyledTableCell>Roll No</StyledTableCell>
                                <StyledTableCell>Student Name</StyledTableCell>
                                <StyledTableCell align="left">Semester</StyledTableCell>
                                <StyledTableCell align="left">Phone</StyledTableCell>
                                <StyledTableCell align="left">Email</StyledTableCell>
                                <StyledTableCell align="left">Actions</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell align="left">1</StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{row.calories}</StyledTableCell>
                                    <StyledTableCell align="left">{row.fat}</StyledTableCell>
                                    <StyledTableCell align="left">{row.carbs}</StyledTableCell>
                                    <StyledTableCell align="left">{row.protein}</StyledTableCell>
                                    <div className='flex items-center pt-4'>
                                        <span className='cursor-pointer text-red-500 px-3' onClick={()=>setmodal(true)}><FaRegTrashAlt /></span>
                                        <span className='cursor-pointer text-blue-500 px-3'><FaRegEdit /></span></div>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </ThemeProvider>
            {
                modal &&
                <div onClick={() => setmodal(false)} className='bg-gray-700 opacity-75 fixed top-0 left-0 w-full h-full z-10'></div>
            }
            { modal &&
                <div className='fixed top-32 w-1/3 m-auto z-50 bg-white shadow left-0 right-0 rounded p-4'>
                    <div className='text-center w-full flex items-center justify-center flex-col'>
                        <span className='text-yellow-400 text-3xl m-auto'><GoAlert /></span>
                        <span className='text-sm font-semibold'>Are you sure want to delete Demo?</span>
                        <div className='py-3'>
                            <button className='rounded px-6 mx-2 py-1 bg-red-500 text-gray-200 text-sm font-semibold'>Yes</button>
                            <button className='rounded px-6 mx-2 py-1 bg-green-500 text-gray-200 text-sm font-semibold' onClick={()=>setmodal(false)}>No</button>
                        </div>
                    </div>
                </div>
            }

        </>
    );
}
