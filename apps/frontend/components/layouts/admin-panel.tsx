'use client';
import Header from './Header';
import Sidebar from './Siderbar';

const AdminPanel = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='h-screen'>
            <Sidebar />
            <main className='flex flex-col h-full'>
                <Header />
                <div className='w-full pt-5  sm:px-6 md:px-8 lg:pl-64 bg-[#f3f4f6] dark:bg-slate-700 dark:text-[#f3f4f6] flex-grow'>
                    {children}
                </div>
            </main>
        </main>
    );
};

export default AdminPanel;