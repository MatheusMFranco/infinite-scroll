import { useEffect, useState } from 'react';
import * as Styled from './styles';
import { Table } from '../../components/Table';
import { InfiniteScroll } from '../../components/InfiniteScroll';
import * as service from '../../services/LegacyService';
import { Title } from '../../components/Title';

function List() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => loadList(), [page]);

  function loadList() {
    service.find(page).then((dataList) => {
      if (dataList) {
        setList([...list, ...dataList.data]);
        setTotalItems(dataList.metadata.totalItems);
        setLoading(false);
      }
    });
  }

  function showMore() {
    setLoading(true);
    if (loading || page === totalItems) {
      return;
    }
    setPage(page + 1);
  }

  return (
    <Styled.Container>
      <Title>Legacy</Title>
      <Table data={list} />
      {!loading && <InfiniteScroll showMore={showMore} />}
      {loading && <p>Loading...</p>}
    </Styled.Container>
  );
}

export default List;
