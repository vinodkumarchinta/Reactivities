import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List, ListItem } from 'semantic-ui-react';

function App() {
  const [activities, setActivities]=useState([]);

  useEffect(()=>{
        axios.get('http://localhost:5000/api/activities').then(Response=>{
            setActivities(Response.data);
        }).catch(ex=>{
          console.log(ex);
        });
  },[]);
  return (
    <div>
      <Header as="h2" icon='users' content='Reactivities'/>
        <List>
        {activities.map((activity:any)=>(
          <ListItem key={activity["Id"]}>
            {activity["title"]}
          </ListItem>
        ))}
        </List>
    </div>
  );
}

export default App;
