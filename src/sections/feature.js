/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Rigister with Email',
    text:
      'Contact customer service for consultation, so we choose best plan for your type of goods.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Pro Subscription',
    title: '',
    text:
    'Mail the goods to adress of our warehouse and provide track codes of each package(if there is a few)'
   },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Partnership deal',
    title: 'Partnership deal',
    text:
      'After you see all packages arrived at warehouse apply for packing and scaling them all together ',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Customer Support',
    text:
      'Proccesd payment and expect your package!',
  },
];

export default function Feature() {
  return (
  <></>
  //  <h1>Feature</h1>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
