import { Stack, Typography } from "@mui/material";
import CustomCard from "@components/CustomCard";
import theme from "@theme/theme";

const FeaturesSection = () => {
    return (
        <Stack width={'100%'} alignItems={'center'} justifyContent={'start'} gap={4}>
            <Typography variant="h5">
                Features
            </Typography>
            <Stack width={'100%'} direction={'row'} alignItems={'center'} justifyContent={'center'} gap={2}>
                <Stack width={'1/3'}>
                    <CustomCard gradient={`linear-gradient(10.81deg, ${theme.palette.NexCardGradient1_1.main} 8.01%, ${theme.palette.NexCardGradient1_2.main} 96.61%)`} shadow="0px 40px 180px rgba(0, 0, 0, 0.35)" border={`solid 2px ${theme.palette.NexGradientBorder1_2}`}>
                        <Stack alignItems={'start'} justifyContent={'space-between'} gap={2}>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>{/*Box for Animated Icon*/}</Stack>
                            <Stack direction={'column'} justifyContent={'space-evenly'} gap={1}>
                                <Typography variant="h5" sx={{
                                    textAlign: 'center',
                                    width: '100%',
                                }}>One-stop-shop</Typography>
                                <Stack>
                                    <Typography variant="subtitle1">✔ One click trading</Typography>
                                    <Typography variant="subtitle1">✔ Manage TradFi & Crypto assets</Typography>
                                    <Typography variant="subtitle1">✔ No wallet needed ! Easy social login</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </CustomCard>
                </Stack>
                <Stack width={'1/3'}>
                    <CustomCard gradient={`linear-gradient(10.81deg, ${theme.palette.NexCardGradient1_1.main} 8.01%, ${theme.palette.NexCardGradient1_2.main} 96.61%)`} shadow="0px 40px 180px rgba(0, 0, 0, 0.35)" border={`solid 2px ${theme.palette.NexGradientBorder1_2}`}>
                        <Stack alignItems={'start'} justifyContent={'space-between'} gap={2}>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>{/*Box for Animated Icon*/}</Stack>
                            <Stack direction={'column'} justifyContent={'space-evenly'} gap={1}>
                                <Typography variant="h5" sx={{
                                    textAlign: 'center',
                                    width: '100%',
                                }}>Story based investing</Typography>
                                <Stack>
                                    <Typography variant="subtitle1">✔ Narrative-Based Asset Trading</Typography>
                                    <Typography variant="subtitle1">✔ Machine Learning & AI based funds</Typography>
                                    <Typography variant="subtitle1">✔ Reduced Volatility Index Products</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </CustomCard>
                </Stack>
                <Stack width={'1/3'}>
                    <CustomCard gradient={`linear-gradient(10.81deg, ${theme.palette.NexCardGradient1_1.main} 8.01%, ${theme.palette.NexCardGradient1_2.main} 96.61%)`} shadow="0px 40px 180px rgba(0, 0, 0, 0.35)" border={`solid 2px ${theme.palette.NexGradientBorder1_2}`}>
                        <Stack alignItems={'start'} justifyContent={'space-between'} gap={2}>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>{/*Box for Animated Icon*/}</Stack>
                            <Stack direction={'column'} justifyContent={'space-evenly'} gap={1}>
                                <Typography variant="h5" sx={{
                                    textAlign: 'center',
                                    width: '100%',
                                }}>Self custody</Typography>
                                <Stack>
                                    <Typography variant="subtitle1">✔ Transparent smart contract sode</Typography>
                                    <Typography variant="subtitle1">✔ 24/7 Globally tradeable assets</Typography>
                                    <Typography variant="subtitle1">✔ Automatically Reinvested Dividends</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </CustomCard>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default FeaturesSection;