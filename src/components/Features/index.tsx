import { Grid, GridItem } from "@chakra-ui/react";
import Feature from "./Feature";

export default function Features() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <Feature icon="cocktail" text="Vida noturna" />
      </GridItem>
      <GridItem>
        <Feature icon="surf" text="Praia" />
      </GridItem>
      <GridItem>
        <Feature icon="building" text="Moderno" />
      </GridItem>
      <GridItem>
        <Feature icon="museum" text="Clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Feature icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  );
}
