import React from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default (loadComponent,show=true) => (
    class AsyncComponent extends React.Component {
        state = {
            Component: null,
        }
        async componentDidMount() {
            if (this.state.Component !== null) return
            show&&NProgress.start()
            console.log(NProgress)
            try {
                const {default: Component} = await loadComponent()
                this.setState({ Component })
            }catch (err) {
                console.error(`Cannot load component in <AsyncComponent />`);
                throw err
            }
            NProgress.done()
        }

        render() {
            const { Component } = this.state
            return (Component) ? <Component {...this.props} /> : null
        }
    }
)