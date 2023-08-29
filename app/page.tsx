import dayjs from "dayjs";
import ptBR from "dayjs/locale/pt-br";

dayjs.locale(ptBR);

export const metadata = {
  title: 'Starter Theme Next',
  description:
    '',
  openGraph: {
    title: 'Starter Theme Next',
    description: '',
    url: '',
    siteName: '',
    images: [
      {
        url: '',
        width: 800,
        height: 600,
      },
      {
        url: '',
        width: 1800,
        height: 1600,
        alt: 'banner full desktop',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    icon: '/favicon.png'
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default async function Home() {
  return (
    <section className="h-screen flex justify-center items-center">
      <h1 className="text-white text-2xl">Starter shopify theme <br /> next with tailwindcss</h1>
    </section>
  );
}
