import { useLocation } from 'react-router';
import { RecoilRoot } from 'recoil';

import Tabbar from './Tabbar/Tabbar';

export default function IndexLayouts(props: any) {
    let location = useLocation();
    const isTab =
        location.pathname.includes('/film') ||
        location.pathname === '/center' ||
        location.pathname === '/order' ||
        location.pathname === '/cinema';

    return (
        <RecoilRoot>
            <div>
                {isTab ? (
                    <>
                        <div>
                            {props.children}
                            <div style={{ height: 50 }}></div>
                        </div>

                        <Tabbar />
                    </>
                ) : (
                    <div>{props.children}</div>
                )}
            </div>
        </RecoilRoot>
    );
}
