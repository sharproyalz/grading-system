import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import SideBar from './side-bar'

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

const AppHead = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Box>
          <Typography variant="h5">Hello Dev</Typography>
        </Box>
        <Box marginTop={2}>
          <Typography variant="body1" paddingY={2}>
            My Profile
          </Typography>

          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                id="outlined-basic"
                label="Surname"
                variant="outlined"
                sx={{ flexGrow: 1 }}
              />
              <TextField
                id="outlined-basic"
                label="Firstname"
                variant="outlined"
                sx={{ flexGrow: 1 }}
              />
              <TextField
                id="outlined-basic"
                label="Middlename"
                variant="outlined"
                sx={{ flexGrow: 1 }}
              />
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                sx={{ flexGrow: 1 }}
              />
              <TextField
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                sx={{ flexGrow: 1 }}
              />
              <TextField
                id="outlined-basic"
                label="ID Number"
                variant="outlined"
                sx={{ flexGrow: 1 }}
              />
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                id="outlined-basic"
                label="Department"
                variant="outlined"
                sx={{ flexGrow: 1 }}
              />
              <TextField
                id="outlined-basic"
                label="Contact Number"
                variant="outlined"
                sx={{ flexGrow: 1 }}
              />
            </Box>
          </Box>

          <Stack spacing={2} direction="row" mt={4}>
            <Button variant="outlined">Update Profile</Button>
            <Button variant="outlined">Change Password</Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default AppHead
