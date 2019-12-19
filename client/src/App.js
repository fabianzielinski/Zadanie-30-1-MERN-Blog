import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';

// import routes
import Home from './components/pages/Home/HomePage';
import Posts from './components/pages/Posts/PostsPage';
import SinglePost from './components/pages/Posts/SinglePostPage';
import Contact from './components/pages/Contact/ContactPage';
import NewPost from './components/pages/Posts/NewPostPage';
import NotFound from './components/pages/NotFound/NotFoundPage';

class App extends React.Component {

  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/posts" exact component={Posts} />
          <Route path="/posts/new" exact component={NewPost} />
          <Route path="/posts/:id" exact component={SinglePost} />          
          <Route path="/contact" exact component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    );
  }

}

export default App;
