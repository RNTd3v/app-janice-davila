import React from 'react';
import axios from 'axios';

import withAnalytics from '../src/hocs/withAnalytics';

const Bio = ({ bio }) => (
    <section className="container bio">
        <Head>
            <title>Janice D'Avila - Bio</title>
        </Head>
        <h1>{bio.title}</h1>
        <p>{bio.description}</p>
    </section>
);

Bio.getInitialProps = async () => {
    const response = await axios.get(
        `${process.env.API_URL}/bio/1`
    );
    return { bio: response.data }
}

export default withAnalytics()(Bio);