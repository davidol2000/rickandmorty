import { gql } from '@apollo/client';
import client from '../utils/client';
import { PagesContext } from '../context/pagesContext';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home({ pagesCount }) {
  const router = useRouter();
  const { setPagesCount } = useContext(PagesContext);
  useEffect(() => {
    setPagesCount(pagesCount);
    if (typeof window !== 'undefined') {
      router.push('/1');
    }
  }, []);
  return null;
}

export async function getServerSideProps() {
  const QUERY = gql`
    query getPagination {
      characters {
        info {
          pages
        }
      }
    }
  `;
  const { data } = await client.query({ query: QUERY });
  return {
    props: {
      pagesCount: +data.characters.info.pages,
    },
  };
}
