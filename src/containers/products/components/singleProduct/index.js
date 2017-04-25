import React from 'react';
import BreadCrumb from '../../../../components/breadcrumbs';
import Title from './title';
import Container from './container';
import ActionBtns from './actionBtns';
import Modal from './modal';

export default function SingleProduct() {
  return (
    <div className="juice-page__main">
      <BreadCrumb
        paths={['Home']}
        classes={['home']}
        destination={['']}
        lastCrumb="Juice Page"
      />
      <Title />
      <Container />
      <ActionBtns />
      <Modal />
    </div>
  );
}
