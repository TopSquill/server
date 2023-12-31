/*
 * HomePage
 *
 */

import { Box, Grid, GridItem, Layout, Main } from '@strapi/design-system';
import { LoadingIndicatorPage, useGuidedTour } from '@strapi/helper-plugin';
import useLicenseLimitNotification from 'ee_else_ce/hooks/useLicenseLimitNotification';
import React, { memo, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import isGuidedTourCompleted from '../../components/GuidedTour/utils/isGuidedTourCompleted';
import { useModels } from '../../hooks';
import HomeHeader from './HomeHeader';
import cornerOrnamentPath from './assets/corner-ornament.svg';

const LogoContainer = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: ${150 / 16}rem;
  }
`;

const HomePage = () => {
  // Temporary until we develop the menu API
  const { collectionTypes, singleTypes, isLoading: isLoadingForModels } = useModels();
  const { guidedTourState, isGuidedTourVisible, isSkipped } = useGuidedTour();
  useLicenseLimitNotification();

  const showGuidedTour =
    !isGuidedTourCompleted(guidedTourState) && isGuidedTourVisible && !isSkipped;

  const { push } = useHistory();
  const handleClick = (e) => {
    e.preventDefault();

    push('/plugins/content-type-builder/content-types/create-content-type');
  };

  const hasAlreadyCreatedContentTypes = useMemo(() => {
    const filterContentTypes = (contentTypes) => contentTypes.filter((c) => c.isDisplayed);

    return (
      filterContentTypes(collectionTypes).length > 1 || filterContentTypes(singleTypes).length > 0
    );
  }, [collectionTypes, singleTypes]);

  if (isLoadingForModels) {
    return <LoadingIndicatorPage />;
  }

  return (
    <Layout>
      <FormattedMessage id="HomePage.helmet.title" defaultMessage="Homepage">
        {(title) => <Helmet title={title[0]} />}
      </FormattedMessage>
      <Main>
        {/* <LogoContainer>
          <img alt="" aria-hidden src={cornerOrnamentPath} />
        </LogoContainer> */}
        <Box padding={10}>
          <Grid>
            <GridItem col={8} s={12}>
              <HomeHeader
                onCreateCT={handleClick}
                hasCreatedContentType={hasAlreadyCreatedContentTypes}
              />
            </GridItem>
          </Grid>
          {/* <Grid gap={6}>
            <GridItem col={8} s={12}>
              <ContentBlocks />
            </GridItem>
            <GridItem col={4} s={12}>
              <SocialLinks />
            </GridItem>
          </Grid> */}
        </Box>
      </Main>
    </Layout>
  );
};

export default memo(HomePage);
