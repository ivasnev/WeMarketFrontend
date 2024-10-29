import React from 'react';

import renderSection2 from './section2';

import toolbarSectionStyles from './toolbarSection.module.scss';

function renderToolbarSection(props) {
  return (
    <section className={toolbarSectionStyles.toolbarSection}>
      {/* Category and utility tools section */}
      {renderSection2(props)}
    </section>
  );
}

export default renderToolbarSection;
