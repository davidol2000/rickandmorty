import React from 'react';
import MainLayout from '../components/Layouts/MainLayout';
import CardsLayout from '../components/Layouts/CardsLayout';
import client from '../utils/client';
import { gql } from '@apollo/client';

export default function Page({ characters }) {
  return (
    <div style={{ background: 'url(/wp.jpg) center center/cover no-repeat' }}>
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>
      <MainLayout>
        <CardsLayout characters={characters} />
      </MainLayout>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const pageIndex = ctx.query.page;
  const QUERY = gql`
    query Query($charactersPage: Int) {
      characters(page: $charactersPage) {
        results {
          id
          name
          image
          status
          created
        }
      }
    }
  `;

  const charactersData = await client.query({
    query: QUERY,
    variables: { charactersPage: +pageIndex },
  });
  const characters = charactersData.data.characters.results;
  return {
    props: {
      characters,
    },
  };
}
