import { Stack, Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import Navbar from "@sections/Navbar";
import HeroShadows from "@components/HeroShadows";

import HeroCard from "@components/HeroCard";
import ChartCard from "@components/ChartCard";

import IndicesWithDetails from "../Indices";

const HeroSection = () => {
    return (
        <Box width={'100%'} height={'100vh'} position={'relative'} >
            <HeroShadows />
            <Navbar />
            <Stack width={'100%'} height={'88%'} position={'relative'} zIndex={3} marginX={'auto'} marginTop={2} padding={3} direction={'row'} alignItems={'center'} gap={2}>
                <Box display={'flex'} width={'35%'} height={'100%'}>
                    <HeroCard />
                </Box>
                <Grid container rowSpacing={2} columnSpacing={2} width={'65%'} height={'100%'}>
                    {IndicesWithDetails.map((item, index) => (
                        <Grid size={6} key={index}>
                            <Box display={'flex'} width={'100%'} height={'100%'}>
                                <ChartCard product={item} />
                            </Box>
                        </Grid>
                    ))}
                </Grid>

            </Stack>
        </Box>
    )
}

export default HeroSection;