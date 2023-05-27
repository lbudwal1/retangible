"use client"
import React from "react"
import styles from '../page.module.css'
import { LAPaper } from "@/components/shared/paper";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { GridContainer, GridItem } from "@/components/shared/grid";


const statsData = {
  labels: ['Category 1', 'Category 2', 'Category 3'],
  values: [10, 20, 30],
};

export default function Stats() {

  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  const [alignmentDate, setAlignmentDate] = React.useState('week');

  const handleDateChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignmentDate(newAlignment);
  };


  return (
    <main className={styles.main}>
      <LAPaper>
        <GridContainer spacing={3}>

          <GridItem xs={12} className="text-center">
            <h2>STATS</h2>
            <hr />
          </GridItem>

          <GridItem xs={12}>

          <div className="text-center">
          <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton value="web">Article Views</ToggleButton>
              <ToggleButton value="android">Searches</ToggleButton>
              <ToggleButton value="ios">Tickets Avoided</ToggleButton>
              <ToggleButton value="ios2">Satisfaction Score</ToggleButton>
            </ToggleButtonGroup>
            </div>

            <div className="text-right">
            <ToggleButtonGroup
              color="primary"
              value={alignmentDate}
              exclusive
              onChange={handleDateChange}
              aria-label="Platform"
              
            >
              <ToggleButton value="week">Week</ToggleButton>
              <ToggleButton value="month">Month</ToggleButton>
              <ToggleButton value="quarter">Quarter</ToggleButton>
            </ToggleButtonGroup>
            </div>
          </GridItem>

          <GridItem xs={12}>
            <GridContainer spacing={4}>

              <GridItem xs={12} sm={6}>
                <LAPaper>
                  <div className="text-center">
                    <strong>Top Articles</strong>
                    <hr />
                  </div>

                  <span>Item {Math.floor(Math.random() * 100) + 1}</span>
                  <br />
                  <span>Item {Math.floor(Math.random() * 100) + 1}</span>
                  <br />
                  <span>Item {Math.floor(Math.random() * 100) + 1}</span>
                </LAPaper>
              </GridItem>

              <GridItem xs={12} sm={6}>
                <LAPaper>
                  <div className="text-center">
                    <strong>Top Categories</strong>
                    <hr />
                  </div>

                  <span>Item {Math.floor(Math.random() * 100) + 1}</span>
                  <br />
                  <span>Item {Math.floor(Math.random() * 100) + 1}</span>
                  <br />
                  <span>Item {Math.floor(Math.random() * 100) + 1}</span>
                </LAPaper>
              </GridItem>

              <GridItem xs={12} sm={6}>
                <LAPaper>
                  <div className="text-center">
                    <strong>Top Keywords</strong>
                    <hr />
                  </div>

                  <span>Company Policy</span>
                  <br />
                  <span>Test Data</span>
                  <br />
                  <span>Tutorials</span>
                </LAPaper>
              </GridItem>

              <GridItem xs={12} sm={6}>
                <LAPaper>
                  <div className="text-center">
                    <strong>Power Users</strong>
                    <hr />
                  </div>

                  <span>Emily Johnson</span>
                  <br />
                  <span>Olivia Brown</span>
                  <br />
                  <span>Ava Thompson</span>
                </LAPaper>
              </GridItem>

            </GridContainer>
          </GridItem>

        </GridContainer>
      </LAPaper>
    </main>
  )
}
