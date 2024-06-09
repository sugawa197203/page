import type { Metadata } from 'next';

const defaultTitle = 'SUGAWA';
const defaultOpenGraphImageUrl =
    'https://pbs.twimg.com/profile_images/1785927554387554304/xAF1OMUE_400x400.jpg';
const defaultDescription =
    'ただのエンジニアです。';

export const metadataBase = new URL('https://sugawa197203.github.io/');

export const defaultOpenGraphImage = {
    url: defaultOpenGraphImageUrl,
    width: 1200,
    height: 630,
};

export const defaultOpenGraph: Metadata['openGraph'] = {
    title: {
        default: defaultTitle,
        template: '%s - SUGAWA',
    },
    description: defaultDescription,
    images: [defaultOpenGraphImage],
    locale: 'ja_JP',
    url: 'https://sugawa197203.github.io/',
    siteName: 'SUGAWA Homepage',
    type: 'website',
};

export const defaultTwitterCard: Metadata['twitter'] = {
    creator: '@sugawa2018616',
    title: {
        default: defaultTitle,
        template: '%s - SUGAWA',
    },
    description: defaultDescription,
    site: 'https://sugawa197203.github.io/',
    card: 'summary_large_image',
    images: [
        {
            url: defaultOpenGraphImageUrl,
            width: 1200,
            height: 630,
        },
    ],
};

export const sharedMetadata: Metadata = {
    metadataBase: metadataBase,
    title: {
        default: defaultTitle,
        template: '%s - SUGAWA',
    },
    description:
        'ただのエンジニアです。',
    openGraph: defaultOpenGraph,
    icons: {
        shortcut: 'https://pbs.twimg.com/profile_images/1785927554387554304/xAF1OMUE_400x400.jpg',
        apple: 'https://pbs.twimg.com/profile_images/1785927554387554304/xAF1OMUE_400x400.jpg',
        other: [
            {
                rel: 'https://pbs.twimg.com/profile_images/1785927554387554304/xAF1OMUE_400x400.jpg',
                url: 'https://pbs.twimg.com/profile_images/1785927554387554304/xAF1OMUE_400x400.jpg',
            },
        ],
    },
    twitter: defaultTwitterCard,
};