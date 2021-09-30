import React, { FunctionComponent } from 'react';
import Layout from './Layout';
import PageTitle from './PageTitle';

type PageProps = {
  title?: string;
} & typeof defaultProps;

const defaultProps = {};

export const Page: FunctionComponent<PageProps> = ({ title, children }) => {
  return (
    <Layout>
      {title && <PageTitle title={title} />}
      {children}
    </Layout>
  );
};
