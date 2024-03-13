import {Await, NavLink, Link} from '@remix-run/react';

import {Suspense} from 'react';
import type {HeaderQuery} from 'storefrontapi.generated';
import type {LayoutProps} from './../Layout';
import {useRootLoaderData} from '~/root';

import iconMail from './../../assets/icons/mail.svg';
import {Image} from '@shopify/hydrogen';

type HeaderProps = Pick<LayoutProps, 'header' | 'cart' | 'isLoggedIn'>;

type Viewport = 'desktop' | 'mobile';

const Header = ({header, isLoggedIn, cart}: HeaderProps) => {
  const {shop, menu, metaobjects} = header;

  // const mailLink = metaobjects?.nodes?.[0]?.field?.value;

  console.log("menu", menu)

  return (
    <header className="flex flex-col">
      <div className="bg-primary text-white h-[25px]">
        <div className="container flex justify-between">
          <div>
            <Link
              to={'mailto:objednavky@heavenshop.sk'}
              className="text-nowrap flex font-normal text-xs items-center"
            >
              <Image src={iconMail} width="20" height="25" />
              <span className="px-2">{'objednavky@heavenshop.sk'}</span>
            </Link>
          </div>
          <div className="flex items-center">
            {menu?.items?.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                className="text-xs not-last:after:content-['|']"
              >
                <span className="px-2">{item.title.toUpperCase()}</span>
              </Link>
            ))}
          </div>
          <div>
            <NavLink
              prefetch="intent"
              to="/account"
              className="font-normal text-xs items-center"
            >
              <Suspense fallback="Sign in">
                <Await resolve={isLoggedIn} errorElement="Sign in">
                  {(isLoggedIn) => (isLoggedIn ? 'Account' : 'Prihlásenie')}
                </Await>
              </Suspense>
            </NavLink>
          </div>
        </div>
      </div>
      <div>2</div>
      <div>3</div>
    </header>
  );
};

export default Header;
