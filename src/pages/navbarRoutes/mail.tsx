import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { Email, Column } from '../../types/mailTypes';


const columns: Column[] = [
  { id: 'sender', label: 'Sender', minWidth: 170 },
  { id: 'subject', label: 'Subject', minWidth: 100 },
  { id: 'date', label: 'Date', minWidth: 100, align: 'right' },
];

const createData = (id: number, sender: string, subject: string, date: string, body: string): Email => {
  return { id, sender, subject, date, body };
};

const rows = [
  createData(1, 'John Doe', 'Meeting Reminder', '2024-05-15', 'Don\'t forget about the meeting tomorrow at 10 AM.'),
  createData(2, 'Jane Smith', 'Project Update', '2024-05-14', 'The project is on track for completion next week.'),
  createData(3, 'Alice Johnson', 'Lunch Plans', '2024-05-13', 'Would you like to grab lunch tomorrow?'),
];

export default function EmailTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [selectedEmail, setSelectedEmail] = React.useState<Email | null>(null);

  const handleRowClick = (email: Email) => {
    setSelectedEmail(email);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.id} onClick={() => handleRowClick(row)}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {value}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedEmail?.subject}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Date: {selectedEmail?.date}
          </DialogContentText>
          <DialogContentText>
            {selectedEmail?.body}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
