'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import StoreProvider from '../StoreProvider';

type ProvidersWrapperProps = {
    children: ReactNode;
};

export default function ProvidersWrapper({ children }: ProvidersWrapperProps) {
    return (
        <SessionProvider>
            <StoreProvider>
                {children}
            </StoreProvider>
        </SessionProvider>
    );
}
