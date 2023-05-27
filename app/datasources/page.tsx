"use client"
import React from "react"
import styles from '../page.module.css'
import { LAPaper } from "@/components/shared/paper"
import { GridContainer, GridItem } from "@/components/shared/grid"
import { DataSourceIcon } from "@/components/shared/icons"
import { RED_COLOR } from "@/components/shared/theme"
import { LAButton } from "@/components/shared/button"
import { TextField } from '@mui/material';

export default function DataSource() {
  return (
    <main className={styles.main}>
      <LAPaper>
        <GridContainer spacing={3}>

          <GridItem xs={12} className="text-center">
            <h2>DATA SOURCE</h2>
            <hr />
          </GridItem>

          <GridItem xs={12}>
            <DataSourceIcon color={RED_COLOR} />
            <div>
              <strong>Current Data Source</strong>
              <br />
              <span>
                www.linkedin.com/help/linkedin?lang=en
              </span>
            </div>

            <div className="text-right">
              <LAButton
                label="Change"
              />
            </div>
          </GridItem>

          <GridItem xs={12}>
            <LAPaper>

              <GridContainer>

                <GridItem xs={12}>
                  <strong>Saar</strong>
                  <div className="text-right">
                    <strong>You</strong>
                  </div>
                </GridItem>

                <GridItem xs={6}>
                </GridItem>
                <GridItem xs={6} className="text-right">
                  <LAPaper>
                    Hey! How do i delete a user?
                  </LAPaper>
                </GridItem>



                <GridItem xs={6}>
                  <LAPaper>
                    Hi! to delete the user, go to setting, and then in users and search for the user name and delete it from hamburger menu.
                  </LAPaper>
                </GridItem>

                <br /><br /><br /><br /><br /><br />

                <GridItem xs={12}>
                  <TextField label="Type your question here...." value="" fullWidth />
                  <br /><br />
                  <LAButton label="Send" />
                </GridItem>

              </GridContainer>
            </LAPaper>
          </GridItem>

        </GridContainer>
      </LAPaper>
    </main>
  )
}
