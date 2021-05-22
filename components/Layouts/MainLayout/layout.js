import React, { useContext, useEffect } from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { PagesContext } from '../../../context/pagesContext';
import { useRouter } from 'next/router';
import styles from './styles';

export default function MainLayout({ children }) {
  const classes = styles();
  const { currentPage, setCurrentPage, pagesCount } = useContext(PagesContext);
  const router = useRouter();
  useEffect(() => {
    router.push(`/${currentPage}`);
  }, [currentPage]);
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
        align="center"
      >
        <Grid item>
          <Typography variant="h1">Rick and Morty Encyclopedia</Typography>
        </Grid>
        <Grid item style={{ marginTop: '1em' }}>
          {children}
        </Grid>
        <Grid item>
          <Pagination
            count={pagesCount}
            page={currentPage}
            classes={{ ul: classes.pagination }}
            size="large"
            onChange={(e, value) => {
              setCurrentPage(value);
            }}
          ></Pagination>
        </Grid>
      </Grid>
    </Container>
  );
}
