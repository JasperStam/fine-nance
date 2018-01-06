import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import NotificationArea from '../component/NotificationArea';
import Login from './Login';
import Nav from './Nav';
import AppContainer from '../component/AppContainer';
import { withRouter } from 'react-router-dom';
import { ContentContainer } from 're-cy-cle';
import View from '../store/View';
import Router from './Router';

@withRouter
@observer
export default class App extends Component {
    static propTypes = {
        store: PropTypes.instanceOf(View).isRequired,
    };

    render() {
        const { store } = this.props;
        let content = null;
        if (store.isAuthenticated) {
            content = <Router store={store} />;
        } else {
            content = <Login viewStore={store} />;
        }

        return (
            <AppContainer>
                <Nav store={store} />
                <ContentContainer>{content}</ContentContainer>
                {store.currentModal ? (
                    <store.currentModal.render
                        viewStore={store}
                        {...store.currentModal}
                    />
                ) : null}
                <NotificationArea store={store} />
            </AppContainer>
        );
    }
}
