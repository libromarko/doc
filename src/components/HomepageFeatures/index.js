import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to use all platforms',
    Svg: require('@site/static/img/undraw_progressive_app_m-9-ms.svg').default,
    description: (
      <>
        Chrome and Firefox add-ons, web and mobile applications with you.
      </>
    ),
  },
  {
    title: 'Focus on simplicity',
    Svg: require('@site/static/img/undraw_synchronize_re_4irq.svg').default,
    description: (
      <>
        While designing, we focused on simplicity.
      </>
    ),
  },
  {
    title: 'Accessibleness',
    Svg: require('@site/static/img/undraw_share_link_re_54rx.svg').default,
    description: (
      <>
        Your bookmarks are with you everywhere. Moreover, it can be shared.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
