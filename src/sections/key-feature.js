/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Privacy',
    text:
      'We do not require any of your personal information. It takes 2 minutes to set up an account and start shipping goods.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Partnership deal',
    title: 'Convinience',
    text:
       'Can send a parcel to your friend, customer or to your door, providing help in managing your oder from Taobao or other Mainland sellers '  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Pro Subscription',
    title: 'Easy Pay',
    text:
     'You Can pay from any part of the world, just have access to your crypto wallet'  },
  // {
  //   id: 4,
  //   imgSrc: Support,
  //   altText: 'Customer Support',
  //   title: 'Support',
  //   text:
  //     'We help you to manage your oder from Taobao and any other ',
  // },
];

export default function KeyFeature() {
  return (
   <section sx={{ variant: 'section.keyFeature'}} id='feature'>
      <Container>
        <SectionHeader
        slogan="Why to choose Us ?"
        title=""
         />
         <Grid sx={styles.grid} > 
           {data.map((item) => (
             <FeatureCardColumn
             key={item.id}
             imgSrc={item.imgSrc}
             alt={item.altText}
             title={item.title}
             text={item.text}
             src={item.imgSrc}
            
             />
           ))}
         </Grid>

      </Container>

   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
 
};
