"use client"
import React, { useState } from "react"
import styles from '../page.module.css'
import { LAPaper } from "@/components/shared/paper";
import { GridContainer, GridItem } from "@/components/shared/grid";
import { TextField, Button } from '@mui/material';

export default function Settings() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <main className={styles.main}>
      <LAPaper>
        <GridContainer spacing={3}>

          <GridItem xs={12} className="text-center">
            <h2>SETTINGS</h2>
            <hr />
          </GridItem>

          <GridItem xs={12} className="text-center">
            <form onSubmit={handleSubmit}>
              <TextField label="Name" value={name} onChange={handleNameChange} fullWidth />
              <br />
              <br />
              <TextField label="Email" type="email" value={email} onChange={handleEmailChange} fullWidth />
              <br />
              <br />
              <TextField label="Password" type="password" value={password} onChange={handlePasswordChange} fullWidth />
              <br />
              <br />
              <Button variant="contained" type="submit">Save</Button>
            </form>
          </GridItem>

        </GridContainer>
      </LAPaper>
    </main>
  )
}
