import Head from 'next/head';
import { Footer, Header } from '@/components/Common';

interface Props {
  subscription?: any;
  children: React.ReactNode;
  className?: string;
  title?: string;
  fullTitle?: string;
  description?: string;
  ogImage?: string;
  animate?: boolean;
  withHeader?: boolean;
  withFooter?: boolean;
}

const SiteLayout = ({
  children,
  title,
  fullTitle,
  description,
  ogImage,
  animate,
  withHeader,
  withFooter,
  ...props
}: Props) => {
  const defaultTitle =
    fullTitle || title
      ? `${title} - ${process.env.siteMeta?.title}`
      : `${process.env.siteMeta.title}`;
  const pageTitle = fullTitle ? fullTitle : defaultTitle;
  const pageDescription = description || process.env.siteMeta?.description;
  const pageImage = ogImage || process.env.siteMeta?.imageUrl;

  return (
    <div className='flex flex-col min-h-screen bg-withe'>
      <Head>
        <meta name='description' content={pageDescription} />
        <meta property='og:locale' content='id_ID' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={pageTitle} />
        <meta property='og:description' content={pageDescription} />
        <meta property='og:url' content={process.env.siteMeta?.url} />
        <meta property='og:site_name' content={process.env.siteMeta?.title} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:description' content={pageDescription} />
        <meta name='twitter:title' content={pageTitle} />
        <meta name='twitter:image' content={pageImage} />
        <title>{pageTitle}</title>
      </Head>

      {withHeader && <Header />}
      <main className='flex-grow'>{children}</main>
      {withFooter && <Footer />}
    </div>
  );
};

export default SiteLayout;
