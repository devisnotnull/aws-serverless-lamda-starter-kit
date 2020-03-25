import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Header from './containers/header/header'

import HomeViewContainer from './pages/home/home'
import TodoViewContainer from './pages/todo/todo'
import TodoyIdViewContainer from './pages/todoById/todoById'
import NotFoundComponent from './pages/notFound/notFound'

interface StateProps {}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps & ActionProps & SelectorProps

class AppRouter extends React.Component<Props> {
    render() {
        return (
            <>
                <Helmet>
                    <title>Photobox PIMM</title>
                    <meta name="description" content="" />
                    <meta name="og:title" property="og:title" content="" />
                    <meta property="og:type" content="website" />
                    <meta name="robots" content="index, follow" />
                </Helmet>

                <Header />

                <Switch>
                    <Route exact path="/" component={HomeViewContainer} />
                    <Route exact path="/to-do" component={TodoViewContainer} />
                    <Route exact path="/to-do/:id" component={TodoyIdViewContainer} />
                    <Route component={NotFoundComponent} />
                </Switch>
            </>
        )
    }
}

export default AppRouter
