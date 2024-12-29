import { Layout, Menu } from 'antd';
const { Header } = Layout;

const lables = ['Home','Categories','About']
const items = lables.map((label, index) => ({
    key: index + 1,
    label
  }));

const MyHeader = () => {
    return (
        <>
        <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent:'space-between'
        }}
      >
        <div className="demo-logo" style={{color:'white'}} > MyBlog </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      </>
    )
}

export default MyHeader;