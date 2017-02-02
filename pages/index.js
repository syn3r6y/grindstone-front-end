import React, { Component } from 'react';
import Link from 'next/link';
import { HtmlHead } from '../components/head';  
import { H1, H2, H3, H4 } from '../components/headings';

class Index extends Component {
    render() {
        return (
            <div>
                <HtmlHead title="Grindstone - Home" metaDesc="Grindstone on-demand home" />
                <H1>Welcome to On-demand App!</H1>
                <p>Please login to get started.</p>
                <Link href="/login"><a>Sign In</a></Link>
            </div>
        );
    }
}

export default Index;