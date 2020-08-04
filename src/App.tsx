import React, { useEffect } from 'react';
import { Layout, Spin, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { loadPostsAsync } from './store/posts/actions'
import './App.css';
import 'antd/dist/antd.css';
import { RootState } from 'typesafe-actions';

const { Header, Content } = Layout;

const postsSelector = (state: RootState) => state.posts.items;
const isLoadingSelector = (state: RootState) => state.posts.isLoading;

const columns = [
  {
    title: 'Post Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Post Body',
    dataIndex: 'body',
    key: 'body',
  }
];



const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);
  const posts = useSelector(postsSelector);
  useEffect(() => {
    dispatch(loadPostsAsync.request());
  }, [dispatch]);
  return (
    <Layout>
      <Header>React example App</Header>
      <Content>{isLoading ? <Spin size="large" />: <Table rowKey="id" dataSource={posts} columns={columns} />}</Content>
    </Layout>
  );
}

export default App;
