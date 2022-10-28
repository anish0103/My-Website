import React from 'react'
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name='description' content="A Full Stack Developer who specializes in JavaScript Technologies across the whole stack (Node, Express, React, React Native). Experience building complete web and mobile applications with backend API Systems." />
            <meta name="keywords" content="Anish Patel, MERN Stack, Developer, Portfolio, AP, Anish Patel Developer, Anish Patel MERN Stack Developer, Anish Patel Portfolio" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="15 days" />
            <meta name="author" content="Anish Patel" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    )
}

export default SEO