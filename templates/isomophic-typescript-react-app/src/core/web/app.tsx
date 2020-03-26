import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Header from './containers/header/header'

import HomeViewContainer from './pages/home/home'
import DemoViewContainer from './pages/demo/demo'
import PostsContainer from './pages/posts/posts'
import NotFoundComponent from './pages/notFound/notFound'

import '@core/web/style/core.css';

interface StateProps {}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps & ActionProps & SelectorProps

class AppRouter extends React.Component<Props> {
    render() {
        return (
            <>
                <Helmet>
                    <title>Title</title>
                    <meta name="description" content="" />
                    <meta name="og:title" property="og:title" content="" />
                    <meta property="og:type" content="website" />
                    <meta name="robots" content="index, follow" />
                </Helmet>

                <Header />

                <Switch>
                    <Route exact path="/" component={HomeViewContainer} />
                    <Route exact path="/demo" component={DemoViewContainer} />
                    <Route exact path="/posts" component={PostsContainer} />
                    <Route component={NotFoundComponent} />
                </Switch>
            </>
        )
    }
}

export default AppRouter
