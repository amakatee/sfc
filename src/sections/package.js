/** @jsx jsx */
import { jsx, Container, Box, Flex } from 'theme-ui';
import { keyframes } from '@emotion/core';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import PriceCard from 'components/price-card';
import ButtonGroup from 'components/button-group';
import SectionHeader from 'components/section-header';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import Logo from 'components/logo';

const packages = {
  byAir: [
    {
      id: 1,
      name: 'UK ',
      description: 'Can send up to 99% of goods DTS is btw 7 to 30 working  days to your door ',
      buttonText: 'Start free trail',
      priceWithUnit: '$34',
      priceAdditional: '$12',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Brands',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Cosmetics',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Medicine, liquids',
          isAvailable: true,
        },
        
      
        {
          id: 4,
          icon:<IoIosCheckmarkCircle />,
          text: 'batteries, AP',
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      name: 'USA',
      description: 'Fastest in 8 working days ',
      priceWithUnit: '$15',
      priceAdditional: '$50',
      buttonText: 'Create account',
      anotherOption: 'Or Start 14 Days trail',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Clothes,shoes, bags',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Maternal and Child products",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Sport Goods',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Cosmetic and Brands ',
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
     
      headerIcon: <IoIosCheckmarkCircle />,
      name: 'Italy',
      description: 'DTS is btw 7 to 12 working days ',
      priceWithUnit: '$38',
      priceAdditional: '$12',
      buttonText: 'Create account',
      anotherOption: 'Or Start 14 Days trail',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Internal Power Products',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Brands",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Food',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Mask, Cosmetics etc',
          isAvailable: true,
        },
      ],
    },
  ],
  bySea: [
    {
      id: 1,
      name: 'UK Royal Post',
      description: "DTS is btw 5 to 9 days",
      buttonText: 'Start free trail',
      priceWithUnit: '$21',
      priceAdditional: '$9',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "Domestic Brands",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Shoes, Clothing',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'electronic products(non-internal electrocity)',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCloseCircle />,
          text: 'Brands, electronic devices ',
          isAvailable: true,
        },
      ],
    },
    
  ],
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
};

export default function Package() {
  const { byAir, bySea } = packages;
  const [state, setState] = useState({active:'monthly',
    pricingPlan: byAir
  })
  

  const handlePricingPlan = (plan) => {
    if(plan === 'annual')
     {setState({active:'annual', pricingPlan: bySea})
    }else {
      setState({active:'monthly', pricingPlan: byAir})


    }
  }

  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: '',
    slidesToSlide: 1,
    items: 3,
    containerClass: 'carousel-container',
    customButtonGroup: <ButtonGroup />,
    dotListClass: '',
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: '',
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: '',
  };

  return (
    <section id="pricing" sx={{ variant: 'section.pricing'}}>
      <Container>
        <SectionHeader
        slogan='Pricing Plan'
        title="Choose your pricing plan" 
        />
      <Flex sx={styles.buttonGroup}>
        <Box sx={styles.buttonGroupInner}>
          <button
          className={state.active === 'monthly' ? 'active' : ''}
          type='button'
          aria-label="Monthly"
          onClick={() => handlePricingPlan('monthly')}
          >
          EMS
          </button>
          <button
          className={state.active === 'annual' ? 'active' : ''}
          type='button'
          aria-label="Annual"
          onClick={() => handlePricingPlan('annual')}
          >
          Local Post
          </button>
        </Box>
        </Flex>
        <Box sx={styles.pricingWrapper} className="pricing__wrapper">
          <Carousel {...sliderParams}>
            {state.pricingPlan.map((packageData) => (
              <Box sx={styles.pricingItem} key={packageData.id}>
             
                <PriceCard data={packageData}/>
                
          

              </Box>
              
            ))}
           

          </Carousel>
        </Box>
     
    
      </Container>

    </section>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
		transform: translateY(0);
    opacity: 1;
  }
`;
const styles = {
  pricingWrapper: {
    mb: '-40px',
    mt: '-40px',
    mx: -3,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '&.pricing__wrapper .package__card': {
      '.package__header': {
        animation: `${fadeIn} 0.8s ease-in`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s ease-in`,
      },
      '.package__price': {
        animation: `${fadeIn2} 0.9s ease-in`,
      },
      button: {
        animation: `${fadeIn2} 1s ease-in`,
      },
    },
    '.carousel-container': {
      width: '100%',
      '> ul > li ': {
        display: 'flex',
      },
    },
    '.button__group': {
      display: ['flex', null, null, null, 'none'],
      mb: [4, null, null, null, 0],
    },
  },
  pricingItem: {
    mx: 3,
    display: 'flex',
    flexShrink: 0,
    flex: '1 1 auto',
  },
  buttonGroup: {
    justifyContent: 'center',
    mb: '7',
    mt: ['-15px', '-35px'],
    position: 'relative',
    zIndex: 2,
  },
  buttonGroupInner: {
    display: 'flex',
    padding: '7px',
    margin: '0 auto',
    borderRadius: '5px',
    backgroundColor: '#F7F8FB',
    button: {
      border: 0,
      padding: ['15px 20px', '15px 27px'],
      borderRadius: '5px',
      color: 'text',
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: 'transparent',
      cursor: 'pointer',
      fontFamily: 'body',
      letterSpacing: '-0.24px',
      transition: 'all 0.3s',
      '&.active': {
        color: '#0f2137',
        backgroundColor: '#ffffff',
        boxShadow: '0 3px 4px rgba(38, 78, 118, 0.1)',
      },
      '&:focus': {
        outline: 0,
      },
    },
  },
};
