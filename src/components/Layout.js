import React from 'react';

export default class Layout extends React.Component {
  render(){
  }
}

class InstallPage extends React.Component {
  render(){
    return(
      <Layout
        navbar = {<Navbar/>}
        content = {<InstallPageContent/>}
        sidebar = {<Sidebar/>}
      />
    )
  }
}