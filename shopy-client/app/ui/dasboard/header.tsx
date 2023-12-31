'use client';
import { Group, Container } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import classes from '@/app/styles/dashboard/header.module.css';
import { logOut } from '@/app/src/lib/actions/auth.action';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useCart } from '@/app/src/providers/CartProvider';


const links = [
  { link: '/dashboard/marketplace', label: 'Marketplace' },
  { link: '/dashboard/products', label: 'Your Products' }
];
export default function Header() {
  const pathname = usePathname();
  const [cart] = useCart();
  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={clsx(classes.link, {
        [classes.active]: pathname.includes(link.link)
      })}
    >
      {link.label}
    </Link>
  ));
  return (
    <header>
      <Container size="lg" className={classes.wrapper}>
        <Image
          src="/Logo.png"
          width={135}
          height={40}
          alt="Logo image"
        />
        <Group justify="center" gap="lg" grow>
          {items}
        </Group>
        <Group justify="space-between" gap="xl">
           <span className={clsx( classes.circle, {
             [classes.hide]: cart.length === 0
           })}>
             {cart.length}
           </span>
          <Link href='/dashboard/cart'>
            <Image
              src="/Cart.svg"
              width={35}
              height={35}
              alt="Cart image"
              className={clsx( {
                [classes.cart]: cart.length > 0
              })}
            />
          </Link>
          <Image
            className={classes.logout}
            src="/Logout.svg"
            width={35}
            height={35}
            alt="Logout image"
            onClick={() => logOut()}
          />
        </Group>
      </Container>
    </header>
  );
}
