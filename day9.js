
import React from 'react'
import { useState, useEffect } from "react";
import { LoadImages, SearchImages } from './Components/api';
import './App.css';
import Image from './Components/image';
import "antd/dist/antd.css";
import { Upload, message, Button } from 'antd';


import AppHeader from './Components/common/header'; //header
import { Layout} from 'antd';

const { Header} = Layout;
  
const props = {                                         //Upload
  headers: {
    authorization: 'authorization-text',    
  },
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  name: 'file',
};

function App() {
  const [query, setQuery] = useState()
  const [searchQ, setSearch] = useState()
  const data = LoadImages ();
  const search =() => { 
    setSearch(query)
  }
  const searchData = SearchImages(searchQ)
  console.log(searchData);

  return (
    <>
    <div style={{                                               //upload  
      display: 'block', width: 700, padding: 30
    }}>
      <h4>ReactJS Ant-Design Upload Component</h4>
      <>
        <Upload {...props}
          onChange={(response) => {
            if (response.file.status !== 'uploading') {
              console.log(response.file, response.fileList);
            }
            if (response.file.status === 'done') {
              message.success(`${response.file.name} 
                               file uploaded successfully`);
            } else if (response.file.status === 'error') {
              message.error(`${response.file.name} 
                             file upload failed.`);
            }
          }}
        >
          <Button>Upload File</Button>
        </Upload>
      </>
    </div>
    </>,                                            //upload
    
    // Header starts from here
    <Layout className="layout">      
    <Header>
      <AppHeader/>
      
    </Header>
  </Layout>,
  
  // api , search and images related part
    <div className="App">
      <header className="App-header">
        IMGUR FRONTEND
         {/* <img src=" img/url" height={200} width={200} ?> */}
      <div>
        <input type="text" onChange={(event) => setQuery(event.target.value)} />
        <button onClick={search}>SEARCH</button><br></br>
      </div>
    <div className=" contain">
    {searchQ ? searchData.map((img, key) => (
        <Image src={img.urls.thumb} key={key} />
      )) : data.map((img, key) => (
        <Image src={img.urls.thumb} key={key} />
      ))}
    
     </div>
     </header>
    </div>
  );
}

export default App;
