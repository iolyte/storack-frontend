import React from 'react';
import ReactPlayer from 'react-player';
import Image from 'next/legacy/image';
import Styles from '@/styles/Home.module.css';
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import Breadcrumb from '@/components/breadcrumb';
import Iconify from '@/components/iconify';
import BannerImage from '@/components/Home/BannerImage';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Solutions = () => {
  const advantagesData = [
    {
      title: 'Expand the space saver',
      imageUrl: '/assets/Images/advantage-1.jpg',
    },
    {
      title: 'Classification & well in order display',
      imageUrl: '/assets/Images/advantage-2.jpg',
    },
    {
      title: 'Recycling',
      imageUrl: '/assets/Images/advantage-3.jpg',
    },
    {
      title: 'Environmental Friendly',
      imageUrl: '/assets/Images/advantage-4.jpg',
    },
    {
      title: 'Cost Saving',
      imageUrl: '/assets/Images/advantage-5.jpg',
    },
  ];

  const problemsSolvingData = [
    {
      title: 'Electronics sector',
      imageUrl: '/assets/Images/microwave-storage.jpg',
      list: [
        'Within the realm of electronics, categorizing products poses a significant challenge.',
        'The utilization of storage space remains inefficient, accompanied by high costs.',
        'Ensuring an optimal storage environment necessitates compliance with ESD standards, dust-proofing measures, weight distribution considerations, and resistance to impacts.',
        'The lack of adaptability results in poor turnover flexibility, consequently hampering overall work efficiency.',
      ],
    },
    {
      title: 'Retail industry',
      imageUrl: '/assets/Images/retail_industry.jpg',
      list: [
        'With a focus on flexibility, our solutions allow for the efficient adjustment of display space, providing retailers with the tools to showcase their diverse range of products effortlessly.',
        'The inflexibility in adjusting display space further exacerbates the inefficiencies within the retail environment. We address these challenges head-on, offering innovative solutions to enhance display efficiency and streamline operations in the retail sector.',
        'Our adaptable shelving systems eliminate dead corners, ensuring a seamless and aesthetically pleasing presentation of goods.',
        'Additionally, our innovative designs are geared towards reducing the time and labour involved in the transportation of goods from the warehouse to the store.',
      ],
    },
    {
      title: 'Office system',
      imageUrl: '/assets/Images/Office-2.jpg',
      list: [
        'We specialize in providing efficient office storage solutions designed to streamline your business operations.',
        'With a focus on maximizing storage space utilization, our solutions eliminate unnecessary waste and create an organized environment that reflects the professionalism of your company.',
        'Moreover, our storage solutions are engineered to address the challenges posed by heavy documents. Say goodbye to deformation concerns, as our shelves are designed for durability and reliability.',
        'The adaptability of our shelving systems ensures that you have the freedom to configure your office space efficiently, offering a flexible solution that meets the unique needs of your business.',
      ],
    },
    {
      title: 'Hotel dinning',
      imageUrl: '/assets/Images/kitchen-vertical.jpg',
      list: [
        'Our storage systems are designed for super load-bearing capabilities, alleviating the laborious handling of heavy goods and expediting turnover times.',
        'Temperature control is simplified, mitigating the risk of food deterioration and ensuring the preservation of freshness.',
        'Additionally, our solutions are tailored to meet high standards of hygiene, facilitating easy clean up post-dining.',
        'Bid farewell to the difficulties of oil pollution cleaning in other spaces, as our designs prioritize cleanliness and ease of maintenance.',
      ],
    },
  ];

  const features = [
    {
      title: 'DIY free combination',
      imageUrl: '/assets/Images/feature-1.jpg',
    },
    {
      title: 'Height adjustable',
      imageUrl: '/assets/Images/feature-2.jpg',
    },
    {
      title: 'Length extendable',
      imageUrl: '/assets/Images/feature-3.jpg',
    },
    {
      title: 'Environmental friendly',
      imageUrl: '/assets/Images/feature-4.jpg',
    },
  ];

  const getOrder = (index) => {
    // Reverse order for alternate items
    return index % 2 === 0 ? 1 : 2;
  };

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: { xs: '30vh', sm: '70vh', md: '90vh' },
          position: 'relative',
        }}
      >
        <Image
          src={'/assets/Images/solutions-banner.jpg'}
          alt={'Solutions Banner Image'}
          layout="fill" // This ensures that the image takes up 100% of its parent container
          objectFit="cover" // This ensures that the image covers the entire container while maintaining its aspect ratio
        />
      </Box>

      {/* Breadcrumb */}
      <Box>
        <Breadcrumb
          secondaryTitle="Solutions"
          secondaryTitleLink="/solutions"
        />
      </Box>

      {/* Advantage Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          fontWeight={700}
          sx={{ fontSize: { xs: 24, sm: 32, md: 36, lg: 48 }, my: 2 }}
        >
          Advantage
        </Typography>
      </Box>

      <Box sx={{ m: 2 }}>
        <Grid container spacing={5}>
          {advantagesData.map((item, index) => (
            <Grid item xs={6} sm={6} md={3} lg={2.4}>
              <Card>
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    minHeight: 225,
                  }}
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={75}
                    height={75}
                  />

                  <Typography variant="body1" sx={{ my: 2 }}>
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Problems Solving For Customers Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography
          fontWeight={700}
          sx={{ fontSize: { xs: 24, sm: 32, md: 36, lg: 48 }, my: 2 }}
        >
          Problems solving for customers
        </Typography>
      </Box>

      <Box sx={{ my: 3 }}>
        <Grid container spacing={0}>
          {problemsSolvingData.map((item, index) => {
            return (
              <>
                <Grid item sm={12}>
                  <Grid
                    container
                    spacing={0}
                    sx={{
                      display: 'flex',
                      flexDirection: index % 2 ? 'row-reverse' : 'row',
                      justifyContent: 'center',
                      alignItems: 'start',
                    }}
                  >
                    <Grid item xs={12} sm={12} md={6} sx={{ px: 2 }}>
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        width={600}
                        height={400}
                        className={`${Styles.zoom}`}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      sx={{ px: 5, order: getOrder(index) }}
                    >
                      <AnimationOnScroll
                        animateIn={Styles.mainClass}
                        animateOnce
                      >
                        <Typography
                          variant="h4"
                          fontWeight={700}
                          textTransform="capitalize"
                          sx={{
                            fontSize: { xs: 22, sm: 26, md: 30, lg: 34 },
                            mt: 1,
                          }}
                        >
                          {item.title}
                        </Typography>
                        <List sx={{ mb: 2 }}>
                          {item?.list?.map((item, index) => (
                            <ListItem disableGutters dense>
                              <ListItemIcon>
                                <Iconify icon="solar:alt-arrow-right-bold-duotone" />
                              </ListItemIcon>
                              <ListItemText
                                primary={item}
                                primaryTypographyProps={{
                                  fontSize: { xs: 12, sm: 14, md: 16, lg: 18 },
                                  marginLeft: -3,
                                  fontWeight: 'medium',
                                  letterSpacing: 0,
                                  lineHeight: { xs: 1.2 },
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </AnimationOnScroll>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Box>

      {/* Feature Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          fontWeight={700}
          sx={{ fontSize: { xs: 24, sm: 32, md: 36, lg: 48 }, my: 2 }}
        >
          Feature
        </Typography>
      </Box>

      <Box sx={{ mx: 4, mb: 3 }}>
        <Grid container spacing={3}>
          {features.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card className="hover-card">
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    minHeight: 250,
                  }}
                >
                  {/* <Box
                    sx={{
                      width: 328,
                      height: 228,
                      position: 'relative',
                      backgroundImage: `url('${item.imageUrl}')`,
                      backgroundSize: 'cover',
                      textAlign: 'start',
                      color: '#fff',
                      display: 'flex',
                      justifyContent: '',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                    }}
                  >
                    <Box
                      sx={{
                        width: 'auto',
                        mx: 4,
                        p: 1,
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                        borderRadius: 1,
                      }}
                    >
                      <Typography variant="h4" fontWeight={700} sx={{ my: 0 }}>
                        #{index + 1}
                      </Typography>
                    </Box>
                  </Box> */}

                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={328}
                    height={228}
                  />

                  <Typography
                    variant="body1"
                    sx={{ my: 2, textTransform: 'capitalize' }}
                  >
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Product Installation Video Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography
          fontWeight={700}
          sx={{ fontSize: { xs: 24, sm: 32, md: 36, lg: 48 }, my: 2 }}
        >
          Product installation video
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 10,
          mt: 2,
        }}
      >
        <ReactPlayer url="https://www.youtube.com/watch?v=DLZD47lj82o&list=RDDLZD47lj82o&start_radio=1" />
      </Box>
    </>
  );
};

export default Solutions;
