import { FunctionComponent, PropsWithChildren } from 'react';
import dynamic from 'next/dynamic';
import PageLoader from '../global/page-loader';

const AdminPanel = dynamic(() => import('./admin-panel'), {
    ssr: false,
    loading: () => <PageLoader />,
});

const MainAppLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
    return <AdminPanel>

        {children}
    </AdminPanel>;
};

export default MainAppLayout;