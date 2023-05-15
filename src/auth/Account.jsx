import { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { getUser, logOutUser, updateUser } from "../api/apiClient";

const styles = {
  container: {
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "white",
    width: "40%",
    margin: "0px auto",
    padding: "20px",
  },
};

export default function Account() {
  const user = getUser();
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  async function updateProfile(event) {
    event.preventDefault();
    setLoading(true);
    await updateUser({ firstName, lastName });
    setLoading(false);
  }

  const onLogout = async () => {
    logOutUser();
    window.location.reload();
  };

  return (
    <form onSubmit={updateProfile}>
      <Grid container spacing={3} sx={styles.container}>
        <Grid item width="100%">
          <TextField
            fullWidth
            id="email"
            label="Email"
            disabled
            value={user.email}
          />
        </Grid>
        <Grid item width="100%">
          <TextField
            fullWidth
            id="firstName"
            label="First Name"
            required
            value={firstName || ""}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Grid>
        <Grid item width="100%">
          <TextField
            fullWidth
            id="lastName"
            label="Last Name"
            required
            value={lastName || ""}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading ..." : "Update"}
          </Button>
          <Button
            variant="contained"
            color="error"
            style={{ marginLeft: 10 }}
            onClick={onLogout}
          >
            Logout
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
