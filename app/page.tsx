import { LAPaper } from '@/components/shared/paper'
import styles from './page.module.css'
import { GridContainer, GridItem } from '@/components/shared/grid'
import { ConceptIcon, VideoIcon } from '@/components/shared/icons'

export default function Home() {
  return (
    <main className={styles.main}>
      <GridContainer>

        <GridItem xs={12}>
          <h1>Welcome, User.</h1>
          <br />
        </GridItem>


        <GridItem xs={12}>
          <LAPaper>
            <GridContainer spacing={0}>

              <GridItem xs={12} sm={1} md={1}>
                <VideoIcon width={35} height={35} />
              </GridItem>

              <GridItem xs={12} sm={11} md={11}>
                <h3>Onboarding content</h3>
              </GridItem>

              <GridItem xs={12}>
                <span>Take the next steps in your product knowledge with these easy to understand videos</span>
              </GridItem>

            </GridContainer>
          </LAPaper>
        </GridItem>

        <GridItem xs={12}>
          <LAPaper>
            <GridContainer spacing={0}>

            <GridItem xs={12} sm={1} md={1}>
                <ConceptIcon width={35} height={35} />
              </GridItem>

              <GridItem xs={12} sm={11} md={11}>
                <h3>Concepts</h3>
              </GridItem>

              <GridItem xs={12}>
                <span>Get up to speed with product strategy, first principles and key terms</span>
              </GridItem>

            </GridContainer>
          </LAPaper>
        </GridItem>

      </GridContainer>
    </main>
  )
}