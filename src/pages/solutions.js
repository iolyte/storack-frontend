import React from 'react';
import ReactPlayer from 'react-player';
import Image from 'next/legacy/image';
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
      title: 'Electronic Industry',
      imageUrl: '/assets/Images/solutions-1.jpg',
      list: [
        'Electronics Industry, Products classification is difficult',
        'The storage space usage is low and the cost is high',
        'The storage environment is must be ESD, dust-proof, weight release, and impact-proof',
        'Improve traditional shelving can not be adjusted freely',
        'Poor turnover flexibility leads to low work efficiency',
      ],
    },
    {
      title: 'Retail Industry',
      imageUrl: '/assets/Images/solutions-1.jpg',
      list: [
        'Retail Industry, Low utilization of display space and small display space',
        'Good is diversified and easy to pick up',
        'The traditional shelf to move is difficult have a health dead corner',
        'The use of space display flexibly adjusted is bad',
        'Carry goods from warehouse to the store, waste time and labor',
      ],
    },
    {
      title: 'Office System',
      imageUrl: '/assets/Images/solutions-1.jpg',
      list: [
        'Business Office , Goods, kinds, sizes, classification management is difficult',
        'Messy accumulation, affect the company features',
        'Low utilization of office storage space, waste of space',
        'Documents is heavy, Wood shelves easy to deformation',
        'Wooden shelves is bulky and cannot be adjusted freely',
      ],
    },
    {
      title: 'Hotel Dining',
      imageUrl: '/assets/Images/solutions-1.jpg',
      list: [
        'Hotel Catering，Food, tableware is variety, Difficult to classify manage',
        'Its not Ventilated and breathable, the food is easy to stale',
        'Super load-bearing, goods is heavy, handling and turnover time laborious Control the temperature of storage is difficult and it is easy to deteriorate. After dinning, other space oil pollution cleaning is difficult',
        'High requirements and healthy',
      ],
    },
  ];

  const features = [
    {
      title: 'DIY free combination',
      imageUrl: '/assets/Images/feature-1.jpg',
    },
    {
      title: 'Easy to install',
      imageUrl: '/assets/Images/feature-1.jpg',
    },
    {
      title: 'Durable',
      imageUrl: '/assets/Images/feature-1.jpg',
    },
    {
      title: 'Customized',
      imageUrl: '/assets/Images/feature-1.jpg',
    },
    {
      title: 'Multi-function',
      imageUrl: '/assets/Images/feature-1.jpg',
    },
    {
      title: 'Space saving',
      imageUrl: '/assets/Images/feature-1.jpg',
    },
    {
      title: 'Environmental friendly',
      imageUrl: '/assets/Images/feature-1.jpg',
    },
    {
      title: 'Cost saving',
      imageUrl: '/assets/Images/feature-1.jpg',
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
          height: '100vh',
          position: 'relative',
          backgroundImage: `url('/assets/Images/solutions-banner.jpg')`,
          backgroundSize: 'cover',
          textAlign: 'start',
          color: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'end',
          flexDirection: 'column',
        }}
      >
        <Image
          src={'/assets/Images/solutions-banner.jpg'}
          alt={'Solutions Banner Image'}
          layout="fill"
          objectFit="cover"
        />
        {/* <Box
          sx={{
            width: '42%',
            m: 3,
            p: 3,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: 3,
          }}
        >
          <Typography variant="h3" fontWeight={700} sx={{ my: 3 }}>
            OEM / ODM solution
          </Typography>
          <Typography variant="body2">
            Storack Solutions specializes in crafting bespoke OEM/ODM storage
            solutions, ensuring high-quality products and professional services.
            For tailored storage solutions that meet your specific needs,
            contact us today.
          </Typography>
          <Button
            href="/contact-us"
            variant="contained"
            color="secondary"
            sx={{ my: 3 }}
          >
            Contact Us
          </Button>
        </Box> */}
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
            <Grid item xs={6} sm={4} md={3} lg={2.4}>
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
                    <Grid item xs={12} sm={6} sx={{ px: 2 }}>
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        width={600}
                        height={400}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      sx={{ px: 5, order: getOrder(index) }}
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

                  <Typography variant="body1" sx={{ my: 2 }}>
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
