import React, { FC, ReactElement } from 'react'
import { renderToString } from 'react-dom/server'
import Helmet from 'react-helmet'

interface StatePropTypes {
    initialState: string
    splitPoints: string
    rootComponent: ReactElement<any> | null
    assets: {
        [key: string]: string
    }
    PROD: boolean
}

/**
 *
 * @param param0
 */
const Html: FC<StatePropTypes> = ({ initialState, rootComponent, assets, PROD, splitPoints }) => {
    const helmet = Helmet.renderStatic()
    const htmlAttrs = helmet.htmlAttributes.toComponent()
    const bodyAttrs = helmet.bodyAttributes.toComponent()

    const keys = Object.keys(assets)
    const js = keys.filter(a => a.includes('.js') && !a.includes('.map') && !a.includes('.json'))
    const css = keys.filter(a => a.includes('.css') && !a.includes('.map'))

    const srcJsFiles = js.map(key => <script src={assets[key]} />)
    const srcCssFiles = css.map(key => <link rel="stylesheet" href={assets[key]} type="text/css" />)

    return (
        <>
            <html {...htmlAttrs}>
                <head>
                    <meta charSet="utf-8" />
                    {helmet.title.toComponent()}
                    {helmet.meta.toComponent()}
                    {helmet.link.toComponent()}
                    {srcCssFiles}
                </head>
                <body {...bodyAttrs}>
                    <script dangerouslySetInnerHTML={{ __html: initialState }} />
                    <script dangerouslySetInnerHTML={{ __html: splitPoints }} />
                    {PROD && rootComponent ? (
                        <div
                            id="root"
                            dangerouslySetInnerHTML={{
                                __html: renderToString(rootComponent),
                            }}
                        />
                    ) : (
                        <div id="root" />
                    )}
                    <div id="modal-root" />
                    {srcJsFiles}
                    <script src={'/bundle.js'} />
                </body>
            </html>
        </>
    )
}

export default Html
