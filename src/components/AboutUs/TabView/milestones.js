import React from 'react';
import Image from 'next/legacy/image';
import { Box, Typography, Grid } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from '@mui/lab';

const Milestones = () => {
  const milestones = [
    {
      year: '2021',
      description:
        'MZG’s first "storage expert”store opened; and the Shenzhen-Hong Kong industry-university-research base launched a strategic cooperation of "production, learning, research, and teaching"',
      image: '/assets/Images/milestone-1.png',
    },
    {
      year: '2020',
      description:
        'The independent innovation and automatic manufacturing system was put into use',
      image: '/assets/Images/milestone-2.jpg',
    },
    {
      year: '2019',
      description:
        'MZG established an intelligent R&D laboratory, and Midago officially entered a new field of smart storage products',
      image: '/assets/Images/milestone-3.jpg',
    },
    {
      year: '2018',
      description:
        'The company’s new factory was completed and put into use, and the production capacity was greatly improved',
      image: '/assets/Images/milestone-4.jpg',
    },
    {
      year: '2017',
      description:
        'The company’s new factory was completed and put into use, and the production capacity was greatly improved',
      image: '/assets/Images/milestone-5.jpg',
    },
    {
      year: '2016',
      description:
        'The company’s new factory was completed and put into use, and the production capacity was greatly improved',
      image: '/assets/Images/milestone-6.jpg',
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          fontFamily="arial"
          sx={{ my: 2 }}
        >
          Milestones
        </Typography>
      </Box>

      <Box>
        <Timeline position="alternate">
          {milestones.map((milestone) => {
            return (
              <TimelineItem>
                <TimelineOppositeContent>
                  {/* <Image
                    src={milestone.image}
                    alt={milestone.year}
                    width={350}
                    height={200}
                  /> */}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot
                    color="primary"
                    sx={{
                      width: 50,
                      height: 50,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {milestone.year}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Image
                    src={milestone.image}
                    alt={milestone.year}
                    width={350}
                    height={200}
                  />
                  <Typography>{milestone.description}</Typography>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Box>
    </>
  );
};

export default Milestones;
